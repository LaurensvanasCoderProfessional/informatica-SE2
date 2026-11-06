
/* =========================================
   STUDYSWAP - BEHEER
   Productoverzicht en statistieken
   ========================================= */

function beheerOverzicht() {
    const producten = JSON.parse(
        localStorage.getItem("studyswap-products") || "[]"
    );

    // Controleer of de opgeslagen gegevens geldig zijn
    if (!Array.isArray(producten)) {
        console.error("StudySwap: Ongeldige productgegevens.");
        return;
    }

    // Bereken statistieken
    const totaalProducten = producten.length;

    const totaalPrijs = producten.reduce((totaal, product) => {
        return totaal + (Number(product.prijs) || 0);
    }, 0);

    const gemiddeldePrijs = totaalProducten > 0
        ? totaalPrijs / totaalProducten
        : 0;

    // Dashboard
    console.clear();

    console.log(
        "%c STUDYSWAP BEHEER",
        "background: #7950e8; color: white; font-size: 22px; font-weight: bold; padding: 15px 25px; border-radius: 8px;"
    );

    console.log(
        "%c PRODUCTSTATISTIEKEN",
        "color: #7950e8; font-size: 15px; font-weight: bold;"
    );

    console.table([
        {
            Onderdeel: "Aantal producten",
            Waarde: totaalProducten
        },
        {
            Onderdeel: "Totale productwaarde",
            Waarde: "€ " + totaalPrijs.toFixed(2)
        },
        {
            Onderdeel: "Gemiddelde prijs",
            Waarde: "€ " + gemiddeldePrijs.toFixed(2)
        }
    ]);

    // Productoverzicht
    console.log(
        "%c OPGESLAGEN SAMENVATTINGEN",
        "color: #7950e8; font-size: 15px; font-weight: bold;"
    );

    if (producten.length === 0) {
        console.warn(
            "Er zijn nog geen samenvattingen toegevoegd."
        );
        return;
    }

    const productOverzicht = producten.map((product, index) => ({
        Nummer: index + 1,
        Naam: product.naam || "Naam onbekend",
        Prijs: "€ " + (Number(product.prijs) || 0).toFixed(2),
        Vak: product.vak || "Niet ingesteld",
        Opleiding: product.opleiding || "Niet ingesteld"
    }));

    console.table(productOverzicht);

    console.log(
        "%c TOTAAL: " + totaalProducten + " SAMENVATTING(EN)",
        "background: #eee8ff; color: #6035cf; font-size: 13px; font-weight: bold; padding: 10px;"
    );
}

// Beheer uitvoeren
beheerOverzicht();
