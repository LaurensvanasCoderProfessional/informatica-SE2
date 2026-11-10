console.log("StudySwap tests gestart");

// 1. CONTROLEREN OF FUNCTIES BESTAAN
console.assert(typeof renderProducts === "function", "❌ Productweergave bestaat niet");
console.assert(typeof filterCategory === "function", "❌ Categoriefilter bestaat niet");
console.assert(typeof openSell === "function", "❌ Verkoopformulier bestaat niet");
console.assert(typeof closeSell === "function", "❌ Sluiten verkoopformulier bestaat niet");
console.assert(typeof openLogin === "function", "❌ Loginfunctie bestaat niet");
console.assert(typeof buyProduct === "function", "❌ Koopfunctie bestaat niet");
console.assert(typeof saveProducts === "function", "❌ Opslagfunctie bestaat niet");
console.assert(typeof loadProducts === "function", "❌ Laadfunctie bestaat niet");

// 2. CONTROLEREN OF PRODUCTEN BESTAAN
console.assert(Array.isArray(products), "❌ Producten moeten een array zijn");
console.assert(products.length > 0, "❌ Er zijn geen producten beschikbaar");

// 3. CONTROLEREN OF PRODUCTGEGEVENS GELDIG ZIJN
products.forEach((product, index) => {
    console.assert(
        (product.name || product.naam) && typeof (product.name || product.naam) === "string",
        `❌ Product ${index + 1} heeft geen geldige naam`
    );
    console.assert(
        typeof (product.price ?? product.prijs) === "number" && (product.price ?? product.prijs) > 0,
        `❌ Product ${index + 1} heeft geen geldige prijs`
    );
    console.assert(
        product.category || product.vak,
        `❌ Product ${index + 1} heeft geen categorie`
    );
});

// 4. CONTROLEREN OF HTML-ELEMENTEN BESTAAN
console.assert(document.getElementById("productGrid"), "❌ Productenoverzicht ontbreekt (#productGrid)");
console.assert(document.getElementById("sellForm"), "❌ Verkoopformulier ontbreekt (#sellForm)");
console.assert(document.getElementById("searchInput"), "❌ Zoekbalk ontbreekt (#searchInput)");
console.assert(document.getElementById("loginModal"), "❌ Loginvenster ontbreekt (#loginModal)");

// 5. EXTRA KWALITEITSCONTROLES (Chef Kwaliteit)
products.forEach((product, index) => {
    console.assert(
        typeof (product.description || product.beschrijving) === "string" &&
        (product.description || product.beschrijving).length > 0,
        `❌ Product ${index + 1} heeft geen geldige beschrijving`
    );
});

console.assert(
    document.querySelector(".sell-section button") !== null,
    "❌ De actieknop op de verkoopsectie ontbreekt"
);

// 6. TESTRESULTAAT
console.log("StudySwap tests afgerond.");
