
console.log("StudySwap tests gestart");

// 1. CONTROLEREN OF FUNCTIES BESTAAN

console.assert(
  typeof renderProducts === "function",
  "❌ Productweergave bestaat niet"
);

console.assert(
  typeof filterCategory === "function",
  "❌ Categoriefilter bestaat niet"
);

console.assert(
  typeof openSell === "function",
  "❌ Verkoopformulier bestaat niet"
);

console.assert(
  typeof closeSell === "function",
  "❌ Sluiten verkoopformulier bestaat niet"
);

console.assert(
  typeof openLogin === "function",
  "❌ Loginfunctie bestaat niet"
);

console.assert(
  typeof buyProduct === "function",
  "❌ Koopfunctie bestaat niet"
);

console.assert(
  typeof saveProducts === "function",
  "❌ Opslagfunctie bestaat niet"
);

console.assert(
  typeof loadProducts === "function",
  "❌ Laadfunctie bestaat niet"
);


// 2. CONTROLEREN OF PRODUCTEN BESTAAN

console.assert(
  Array.isArray(products),
  "❌ Producten moeten een array zijn"
);

console.assert(
  products.length > 0,
  "❌ Er zijn geen producten beschikbaar"
);


// 3. CONTROLEREN OF PRODUCTGEGEVENS GELDIG ZIJN

products.forEach((product, index) => {
  console.assert(
    product.name && typeof product.name === "string",
    `❌ Product ${index + 1} heeft geen geldige naam`
  );

  console.assert(
    typeof product.price === "number" &&
    product.price > 0,
    `❌ Product ${index + 1} heeft geen geldige prijs`
  );

  console.assert(
    product.category,
    `❌ Product ${index + 1} heeft geen categorie`
  );
});


// 4. CONTROLEREN OF HTML-ELEMENTEN BESTAAN

console.assert(
  document.getElementById("product-list"),
  "❌ Productenoverzicht ontbreekt"
);

console.assert(
  document.getElementById("sell-form"),
  "❌ Verkoopformulier ontbreekt"
);

console.assert(
  document.getElementById("search"),
  "❌ Zoekbalk ontbreekt"
);

console.assert(
  document.getElementById("login-modal"),
  "❌ Loginvenster ontbreekt"
);


// 5. TESTRESULTAAT

console.log("StudySwap tests afgerond.");
