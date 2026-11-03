
function beheerOverzicht() {
  const producten = JSON.parse(
    localStorage.getItem("studyswap-products") || "[]"
  );

  const totaalProducten = producten.length;

  const totaalPrijs = producten.reduce((totaal, product) => {
    return totaal + (Number(product.prijs) || 0);
  }, 0);

  console.log("================================");
  console.log("       STUDYSWAP BEHEER");
  console.log("================================");
  console.log("Totaal aantal producten:", totaalProducten);
  console.log(
    "Totale waarde producten: €" + totaalPrijs.toFixed(2)
  );

  console.log("--------------------------------");
  console.log("OPGESLAGEN SAMENVATTINGEN");
  console.log("--------------------------------");

  if (producten.length === 0) {
    console.log("Er zijn nog geen producten toegevoegd.");
    return;
  }

  producten.forEach((product, index) => {
    console.log(`${index + 1}. ${product.naam || "Naam onbekend"}`);
    console.log("Prijs:", product.prijs ?? "Niet ingesteld");
    console.log("--------------------------------");
  });
}

beheerOverzicht();


