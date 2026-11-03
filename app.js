
let products = [
  {
    id: 1,
    name: "Biologie samenvatting",
    category: "Samenvattingen",
    description: "Uitgebreide zelfgemaakte biologie samenvatting.",
    price: 3.99,
    seller: "Emma",
    icon: "📚"
  },
  {
    id: 2,
    name: "Study Planner",
    category: "Planners",
    description: "Handige planner voor je schoolweek.",
    price: 2.49,
    seller: "Lucas",
    icon: "📅"
  },
  {
    id: 3,
    name: "Geschiedenis presentatie",
    category: "PowerPoints",
    description: "Een uitgebreide presentatie over de geschiedenis.",
    price: 4.99,
    seller: "Sophie",
    icon: "📊"
  },
  {
    id: 4,
    name: "Notion Study Template",
    category: "Templates",
    description: "Organiseer al je huiswerk en deadlines.",
    price: 2.99,
    seller: "Daan",
    icon: "💻"
  }
];

let selectedCategory = "Alles";

// PRODUCTEN OPHALEN EN OPSLAAN

function loadProducts() {
  try {
    const saved = localStorage.getItem("studyswap-products");

    if (saved !== null) {
      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed)) {
        products = parsed;
      }
    }
  } catch (error) {
    console.error("Producten konden niet worden geladen:", error);
  }
}

function saveProducts() {
  try {
    localStorage.setItem(
      "studyswap-products",
      JSON.stringify(products)
    );
  } catch (error) {
    alert("Opslaan is niet gelukt. Controleer de beschikbare opslagruimte.");
    console.error(error);
  }
}


// PRODUCTEN WEERGEVEN

function renderProducts() {
  const container = document.getElementById("product-list");
  const searchInput = document.getElementById("search");

  if (!container || !searchInput) return;

  const search = searchInput.value.toLowerCase().trim();

  const filtered = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "Alles" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  container.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-message";
    empty.textContent = "Geen producten gevonden. Probeer een andere zoekopdracht.";

    container.appendChild(empty);
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    const icon = document.createElement("div");
    icon.className = "product-icon";
    icon.textContent = product.icon || "📁";

    const category = document.createElement("span");
    category.className = "tag";
    category.textContent = product.category;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;

    const seller = document.createElement("small");
    seller.textContent = "Verkoper: " + product.seller;

    const bottom = document.createElement("div");
    bottom.className = "product-bottom";

    const price = document.createElement("strong");
    price.textContent = "€" + Number(product.price).toFixed(2);

    const button = document.createElement("button");
    button.textContent = "Bekijken";
    button.onclick = () => buyProduct(product.id);

    bottom.append(price, button);

    card.append(
      icon,
      category,
      name,
      description,
      seller,
      bottom
    );

    container.appendChild(card);
  });
}


// CATEGORIE FILTEREN

function filterCategory(category) {
  selectedCategory = category;

  renderProducts();

  document.getElementById("producten").scrollIntoView({
    behavior: "smooth"
  });
}


// PRODUCT BEKIJKEN

function buyProduct(id) {
  const product = products.find(p => p.id === id);

  if (!product) return;

  alert(
    "Je hebt gekozen voor: " + product.name +
    "\nPrijs: €" + Number(product.price).toFixed(2) +
    "\nVerkoper: " + product.seller +
    "\n\nEchte betalingen worden later toegevoegd."
  );
}


// VERKOOPVENSTER

function openSell() {
  document.getElementById("sell-modal").style.display = "flex";
}

function closeSell() {
  document.getElementById("sell-modal").style.display = "none";
}


// INLOGVENSTER

function openLogin() {
  document.getElementById("login-modal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("login-modal").style.display = "none";
}


// PRODUCT VERKOPEN

document.getElementById("sell-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const file = document.getElementById("product-file").files[0];

  if (!file) {
    alert("Selecteer eerst een bestand.");
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    alert("Het bestand mag maximaal 10 MB zijn.");
    return;
  }

  const price = Number(
    document.getElementById("product-price").value
  );

  if (!Number.isFinite(price) || price < 0.50 || price > 100) {
    alert("Vul een geldige prijs tussen €0,50 en €100 in.");
    return;
  }

  const product = {
    id: Date.now(),
    name: document.getElementById("product-name").value.trim(),
    category: document.getElementById("product-category").value,
    description: document.getElementById("product-description").value.trim(),
    price: price,
    seller: document.getElementById("seller-name").value.trim(),
    icon: "📁"
  };

  products.push(product);

  saveProducts();
  renderProducts();

  this.reset();
  closeSell();

  alert("Product toegevoegd aan de marktplaats!");

  document.getElementById("producten").scrollIntoView({
    behavior: "smooth"
  });
});


// VENSTER SLUITEN BIJ KLIKKEN BUITEN MODAL

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


// INITIALISATIE

loadProducts();
renderProducts();
