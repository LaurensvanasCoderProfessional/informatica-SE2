
/* =========================================
   STUDYSWAP - APP.JS
   Complete marketplace functionaliteit
   ========================================= */


/* =========================================
   1. PRODUCTEN
========================================= */

let products = [
    {
        id: 1,
        name: "Biologie samenvatting",
        category: "Biologie",
        description: "Uitgebreide zelfgemaakte biologie samenvatting.",
        price: 3.99,
        seller: "Emma",
        icon: "🧬"
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
        category: "Geschiedenis",
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


/* =========================================
   2. PRODUCTEN LADEN EN OPSLAAN
========================================= */

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
        console.error(
            "StudySwap: Producten konden niet worden geladen.",
            error
        );
    }
}


function saveProducts() {
    try {
        localStorage.setItem(
            "studyswap-products",
            JSON.stringify(products)
        );

        return true;

    } catch (error) {
        console.error("StudySwap: Opslaan mislukt.", error);

        alert(
            "Opslaan is niet gelukt. Controleer de beschikbare opslagruimte."
        );

        return false;
    }
}


/* =========================================
   3. PRODUCTEN WEERGEVEN
========================================= */

function renderProducts() {

    const container = document.getElementById("productGrid");
    const searchInput = document.getElementById("searchInput");

    if (!container) {
        console.error("Productoverzicht niet gevonden.");
        return;
    }

    const search = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const filtered = products.filter(product => {

        const name = String(product.name || product.naam || "");
        const description = String(product.description || "");
        const category = String(product.category || product.vak || "");
        const seller = String(product.seller || "");

        const matchesSearch =
            name.toLowerCase().includes(search) ||
            description.toLowerCase().includes(search) ||
            category.toLowerCase().includes(search) ||
            seller.toLowerCase().includes(search);

        const matchesCategory =
            selectedCategory === "Alles" ||
            category.toLowerCase() === selectedCategory.toLowerCase();

        return matchesSearch && matchesCategory;
    });


    container.innerHTML = "";


    // Geen resultaten

    if (filtered.length === 0) {

        const empty = document.createElement("div");

        empty.className = "empty-message";

        empty.textContent =
            "😕 Geen samenvattingen gevonden. Probeer een andere zoekopdracht.";

        container.appendChild(empty);

        return;
    }


    // Productkaarten maken

    filtered.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";


        // Icoon

        const icon = document.createElement("div");

        icon.className = "product-icon";

        icon.textContent = product.icon || "📚";


        // Categorie

        const category = document.createElement("span");

        category.className = "tag";

        category.textContent =
            product.category || product.vak || "Studie";


        // Naam

        const name = document.createElement("h3");

        name.textContent =
            product.name || product.naam || "Naam onbekend";


        // Beschrijving

        const description = document.createElement("p");

        description.textContent =
            product.description || "Geen beschrijving beschikbaar.";


        // Verkoper

        const seller = document.createElement("small");

        seller.textContent =
            "Verkoper: " + (product.seller || "Onbekend");


        // Onderste gedeelte

        const bottom = document.createElement("div");

        bottom.className = "product-bottom";


        // Prijs

        const price = document.createElement("strong");

        const amount = Number(product.price ?? product.prijs) || 0;

        price.textContent = "€" + amount.toFixed(2);


        // Bekijk knop

        const button = document.createElement("button");

        button.textContent = "Bekijken";

        button.type = "button";

        button.addEventListener("click", () => {
            buyProduct(product.id);
        });


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


/* =========================================
   4. ZOEKFUNCTIE
========================================= */

function setupSearch() {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    searchInput.addEventListener("input", renderProducts);

}


/* =========================================
   5. CATEGORIEËN FILTEREN
========================================= */

function filterCategory(category) {

    selectedCategory = category;

    renderProducts();

    const section = document.getElementById("ontdekken");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }

}


/* =========================================
   6. PRODUCT BEKIJKEN / KOPEN
========================================= */

function buyProduct(id) {

    const product = products.find(
        item => String(item.id) === String(id)
    );

    if (!product) {
        alert("Dit product kon niet worden gevonden.");
        return;
    }

    const name = product.name || product.naam || "Onbekend";

    const price = Number(product.price ?? product.prijs) || 0;

    const seller = product.seller || "Onbekend";

    alert(
        "📚 STUDYSWAP\n\n" +
        "Product: " + name +
        "\nPrijs: €" + price.toFixed(2) +
        "\nVerkoper: " + seller +
        "\n\nBedankt voor je interesse!\n" +
        "Echte betalingen worden later toegevoegd."
    );

}


/* =========================================
   7. MODAL OPENEN EN SLUITEN
========================================= */

function openSell() {

    const modal = document.getElementById("sellModal");

    if (modal) {
        modal.style.display = "flex";
    }

}


function closeSell() {

    const modal = document.getElementById("sellModal");

    if (modal) {
        modal.style.display = "none";
    }

}


function openLogin() {

    const modal = document.getElementById("loginModal");

    if (modal) {
        modal.style.display = "flex";
    }

}


function closeLogin() {

    const modal = document.getElementById("loginModal");

    if (modal) {
        modal.style.display = "none";
    }

}


// Compatibiliteit met oude functienamen

function openSellModal() {
    openSell();
}

function closeSellModal() {
    closeSell();
}

function openLoginModal() {
    openLogin();
}

function closeLoginModal() {
    closeLogin();
}


/* =========================================
   8. PRODUCT VERKOPEN
========================================= */

function setupSellForm() {

    const form = document.getElementById("sellForm");

    if (!form) return;

    form.addEventListener("submit", function(event) {

        event.preventDefault();


        // Gegevens ophalen

        const name = document
            .getElementById("productName")
            .value.trim();

        const category = document
            .getElementById("productSubject")
            .value;

        const education = document
            .getElementById("productEducation")
            .value.trim();

        const description = document
            .getElementById("productDescription")
            .value.trim();

        const price = Number(
            document.getElementById("productPrice").value
        );

        const fileInput = document.getElementById("productFile");

        const file = fileInput ? fileInput.files[0] : null;


        // Controleren

        if (!name || !category || !education || !description) {

            alert("Vul alle verplichte velden in.");

            return;
        }


        if (!Number.isFinite(price) || price < 0.50 || price > 100) {

            alert("Vul een prijs tussen €0,50 en €100 in.");

            return;
        }


        if (!file) {

            alert("Selecteer eerst je samenvatting.");

            return;
        }


        if (file.type !== "application/pdf" &&
            !file.name.toLowerCase().endsWith(".pdf")) {

            alert("Upload alleen PDF-bestanden.");

            return;
        }


        if (file.size > 10 * 1024 * 1024) {

            alert("Het PDF-bestand mag maximaal 10 MB zijn.");

            return;
        }


        // Nieuw product aanmaken

        const newProduct = {

            id: Date.now(),

            name: name,

            category: category,

            education: education,

            description: description,

            price: price,

            seller: "Anonieme verkoper",

            icon: "📚"

        };


        // Product toevoegen

        products.push(newProduct);


        // Opslaan

        if (!saveProducts()) {

            products.pop();

            return;
        }


        // Overzicht vernieuwen

        renderProducts();


        // Formulier leegmaken

        form.reset();


        // Venster sluiten

        closeSell();


        // Bevestiging

        alert(
            "🎉 Je samenvatting is toegevoegd aan StudySwap!"
        );


        // Naar producten scrollen

        const section = document.getElementById("ontdekken");

        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


/* =========================================
   9. INLOGGEN
========================================= */

function setupLoginForm() {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "De inlogfunctie is nog niet gekoppeld aan een gebruikersdatabase.\n\n" +
            "Deze functionaliteit wordt later uitgebreid."
        );

    });

}


/* =========================================
   10. MODALS SLUITEN
========================================= */

function setupModalClosing() {

    document.querySelectorAll(".modal").forEach(modal => {

        modal.addEventListener("click", function(event) {

            if (event.target === modal) {

                modal.style.display = "none";

            }

        });

    });


    // Sluiten met Escape

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            closeSell();

            closeLogin();

        }

    });

}


/* =========================================
   11. INITIALISATIE
========================================= */

function initializeStudySwap() {

    loadProducts();

    setupSearch();

    setupSellForm();

    setupLoginForm();

    setupModalClosing();

    renderProducts();

    console.log(
        "%c StudySwap is succesvol geladen! 🚀",
        "background: #7950e8; color: white; padding: 10px; font-weight: bold; border-radius: 5px;"
    );

}


// Website starten

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeStudySwap
    );

} else {

    initializeStudySwap();

}
