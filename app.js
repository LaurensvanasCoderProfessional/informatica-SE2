/* =========================================
   STUDYSWAP - APP.JS
   Complete marketplace functionaliteit,
   automatische PDF-controle & reviewsysteem
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
2. PRODUCTEN LADEN, OPSLAAN & RATING HELPERS
========================================= */

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
        alert("Opslaan is niet gelukt. Controleer de beschikbare ops
