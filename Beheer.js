
function beheerOverzicht() {
  const producten = JSON.parse(
    localStorage.getItem("studyswap-products") || "[]"
  );

  console.log("StudySwap beheeromgeving");
  console.log("Aantal opgeslagen producten:", producten.length);
}

// Later koppelen we dit aan een echte database.
beheerOverzicht();

