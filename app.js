/* =========================================
   STUDYSWAP - APP.JS
   Complete marketplace functionaliteit
   ========================================= */

/* =========================================
   1. STANDAARD PRODUCTEN (Voor alle 18 vakken)
========================================= */

const subjectIcons = {
    Nederlands: "📚",
    Engels: "🌍",
    Duits: "🥨",
    Frans: "🥐",
    Spaans: "💃",
    "Wiskunde A": "📈",
    "Wiskunde B": "📐",
    Natuurkunde: "⚡",
    Scheikunde: "🧪",
    Biologie: "🧬",
    Informatica: "💻",
    Economie: "📊",
    Bedrijfseconomie: "💼",
    Geschiedenis: "🏛️",
    Aardrijkskunde: "🗺️",
    Maatschappijleer: "⚖️",
    Filosofie: "🧠",
    "Kunst & CKV": "🎨"
};

let products = [
    {
        id: 1,
        name: "Biologie samenvatting H1 t/m 4",
        category: "Biologie",
        education: "Havo 4",
        description: "Uitgebreide samenvatting over cellen, DNA, erfelijkheid en stofwisseling met duidelijke schema's.",
        price: 3.99,
        seller: "Emma",
        icon: "🧬"
    },
    {
        id: 2,
        name: "Wiskunde B Formuleblad & Uitleg",
        category: "Wiskunde B",
        education: "VWO 5",
        description: "Alle belangrijke goniometrie-, differentiëren- en vergelijkingsregels overzichtelijk uitgewerkt.",
        price: 4.50,
        seller: "Lucas",
        icon: "📐"
    },
    {
        id: 3,
        name: "Wiskunde A Kansrekening & Statistiek",
        category: "Wiskunde A",
        education: "Havo 5",
        description: "Stappenplannen voor normale verdeling, combinatoriek en grafische rekenmachine-functies.",
        price: 3.75,
        seller: "Mila",
        icon: "📈"
    },
    {
        id: 4,
        name: "Natuurkunde Elektriciteit & Krachten",
        category: "Natuurkunde",
        education: "VWO 4",
        description: "Heldere uitleg over schakelingen, wetten van Newton en energieomzettingen met voorbeeldsommen.",
        price: 4.25,
        seller: "Sem",
        icon: "⚡"
    },
    {
        id: 5,
        name: "Scheikunde Molrekenen & Zuren-Basen",
        category: "Scheikunde",
        education: "Havo 5",
        description: "Complete gids voor chemisch rekenen, pH-berekeningen, redoxreacties en koolstofchemie.",
        price: 4.00,
        seller: "Julia",
        icon: "🧪"
    },
    {
        id: 6,
        name: "Informatica Python & Databases Basis",
        category: "Informatica",
        education: "Havo / VWO",
        description: "Overzicht van variabelen, loops, functies, SQL-queries en HTML/CSS-structuren.",
        price: 3.50,
        seller: "Bram",
        icon: "💻"
    },
    {
        id: 7,
        name: "Bedrijfseconomie Balans & Liquiditeit",
        category: "Bedrijfseconomie",
        education: "VWO 5",
        description: "Uitleg over de balans, winst-en-verliesrekening, kengetallen en break-evenanalyse.",
        price: 3.99,
        seller: "Tess",
        icon: "💼"
    },
    {
        id: 8,
        name: "Economie Hoofdstuk 1-5",
        category: "Economie",
        education: "VWO 4",
        description: "Heldere uitleg over vraag en aanbod, elasticiteit, marktvormen en conjuncturele werkloosheid.",
        price: 3.50,
        seller: "Sophie",
        icon: "📊"
    },
    {
        id: 9,
        name: "Duits Naamvallen & Grammatica Gids",
        category: "Duits",
        education: "Havo 4",
        description: "Alle der- en ein-groepen, voorzetsels met vaste naamval en sterke werkwoorden op één blad.",
        price: 2.99,
        seller: "Finn",
        icon: "🥨"
    },
    {
        id: 10,
        name: "Frans Werkwoordstijden & Signaalwoorden",
        category: "Frans",
        education: "VWO 4",
        description: "Passé composé, imparfait, futur simple en de belangrijkste verbindingswoorden voor leestoetsen.",
        price: 2.99,
        seller: "Eva",
        icon: "🥐"
    },
    {
        id: 11,
        name: "Spaans Onregelmatige Werkwoorden",
        category: "Spaans",
        education: "Havo / VWO",
        description: "Overzicht van ser/estar, presente, indefinido en veelgebruikte zinnen voor spreekvaardigheid.",
        price: 2.50,
        seller: "Sara",
        icon: "💃"
    },
    {
        id: 12,
        name: "Maatschappijleer Rechtsstaat & Politiek",
        category: "Maatschappijleer",
        education: "Havo 4",
        description: "Samenvatting over de trias politica, grondrechten, politieke stromingen en de verzorgingsstaat.",
        price: 3.25,
        seller: "Noor",
        icon: "⚖️"
    },
    {
        id: 13,
        name: "Geschiedenis Koude Oorlog",
        category: "Geschiedenis",
        education: "Havo 5",
        description: "Complete tijdlijn en samenvatting van de Koude Oorlog en de dekolonisatie van Nederlands-Indië.",
        price: 4.25,
        seller: "Daan",
        icon: "🏛️"
    },
    {
        id: 14,
        name: "Aardrijkskunde Aarde & Klimaat",
        category: "Aardrijkskunde",
        education: "VWO 4",
        description: "Uitleg over platentektoniek, vulkanisme, luchtstromen en klimaatgebieden met schema's.",
        price: 3.49,
        seller: "Luuk",
        icon: "🗺️"
    },
    {
        id: 15,
        name: "Nederlands Argumentatie & Stijlfiguren",
        category: "Nederlands",
        education: "Havo / VWO",
        description: "Overzicht van alle drogredenen, tekstverbanden, stijlfiguren en tips voor je betoog.",
        price: 2.75,
        seller: "Lotte",
        icon: "📚"
    },
    {
        id: 16,
        name: "Engels Grammar & Idiom Gids",
        category: "Engels",
        education: "VWO 5",
        description: "Alle werkwoordstijden, signaalwoorden en veelgebruikte examen-uitdrukkingen op een rij.",
        price: 2.99,
        seller: "Noah",
        icon: "🌍"
    },
    {
        id: 17,
        name: "Filosofie Ethiek & Grote Denkers",
        category: "Filosofie",
        education: "VWO 5",
        description: "Kant, Aristoteles, utilitarisme en deugdenethiek helder vergeleken voor je schoolexamen.",
        price: 3.50,
        seller: "Anna",
        icon: "🧠"
    },
    {
        id: 18,
        name: "Kunst & CKV Stromingen Overzicht",
        category: "Kunst & CKV",
        education: "Havo / VWO",
        description: "Van Renaissance en Barok tot Modernisme en Pop-art: kenmerken en beeldaspecten op een rij.",
        price: 2.75,
        seller: "Liv",
        icon: "🎨"
    }
];

let selectedCategory = "Alles";
let currentUser = null;

/* =========================================
   2. PRODUCTEN LADEN EN OPSLAAN
========================================= */

function loadProducts() {
    try {
        const saved = localStorage.getItem("studyswap-products");

        if (saved !== null) {
            const parsed = JSON.parse(saved);

            if (Array.isArray(parsed) && parsed.length > 0) {
                products = parsed;
            }
        }
    } catch (error) {
        console.error("StudySwap: Producten konden niet worden geladen.", error);
    }
}

function saveProducts() {
    try {
        localStorage.setItem("studyswap-products", JSON.stringify(products));
        return true;
    } catch (error) {
        console.error("StudySwap: Opslaan mislukt.", error);
        alert("Opslaan is niet gelukt. Controleer de beschikbare opslagruimte.");
        return false;
    }
}

/* =========================================
   3. ACTIEVE VAKKNOPPEN BIJWERKEN
========================================= */

function updateActiveCategoryUI() {
    document.querySelectorAll("[data-category]").forEach(element => {
        const cat = element.getAttribute("data-category");
        if (cat && cat.toLowerCase() === selectedCategory.toLowerCase()) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

/* =========================================
   4. PRODUCTEN WEERGEVEN
========================================= */

function renderProducts() {
    const container = document.getElementById("productGrid");
    const searchInput = document.getElementById("searchInput");

    if (!container) {
        console.error("Productoverzicht niet gevonden.");
        return;
    }

    updateActiveCategoryUI();

    const search = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const filtered = products.filter(product => {
        const name = String(product.name || product.naam || "");
        const description = String(product.description || "");
        const category = String(product.category || product.vak || "");
        const education = String(product.education || product.opleiding || "");
        const seller = String(product.seller || "");

        const matchesSearch =
            name.toLowerCase().includes(search) ||
            description.toLowerCase().includes(search) ||
            category.toLowerCase().includes(search) ||
            education.toLowerCase().includes(search) ||
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

        const text = document.createElement("p");
        text.textContent = `😕 Geen samenvattingen gevonden voor "${selectedCategory}".`;
        text.style.marginBottom = "14px";

        const resetBtn = document.createElement("button");
        resetBtn.type = "button";
        resetBtn.className = "primary-btn";
        resetBtn.textContent = "Toon alle samenvattingen";
        resetBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            filterCategory("Alles");
        });

        empty.append(text, resetBtn);
        container.appendChild(empty);
        return;
    }

    // Productkaarten maken
    filtered.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";

        const catName = product.category || product.vak || "Studie";

        // Icoon
        const icon = document.createElement("div");
        icon.className = "product-icon";
        icon.textContent = product.icon || subjectIcons[catName] || "📚";

        // Categorie & Niveau
        const category = document.createElement("span");
        category.className = "tag";
        const eduText = product.education || product.opleiding;
        category.textContent = eduText ? `${catName} · ${eduText}` : catName;

        // Naam
        const name = document.createElement("h3");
        name.textContent = product.name || product.naam || "Naam onbekend";

        // Beschrijving
        const description = document.createElement("p");
        description.textContent = product.description || "Geen beschrijving beschikbaar.";

        // Verkoper
        const seller = document.createElement("small");
        seller.textContent = "Verkoper: " + (product.seller || "Onbekend");

        // Onderste gedeelte
        const bottom = document.createElement("div");
        bottom.className = "product-bottom";

        // Prijs
        const price = document.createElement("strong");
        const amount = Number(product.price ?? product.prijs) || 0;
        price.textContent = "€ " + amount.toFixed(2).replace(".", ",");

        // Bekijk knop
        const button = document.createElement("button");
        button.textContent = "Bekijken";
        button.type = "button";
        button.addEventListener("click", () => {
            buyProduct(product.id);
        });

        bottom.append(price, button);
        card.append(icon, category, name, description, seller, bottom);
        container.appendChild(card);
    });
}

/* =========================================
   5. ZOEKFUNCTIE
========================================= */

function setupSearch() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;
    searchInput.addEventListener("input", renderProducts);
}

/* =========================================
   6. CATEGORIEËN FILTEREN (Vakmenu)
========================================= */

function filterCategory(category) {
    selectedCategory = category;
    renderProducts();

    const section = document.getElementById("ontdekken");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

/* =========================================
   7. PRODUCT BEKIJKEN / KOPEN
========================================= */

function buyProduct(id) {
    const product = products.find(item => String(item.id) === String(id));

    if (!product) {
        alert("Dit product kon niet worden gevonden.");
        return;
    }

    const name = product.name || product.naam || "Onbekend";
    const category = product.category || product.vak || "Studie";
    const education = product.education || product.opleiding || "Algemeen";
    const description = product.description || "Geen beschrijving beschikbaar.";
    const price = Number(product.price ?? product.prijs) || 0;
    const seller = product.seller || "Onbekend";

    const modal = document.getElementById("productModal");

    if (modal) {
        document.getElementById("detailCategory").textContent = `${category} · ${education}`;
        document.getElementById("detailTitle").textContent = name;
        document.getElementById("detailMeta").textContent = `Gemaakt door ${seller}`;
        document.getElementById("detailDescription").textContent = description;
        document.getElementById("detailPrice").textContent = "€ " + price.toFixed(2).replace(".", ",");

        const confirmBtn = document.getElementById("confirmBuyBtn");
        confirmBtn.onclick = function () {
            closeProductModal();
            alert(
                `🎉 Bedankt voor je aankoop!\n\n` +
                `Samenvatting: ${name}\n` +
                `Bedrag: € ${price.toFixed(2).replace(".", ",")}\n` +
                `Verkoper: ${seller}\n\n` +
                `Je PDF-samenvatting wordt nu gedownload!`
            );
        };

        modal.style.display = "flex";
    } else {
        alert(
            `📚 STUDYSWAP\n\nProduct: ${name}\nPrijs: €${price.toFixed(2)}\nVerkoper: ${seller}`
        );
    }
}

function closeProductModal() {
    const modal = document.getElementById("productModal");
    if (modal) modal.style.display = "none";
}

/* =========================================
   8. MODALS OPENEN EN SLUITEN
========================================= */

function openSell() {
    const modal = document.getElementById("sellModal");
    if (modal) modal.style.display = "flex";
}

function closeSell() {
    const modal = document.getElementById("sellModal");
    if (modal) modal.style.display = "none";
}

function openLogin() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "flex";
}

function closeLogin() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "none";
}

function openSellModal() { openSell(); }
function closeSellModal() { closeSell(); }
function openLoginModal() { openLogin(); }
function closeLoginModal() { closeLogin(); }

/* =========================================
   9. PRODUCT VERKOPEN
========================================= */

function setupSellForm() {
    const form = document.getElementById("sellForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("productName").value.trim();
        const category = document.getElementById("productSubject").value;
        const education = document.getElementById("productEducation").value.trim();
        const description = document.getElementById("productDescription").value.trim();
        const price = Number(document.getElementById("productPrice").value);
        const fileInput = document.getElementById("productFile");
        const file = fileInput ? fileInput.files[0] : null;

        if (!name || !category || !education || !description) {
            alert("Vul alle verplichte velden in.");
            return;
        }

        if (!Number.isFinite(price) || price < 0.50 || price > 100) {
            alert("Vul een prijs tussen €0,50 en €100 in.");
            return;
        }

        if (!file) {
            alert("Selecteer eerst je samenvatting (PDF).");
            return;
        }

        if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
            alert("Upload alleen PDF-bestanden.");
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert("Het PDF-bestand mag maximaal 10 MB zijn.");
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: name,
            category: category,
            education: education,
            description: description,
            price: price,
            seller: currentUser || "Student verkoper",
            icon: subjectIcons[category] || "📚"
        };

        products.unshift(newProduct);

        if (!saveProducts()) {
            products.shift();
            return;
        }

        selectedCategory = "Alles";
        renderProducts();

        form.reset();
        closeSell();

        alert(`🎉 "${name}" is toegevoegd aan StudySwap!`);

        const section = document.getElementById("ontdekken");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
}

/* =========================================
   10. INLOGGEN & REGISTREREN
========================================= */

function setupLoginForm() {
    const form = document.getElementById("loginForm");
    const toggleLink = document.getElementById("toggleAuthMode");
    let isRegisterMode = false;

    if (toggleLink) {
        toggleLink.addEventListener("click", function (event) {
            event.preventDefault();
            isRegisterMode = !isRegisterMode;

            document.getElementById("loginTag").textContent = isRegisterMode
                ? "NIEUW ACCOUNT 💜"
                : "WELKOM TERUG 💜";
            document.getElementById("loginTitle").textContent = isRegisterMode
                ? "Maak jouw StudySwap-account"
                : "Leuk dat je er weer bent!";
            document.getElementById("loginSubmitBtn").textContent = isRegisterMode
                ? "Account aanmaken →"
                : "Inloggen →";
            document.getElementById("loginSwitchText").textContent = isRegisterMode
                ? "Heb je al een account?"
                : "Nog geen account?";
            toggleLink.textContent = isRegisterMode
                ? "Log hier in"
                : "Maak een account aan";
        });
    }

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        if (!email) return;

        const rawName = email.split("@")[0].replace(/[._-]/g, " ");
        currentUser = rawName.charAt(0).toUpperCase() + rawName.slice(1);

        const navBtn = document.getElementById("navLoginBtn");
        if (navBtn) {
            navBtn.textContent = `👤 ${currentUser}`;
        }

        form.reset();
        closeLogin();

        alert(
            isRegisterMode
                ? `🎉 Welkom bij StudySwap, ${currentUser}! Je account is aangemaakt en je bent direct ingelogd.`
                : `👋 Welkom terug, ${currentUser}! Je bent nu ingelogd.`
        );
    });
}

/* =========================================
   11. MODALS SLUITEN (Achtergrond & Escape)
========================================= */

function setupModalClosing() {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeSell();
            closeLogin();
            closeProductModal();
        }
    });
}

/* =========================================
   12. INITIALISATIE
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

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeStudySwap);
} else {
    initializeStudySwap();
}
