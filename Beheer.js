/* =========================================
   STUDYSWAP - BEHEER
   Productoverzicht, reviews en statistieken
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
        const waarde = Number(String(product.price ?? product.prijs ?? 0).replace(",", ".")) || 0;
        return totaal + waarde;
    }, 0);

    const gemiddeldePrijs = totaalProducten > 0
        ? totaalPrijs / totaalProducten
        : 0;

    const totaalReviews = producten.reduce((totaal, product) => {
        return totaal + (Array.isArray(product.reviews) ? product.reviews.length : 0);
    }, 0);

    console.log(
        "%c STUDYSWAP BEHEER",
        "background: #7950e8; color: white; font-size: 18px; font-weight: bold; padding: 10px 18px; border-radius: 8px;"
    );

    console.table([
        { Onderdeel: "Aantal producten", Waarde: totaalProducten },
        { Onderdeel: "Totale productwaarde", Waarde: "€ " + totaalPrijs.toFixed(2).replace(".", ",") },
        { Onderdeel: "Gemiddelde prijs", Waarde: "€ " + gemiddeldePrijs.toFixed(2).replace(".", ",") },
        { Onderdeel: "Totaal aantal reviews", Waarde: totaalReviews }
    ]);

    if (producten.length === 0) {
        console.warn("Er zijn nog geen samenvattingen toegevoegd.");
        return;
    }

    const productOverzicht = producten.map((product, index) => {
        const reviews = Array.isArray(product.reviews) ? product.reviews : [];
        const gemRating = reviews.length > 0
            ? (reviews.reduce((s, r) => s + (Number(r.rating) || 5), 0) / reviews.length).toFixed(1).replace(".", ",")
            : "5,0";

        return {
            Nummer: index + 1,
            Naam: product.name || product.naam || "Naam onbekend",
            Prijs: "€ " + (Number(String(product.price ?? product.prijs ?? 0).replace(",", ".")) || 0).toFixed(2).replace(".", ","),
            Vak: product.category || product.vak || "Niet ingesteld",
            Opleiding: product.education || product.opleiding || "Niet ingesteld",
            AI_Check: product.aiVerified !== false ? "Goedgekeurd" : "In wachtrij",
            Rating: `⭐ ${gemRating} (${reviews.length})`
        };
    });

    console.table(productOverzicht);
}

beheerOverzicht();
