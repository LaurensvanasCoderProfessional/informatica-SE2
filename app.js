/* =========================================
   STUDYSWAP - APP.JS
   Stabiele basisversie met 18 voorbeeldsamenvattingen,
   zoeken, filteren, reviews, verkopen & downloaden
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
        icon: "🧬",
        aiVerified: true,
        reviews: [
            { author: "Sanne (Havo 4)", rating: 5, comment: "Super overzichtelijk, vooral de schema's over DNA-replicatie hielpen enorm!", date: "14 nov 2026" },
            { author: "Timo (Havo 4)", rating: 5, comment: "Een 8,4 gehaald voor mijn proefwerk dankzij deze samenvatting.", date: "2 nov 2026" }
        ]
    },
    {
        id: 2,
        name: "Wiskunde B Formuleblad & Uitleg",
        category: "Wiskunde B",
        education: "VWO 5",
        description: "Alle belangrijke goniometrie-, differentiëren- en vergelijkingsregels overzichtelijk uitgewerkt.",
        price: 4.50,
        seller: "Lucas",
        icon: "📐",
        aiVerified: true,
        reviews: [
            { author: "Ruben (VWO 5)", rating: 5, comment: "Alles op één plek met duidelijke voorbeeldsommen.", date: "10 nov 2026" }
        ]
    },
    {
        id: 3,
        name: "Wiskunde A Kansrekening & Statistiek",
        category: "Wiskunde A",
        education: "Havo 5",
        description: "Stappenplannen voor normale verdeling, combinatoriek en grafische rekenmachine-functies.",
        price: 3.75,
        seller: "Mila",
        icon: "📈",
        aiVerified: true,
        reviews: [
            { author: "Fleur (Havo 5)", rating: 5, comment: "De GR-stappenplannen zijn echt goud waard!", date: "8 nov 2026" }
        ]
    },
    {
        id: 4,
        name: "Natuurkunde Elektriciteit & Krachten",
        category: "Natuurkunde",
        education: "VWO 4",
        description: "Heldere uitleg over schakelingen, wetten van Newton en energieomzettingen met voorbeeldsommen.",
        price: 4.25,
        seller: "Sem",
        icon: "⚡",
        aiVerified: true,
        reviews: [
            { author: "Koen (VWO 4)", rating: 5, comment: "Eindelijk snap ik serieschakelingen en parallelschakelingen goed.", date: "5 nov 2026" }
        ]
    },
    {
        id: 5,
        name: "Scheikunde Molrekenen & Zuren-Basen",
        category: "Scheikunde",
        education: "Havo 5",
        description: "Complete gids voor chemisch rekenen, pH-berekeningen, redoxreacties en koolstofchemie.",
        price: 4.00,
        seller: "Julia",
        icon: "🧪",
        aiVerified: true,
        reviews: [
            { author: "Anouk (Havo 5)", rating: 5, comment: "Heel fijn stappenplan voor molrekenen.", date: "1 nov 2026" }
        ]
    },
    {
        id: 6,
        name: "Informatica Python & Databases Basis",
        category: "Informatica",
        education: "Havo / VWO",
        description: "Overzicht van variabelen, loops, functies, SQL-queries en HTML/CSS-structuren.",
        price: 3.50,
        seller: "Bram",
        icon: "💻",
        aiVerified: true,
        reviews: [
            { author: "Jasper (VWO 5)", rating: 5, comment: "Handige SQL-voorbeelden en nette codeblokken.", date: "12 nov 2026" }
        ]
    },
    {
        id: 7,
        name: "Bedrijfseconomie Balans & Liquiditeit",
        category: "Bedrijfseconomie",
        education: "VWO 5",
        description: "Uitleg over de balans, winst-en-verliesrekening, kengetallen en break-evenanalyse.",
        price: 3.99,
        seller: "Tess",
        icon: "💼",
        aiVerified: true,
        reviews: [
            { author: "Milan (VWO 5)", rating: 5, comment: "Alle kengetallen staan overzichtelijk onder elkaar.", date: "3 nov 2026" }
        ]
    },
    {
        id: 8,
        name: "Economie Hoofdstuk 1-5",
        category: "Economie",
        education: "VWO 4",
        description: "Heldere uitleg over vraag en aanbod, elasticiteit, marktvormen en conjuncturele werkloosheid.",
        price: 3.50,
        seller: "Sophie",
        icon: "📊",
        aiVerified: true,
        reviews: [
            { author: "Iris (VWO 4)", rating: 5, comment: "Duidelijke grafieken bij prijselasticiteit!", date: "29 okt 2026" }
        ]
    },
    {
        id: 9,
        name: "Duits Naamvallen & Grammatica Gids",
        category: "Duits",
        education: "Havo 4",
        description: "Alle der- en ein-groepen, voorzetsels met vaste naamval en sterke werkwoorden op één blad.",
        price: 2.99,
        seller: "Finn",
        icon: "🥨",
        aiVerified: true,
        reviews: [
            { author: "Max (Havo 4)", rating: 5, comment: "Ideaal om snel te herhalen vlak voor de toets.", date: "27 okt 2026" }
        ]
    },
    {
        id: 10,
        name: "Frans Werkwoordstijden & Signaalwoorden",
        category: "Frans",
        education: "VWO 4",
        description: "Passé composé, imparfait, futur simple en de belangrijkste verbindingswoorden voor leestoetsen.",
        price: 2.99,
        seller: "Eva",
        icon: "🥐",
        aiVerified: true,
        reviews: [
            { author: "Celine (VWO 4)", rating: 5, comment: "Signaalwoordenlijst heeft me echt gered bij leestoets!", date: "25 okt 2026" }
        ]
    },
    {
        id: 11,
        name: "Spaans Onregelmatige Werkwoorden",
        category: "Spaans",
        education: "Havo / VWO",
        description: "Overzicht van ser/estar, presente, indefinido en veelgebruikte zinnen voor spreekvaardigheid.",
        price: 2.50,
        seller: "Sara",
        icon: "💃",
        aiVerified: true,
        reviews: [
            { author: "Nina (Havo 5)", rating: 5, comment: "Het verschil tussen ser en estar is eindelijk helder.", date: "22 okt 2026" }
        ]
    },
    {
        id: 12,
        name: "Maatschappijleer Rechtsstaat & Politiek",
        category: "Maatschappijleer",
        education: "Havo 4",
        description: "Samenvatting over de trias politica, grondrechten, politieke stromingen en de verzorgingsstaat.",
        price: 3.25,
        seller: "Noor",
        icon: "⚖️",
        aiVerified: true,
        reviews: [
            { author: "Stijn (Havo 4)", rating: 5, comment: "Alle politieke stromingen kort en krachtig uitgelegd.", date: "20 okt 2026" }
        ]
    },
    {
        id: 13,
        name: "Geschiedenis Koude Oorlog",
        category: "Geschiedenis",
        education: "Havo 5",
        description: "Complete tijdlijn en samenvatting van de Koude Oorlog en de dekolonisatie van Nederlands-Indië.",
        price: 4.25,
        seller: "Daan",
        icon: "🏛️",
        aiVerified: true,
        reviews: [
            { author: "Roos (Havo 5)", rating: 5, comment: "De tijdlijn achterin is superhandig voor het examen.", date: "18 okt 2026" }
        ]
    },
    {
        id: 14,
        name: "Aardrijkskunde Aarde & Klimaat",
        category: "Aardrijkskunde",
        education: "VWO 4",
        description: "Uitleg over platentektoniek, vulkanisme, luchtstromen en klimaatgebieden met schema's.",
        price: 3.49,
        seller: "Luuk",
        icon: "🗺️",
        aiVerified: true,
        reviews: [
            { author: "Bo (VWO 4)", rating: 5, comment: "Mooie illustraties van de luchtstromen.", date: "15 okt 2026" }
        ]
    },
    {
        id: 15,
        name: "Nederlands Argumentatie & Stijlfiguren",
        category: "Nederlands",
        education: "Havo / VWO",
        description: "Overzicht van alle drogredenen, tekstverbanden, stijlfiguren en tips voor je betoog.",
        price: 2.75,
        seller: "Lotte",
        icon: "📚",
        aiVerified: true,
        reviews: [
            { author: "Vera (VWO 6)", rating: 5, comment: "Alle drogredenen met duidelijke voorbeelden.", date: "11 okt 2026" }
        ]
    },
    {
        id: 16,
        name: "Engels Grammar & Idiom Gids",
        category: "Engels",
        education: "VWO 5",
        description: "Alle werkwoordstijden, signaalwoorden en veelgebruikte examen-uitdrukkingen op een rij.",
        price: 2.99,
        seller: "Noah",
        icon: "🌍",
        aiVerified: true,
        reviews: [
            { author: "Sam (VWO 5)", rating: 5, comment: "Overzichtelijke tabel met alle tenses.", date: "9 okt 2026" }
        ]
    },
    {
        id: 17,
        name: "Filosofie Ethiek & Grote Denkers",
        category: "Filosofie",
        education: "VWO 5",
        description: "Kant, Aristoteles, utilitarisme en deugdenethiek helder vergeleken voor je schoolexamen.",
        price: 3.50,
        seller: "Anna",
        icon: "🧠",
        aiVerified: true,
        reviews: [
            { author: "Maud (VWO 5)", rating: 5, comment: "Kant en utilitarisme heel begrijpelijk samengevat.", date: "6 okt 2026" }
        ]
    },
    {
        id: 18,
        name: "Kunst & CKV Stromingen Overzicht",
        category: "Kunst & CKV",
        education: "Havo / VWO",
        description: "Van Renaissance en Barok tot Modernisme en Pop-art: kenmerken en beeldaspecten op een rij.",
        price: 2.75,
        seller: "Liv",
        icon: "🎨",
        aiVerified: true,
        reviews: [
            { author: "Jasmijn (Havo 4)", rating: 5, comment: "Super fijn overzicht voor mijn kunstgeschiedenistoets!", date: "2 okt 2026" }
        ]
    }
];

let selectedCategory = "Alles";
let currentUser = null;
let activeProductId = null;

/* =========================================
   HELPERS: OPSLAG, PRIJS & RATINGS
   ========================================= */

function formatPrice(value) {
    const num = Number(String(value ?? 0).replace(",", ".")) || 0;
    return "€ " + num.toFixed(2).replace(".", ",");
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = String(text ?? "");
    return div.innerHTML;
}

function getProductRatingStats(product) {
    const reviews = Array.isArray(product.reviews) ? product.reviews : [];
    if (reviews.length === 0) {
        return { average: 5.0, count: 0 };
    }
    const sum = reviews.reduce((acc, rev) => acc + (Number(rev.rating) || 5), 0);
    return {
        average: sum / reviews.length,
        count: reviews.length
    };
}

function loadProducts() {
    try {
        const saved = localStorage.getItem("studyswap-products");
        if (saved !== null) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                products = parsed.map(item => ({
                    ...item,
                    aiVerified: item.aiVerified !== false,
                    reviews: Array.isArray(item.reviews) ? item.reviews : []
                }));
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
        alert("Opslaan is niet gelukt. Controleer de opslagruimte van je browser.");
        return false;
    }
}

/* =========================================
   MARKTPLAATS WEERGAVE & FILTEREN
   ========================================= */

function renderProducts() {
    const grid = document.getElementById("productGrid");
    const searchInput = document.getElementById("searchInput");
    const filterLabel = document.getElementById("activeFilterLabel");
    if (!grid) return;

    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

    const filtered = products.filter(product => {
        const matchesCategory = selectedCategory === "Alles" || product.category === selectedCategory;
        const matchesQuery =
            !query ||
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.education.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.seller.toLowerCase().includes(query);

        return matchesCategory && matchesQuery;
    });

    if (filterLabel) {
        if (selectedCategory === "Alles" && !query) {
            filterLabel.textContent = `Alle ${filtered.length} beschikbare samenvattingen worden weergegeven.`;
        } else {
            filterLabel.textContent = `${filtered.length} resultaat/resultaten gevonden${selectedCategory !== "Alles" ? ` voor ${selectedCategory}` : ""}.`;
        }
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-message">
                Geen samenvattingen gevonden voor deze zoekopdracht. Klik op "Alle vakken tonen" om het volledige aanbod te bekijken.
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => {
        const stats = getProductRatingStats(product);
        const avgText = stats.average.toFixed(1).replace(".", ",");
        const icon = product.icon || subjectIcons[product.category] || "📄";

        return `
            <article class="product-card">
                <div class="product-icon" aria-hidden="true">${icon}</div>
                <span class="tag">${escapeHtml(product.category)} · ${escapeHtml(product.education)}</span>
                <h3>${escapeHtml(product.name)}</h3>
                <p>${escapeHtml(product.description)}</p>
                <div class="quality-badge card-quality-badge">
                    🛡️ Gecontroleerd · ⭐ ${avgText} (${stats.count})
                </div>
                <small>Gemaakt door ${escapeHtml(product.seller)}</small>
                <div class="product-bottom">
                    <strong>${formatPrice(product.price)}</strong>
                    <button type="button" onclick="openProductModal(${product.id})">Bekijken &amp; kopen</button>
                </div>
            </article>
        `;
    }).join("");
}

function filterCategory(category) {
    selectedCategory = category;

    document.querySelectorAll(".category-card[data-category]").forEach(card => {
        card.classList.toggle("active", card.dataset.category === category);
    });

    renderProducts();

    const section = document.getElementById("ontdekken");
    if (section && category !== "Alles") {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

/* =========================================
   PRODUCT DETAIL, KOPEN & DOWNLOADEN
   ========================================= */

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById("productModal");
    if (!product || !modal) return;

    activeProductId = product.id;

    document.getElementById("detailCategory").textContent = product.category.toUpperCase();
    document.getElementById("detailTitle").textContent = product.name;
    document.getElementById("detailMeta").textContent = `${product.education} · Verkoper: ${product.seller}`;
    document.getElementById("detailDescription").textContent = product.description;
    document.getElementById("detailPrice").textContent = formatPrice(product.price);

    const buyBtn = document.getElementById("confirmBuyBtn");
    buyBtn.onclick = () => buyProduct(product.id);

    renderReviews(product.id);
    modal.style.display = "flex";
}

function closeProductModal() {
    const modal = document.getElementById("productModal");
    if (modal) modal.style.display = "none";
    activeProductId = null;
}

function buyProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const inhoud = [
        "=========================================",
        `STUDYSWAP SAMENVATTING: ${product.name}`,
        `Vak: ${product.category} | Niveau: ${product.education}`,
        `Auteur: ${product.seller} | Prijs: ${formatPrice(product.price)}`,
        "=========================================",
        "",
        "OVERZICHT VAN DE LEERSTOF:",
        product.description,
        "",
        "BELANGRIJKSTE PUNTEN OM TE LEREN:",
        "1. Lees eerst de kernbegrippen van dit hoofdstuk goed door.",
        "2. Oefen met de voorbeeldopgaven en controleer je uitwerkingen.",
        "3. Herhaal de samenvatting één dag voor je toets.",
        "",
        "Veel succes met leren! - Team StudySwap"
    ].join("\n");

    const blob = new Blob([inhoud], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert(`Bedankt voor je aankoop van "${product.name}" (${formatPrice(product.price)})! Je samenvatting wordt nu gedownload.`);
}

/* =========================================
   REVIEWS SYSTEEM
   ========================================= */

function renderReviews(productId) {
    const product = products.find(p => p.id === productId);
    const list = document.getElementById("reviewsList");
    const summary = document.getElementById("detailRatingSummary");
    if (!product || !list) return;

    const stats = getProductRatingStats(product);
    if (summary) {
        summary.textContent = `⭐ ${stats.average.toFixed(1).replace(".", ",")} (${stats.count} ${stats.count === 1 ? "review" : "reviews"})`;
    }

    if (!product.reviews || product.reviews.length === 0) {
        list.innerHTML = `<p style="color: var(--muted); font-size: 13px;">Nog geen beoordelingen. Wees de eerste die een review schrijft!</p>`;
        return;
    }

    list.innerHTML = product.reviews.map(review => {
        const stars = "⭐".repeat(Math.max(1, Math.min(5, Number(review.rating) || 5)));
        return `
            <div class="review-item">
                <div class="review-item-top">
                    <strong>${escapeHtml(review.author)}</strong>
                    <span class="review-stars">${stars}</span>
                </div>
                <p>${escapeHtml(review.comment)}</p>
                <small>${escapeHtml(review.date || "Recent")}</small>
            </div>
        `;
    }).join("");
}

function setupReviewForm() {
    const starButtons = document.querySelectorAll("#starPicker .star-btn");
    const ratingInput = document.getElementById("reviewRatingInput");
    const ratingText = document.getElementById("starRatingText");
    const reviewForm = document.getElementById("reviewForm");

    starButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const val = Number(btn.dataset.value) || 5;
            if (ratingInput) ratingInput.value = String(val);
            if (ratingText) ratingText.textContent = `${val} van 5 sterren`;

            starButtons.forEach(b => {
                b.classList.toggle("active", Number(b.dataset.value) <= val);
            });
        });
    });

    if (reviewForm) {
        reviewForm.addEventListener("submit", event => {
            event.preventDefault();
            if (activeProductId === null) return;

            const product = products.find(p => p.id === activeProductId);
            if (!product) return;

            const author = document.getElementById("reviewAuthor").value.trim();
            const comment = document.getElementById("reviewComment").value.trim();
            const rating = Number(ratingInput ? ratingInput.value : 5) || 5;

            if (!author || !comment) return;

            const today = new Date().toLocaleDateString("nl-NL", {
                day: "numeric",
                month: "short",
                year: "numeric"
            });

            product.reviews.unshift({
                author,
                rating,
                comment,
                date: today
            });

            saveProducts();
            renderReviews(product.id);
            renderProducts();
            reviewForm.reset();
            if (ratingInput) ratingInput.value = "5";
            if (ratingText) ratingText.textContent = "5 van 5 sterren";
            starButtons.forEach(b => b.classList.add("active"));
        });
    }
}

/* =========================================
   VERKOPEN & NIEUWE SAMENVATTING PLAATSEN
   ========================================= */

function openSell() {
    const modal = document.getElementById("sellModal");
    if (!modal) return;

    const sellerInput = document.getElementById("productSeller");
    if (sellerInput && currentUser && !sellerInput.value) {
        sellerInput.value = currentUser.name;
    }

    modal.style.display = "flex";
}

function closeSell() {
    const modal = document.getElementById("sellModal");
    if (modal) modal.style.display = "none";
}

function setupSellForm() {
    const sellForm = document.getElementById("sellForm");
    if (!sellForm) return;

    sellForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("productName").value.trim();
        const category = document.getElementById("productSubject").value;
        const education = document.getElementById("productEducation").value.trim();
        const description = document.getElementById("productDescription").value.trim();
        const price = parseFloat(document.getElementById("productPrice").value);
        const sellerField = document.getElementById("productSeller").value.trim();
        const seller = sellerField || (currentUser ? currentUser.name : "Leerling");

        if (!name || !category || !education || !description || isNaN(price) || price <= 0) {
            alert("Vul alle verplichte velden goed in.");
            return;
        }

        const newId = products.length > 0 ? Math.max(...products.map(p => Number(p.id) || 0)) + 1 : 1;

        const newProduct = {
            id: newId,
            name,
            category,
            education,
            description,
            price,
            seller,
            icon: subjectIcons[category] || "📄",
            aiVerified: true,
            reviews: []
        };

        products.unshift(newProduct);
        saveProducts();
        selectedCategory = "Alles";
        renderProducts();
        sellForm.reset();
        closeSell();

        alert(`Gelukt! "${name}" staat nu online in de StudySwap marktplaats.`);
    });
}

/* =========================================
   INLOGGEN
   ========================================= */

function openLogin() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "flex";
}

function closeLogin() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "none";
}

function setupLoginForm() {
    const loginForm = document.getElementById("loginForm");
    const navLoginBtn = document.getElementById("navLoginBtn");
    const statusText = document.getElementById("loginStatusText");
    if (!loginForm) return;

    try {
        const savedUser = localStorage.getItem("studyswap-user");
        if (savedUser) {
            currentUser = JSON.parse(savedUser);
            if (navLoginBtn && currentUser.name) {
                navLoginBtn.textContent = `👤 ${currentUser.name}`;
            }
        }
    } catch (e) {
        currentUser = null;
    }

    loginForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("loginName").value.trim();
        const email = document.getElementById("loginEmail").value.trim();

        if (!name || !email) return;

        currentUser = { name, email };
        localStorage.setItem("studyswap-user", JSON.stringify(currentUser));

        if (navLoginBtn) {
            navLoginBtn.textContent = `👤 ${name}`;
        }
        if (statusText) {
            statusText.textContent = `Ingelogd als ${name} (${email}).`;
        }

        closeLogin();
    });
}

/* =========================================
   INITIALISATIE BIJ LADEN VAN DE PAGINA
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    renderProducts();
    setupSellForm();
    setupReviewForm();
    setupLoginForm();

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", renderProducts);
    }

    window.addEventListener("click", event => {
        if (event.target === document.getElementById("sellModal")) closeSell();
        if (event.target === document.getElementById("productModal")) closeProductModal();
        if (event.target === document.getElementById("loginModal")) closeLogin();
    });
});
