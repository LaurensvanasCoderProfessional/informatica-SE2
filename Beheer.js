/* =========================================
   STUDYSWAP - BEHEER
   Productoverzicht en statistieken
   ========================================= */

function beheerOverzicht() {
    let producten = [];

    try {
        const opgeslagen = localStorage.getItem("studyswap-products");
        producten = opgeslagen ? JSON.parse(opgeslagen) : (typeof products !== "undefined" ? products : []);
    } catch (error) {
        console.error("StudySwap: Ongeldige productgegevens.", error);
        return;
    }

    if (!Array.isArray(producten)) {
        console.error("StudySwap: Ongeldige productgegevens.");
        return;
    }

    const totaalProducten = producten.length;

    const totaalPrijs = producten.reduce((totaal, product) => {
        return totaal + (Number(product.price ?? product.prijs) || 0);
    }, 0);

    const gemiddeldePrijs = totaalProducten > 0
        ? totaalPrijs / totaalProducten
        : 0;

    console.log(
        "%c STUDYSWAP BEHEER",
        "background: #7950e8; color: white; font-size: 18px; font-weight: bold; padding: 10px 18px; border-radius: 8px;"
    );

    console.table([
        { Onderdeel: "Aantal producten", Waarde: totaalProducten },
        { Onderdeel: "Totale productwaarde", Waarde: "€ " + totaalPrijs.toFixed(2).replace(".", ",") },
        { Onderdeel: "Gemiddelde prijs", Waarde: "€ " + gemiddeldePrijs.toFixed(2).replace(".", ",") }
    ]);

    if (producten.length === 0) {
        console.warn("Er zijn nog geen samenvattingen toegevoegd.");
        return;
    }

    const productOverzicht = producten.map((product, index) => ({
        Nummer: index + 1,
        Naam: product.name || product.naam || "Naam onbekend",
        Prijs: "€ " + (Number(product.price ?? product.prijs) || 0).toFixed(2).replace(".", ","),
        Vak: product.category || product.vak || "Niet ingesteld",
        Opleiding: product.education || product.opleiding || "Niet ingesteld"
    }));

    console.table(productOverzicht);
}

beheerOverzicht();
