// ATM Data
const atmData = [
    {
        id: 1,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - Plaza Las Americas",
        address: "525 Ave Franklin Delano Roosevelt, San Juan, 00918",
        phone: "+1 855-550-2646",
        website: "https://athenabitcoin.com",
        hours: "Mon-Sat 9AM-9PM, Sun 11AM-7PM",
        coins: ["Bitcoin", "Ethereum"],
        location: { lat: 18.4037, lng: -66.0636 },
        city: "San Juan",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 2,
        operator: "Coinflip",
        name: "Coinflip ATM - Plaza Carolina",
        address: "65 Calle Sierra Morena, Carolina, 00987",
        phone: "773-800-0106",
        website: "https://coinflip.tech",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.3793, lng: -66.1635 },
        city: "Carolina",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop"
    },
    {
        id: 3,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - Plaza del Sol",
        address: "725 West Main Avenue, Bayamón, 00961",
        phone: "312-690-4466",
        website: "https://athenabitcoin.com",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.4054, lng: -65.9792 },
        city: "Bayamón",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=300&h=200&fit=crop"
    },
    {
        id: 4,
        operator: "Bitcoin ATM",
        name: "Bitcoin ATM - Plaza del Caribe",
        address: "2050 Ponce By Pass, Ponce, 00716",
        phone: "1-800-BITCOIN",
        website: "https://bitcoin-atm.com",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.0115, lng: -66.163 },
        city: "Ponce",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop"
    },
    {
        id: 5,
        operator: "Crypto ATM",
        name: "Crypto ATM - Mayagüez Mall",
        address: "975 Ave Hostos, Mayagüez, 00680",
        phone: "1-888-CRYPTO",
        website: "https://crypto-atm.com",
        hours: "24/7",
        coins: ["BTC", "ETH"],
        location: { lat: 18.2319, lng: -66.0388 },
        city: "Mayagüez",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 6,
        operator: "Bitcoin Depot",
        name: "Bitcoin Depot - Plaza del Norte",
        address: "506 Calle Truncado, Hatillo, 00659",
        phone: "1-877-BITCOIN",
        website: "https://bitcoindepot.com",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.3839, lng: -66.1134 },
        city: "Hatillo",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=300&h=200&fit=crop"
    },
    {
        id: 7,
        operator: "Crypto Corner",
        name: "Crypto Corner - Plaza Centro",
        address: "200 Ave. Manuel Pérez Ávila, Arecibo, 00612",
        phone: "1-866-CRYPTO",
        website: "https://cryptocorner.com",
        hours: "24/7",
        coins: ["BTC", "ETH"],
        location: { lat: 18.3601, lng: -66.0103 },
        city: "Arecibo",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop"
    },
    {
        id: 8,
        operator: "Bitcoin ATM",
        name: "Bitcoin ATM - Las Catalinas Mall",
        address: "230 Calle Betances, Caguas, 00725",
        phone: "1-800-BITCOIN",
        website: "https://bitcoin-atm.com",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.4454, lng: -66.1759 },
        city: "Caguas",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 9,
        operator: "Crypto Express",
        name: "Crypto Express - Aguadilla Mall",
        address: "Carr 2 Km 126.5, Aguadilla, 00603",
        phone: "1-855-CRYPTO",
        website: "https://cryptoexpress.com",
        hours: "24/7",
        coins: ["BTC", "ETH"],
        location: { lat: 17.9744, lng: -66.1104 },
        city: "Aguadilla",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=300&h=200&fit=crop"
    },
    {
        id: 10,
        operator: "Bitcoin Hub",
        name: "Bitcoin Hub - Plaza Fajardo",
        address: "Eastern Shopping Center, PR-3, Fajardo, 00738",
        phone: "1-844-BITCOIN",
        website: "https://bitcoinhub.com",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.0344, lng: -66.8615 },
        city: "Fajardo",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop"
    },
    {
        id: 11,
        operator: "Bitcoin ATM",
        name: "Bitcoin ATM - Plaza Guaynabo",
        address: "165 Calle San Patricio, Guaynabo, 00968",
        phone: "1-800-BITCOIN",
        website: "https://bitcoin-atm.com",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.1155, lng: -66.163 },
        city: "Guaynabo",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 12,
        operator: "Crypto ATM",
        name: "Crypto ATM - Plaza Levittown",
        address: "Carr 165 Int 2, Toa Baja, 00949",
        phone: "1-888-CRYPTO",
        website: "https://crypto-atm.com",
        hours: "24/7",
        coins: ["BTC", "ETH"],
        location: { lat: 18.4283, lng: -66.4823 },
        city: "Toa Baja",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop"
    },
    {
        id: 13,
        operator: "Bitcoin Depot",
        name: "Bitcoin Depot - Plaza Palma Real",
        address: "177 Calle Font Martelo, Humacao, 00791",
        phone: "1-877-BITCOIN",
        website: "https://bitcoindepot.com",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.3789, lng: -65.8388 },
        city: "Humacao",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=300&h=200&fit=crop"
    },
    {
        id: 14,
        operator: "Crypto Corner",
        name: "Crypto Corner - Plaza Vega Baja",
        address: "Carr 2 Km 36.8, Vega Baja, 00693",
        phone: "1-866-CRYPTO",
        website: "https://cryptocorner.com",
        hours: "24/7",
        coins: ["BTC", "ETH"],
        location: { lat: 18.0765, lng: -66.3638 },
        city: "Vega Baja",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 15,
        operator: "Bitcoin ATM",
        name: "Bitcoin ATM - Centro Gran Caribe",
        address: "PR-165 Km 5.0, Toa Alta, 00953",
        phone: "1-800-BITCOIN",
        website: "https://bitcoin-atm.com",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.3609, lng: -66.2184 },
        city: "Toa Alta",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 16,
        operator: "Crypto ATM",
        name: "Crypto ATM - Plaza Añasco",
        address: "Carr 402 Km 0.5, Añasco, 00610",
        phone: "1-888-CRYPTO",
        website: "https://crypto-atm.com",
        hours: "24/7",
        coins: ["BTC", "ETH"],
        location: { lat: 18.0821, lng: -66.9673 },
        city: "Añasco",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop"
    },
    {
        id: 17,
        operator: "Bitcoin Depot",
        name: "Bitcoin Depot - Plaza Río Grande",
        address: "65 Calle Estación, Río Grande, 00745",
        phone: "1-877-BITCOIN",
        website: "https://bitcoindepot.com",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.2264, lng: -65.9163 },
        city: "Río Grande",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=300&h=200&fit=crop"
    },
    {
        id: 18,
        operator: "Crypto Corner",
        name: "Crypto Corner - Luquillo Beach Shopping Center",
        address: "1056 Carr 3, Luquillo, 00773",
        phone: "1-866-CRYPTO",
        website: "https://cryptocorner.com",
        hours: "24/7",
        coins: ["BTC", "ETH"],
        location: { lat: 18.3735, lng: -65.7218 },
        city: "Luquillo",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 19,
        operator: "Bitcoin ATM",
        name: "Bitcoin ATM - Plaza Canóvanas",
        address: "18400 Carr 3, Canóvanas, 00729",
        phone: "1-800-BITCOIN",
        website: "https://bitcoin-atm.com",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.2529, lng: -65.9786 },
        city: "Canóvanas",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 20,
        operator: "Crypto ATM",
        name: "Crypto ATM - San Patricio Plaza",
        address: "100 Ave San Patricio, Guaynabo Sur, 00968",
        phone: "1-888-CRYPTO",
        website: "https://crypto-atm.com",
        hours: "24/7",
        coins: ["BTC", "ETH"],
        location: { lat: 18.4273, lng: -66.1809 },
        city: "Guaynabo",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop"
    },
    {
        id: 21,
        operator: "Bitcoin Depot",
        name: "Bitcoin Depot - Plaza Juncos",
        address: "PR-31 Km 24.0, Juncos, 00777",
        phone: "1-877-BITCOIN",
        website: "https://bitcoindepot.com",
        hours: "24/7",
        coins: ["BTC"],
        location: { lat: 18.1894, lng: -65.9674 },
        city: "Juncos",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=300&h=200&fit=crop"
    },
    {
        id: 22,
        operator: "Crypto Corner",
        name: "Crypto Corner - Plaza Yabucoa",
        address: "Carr 901 Km 1.4, Yabucoa, 00767",
        phone: "1-866-CRYPTO",
        website: "https://cryptocorner.com",
        hours: "24/7",
        coins: ["BTC", "ETH"],
        location: { lat: 18.0469, lng: -65.8792 },
        city: "Yabucoa",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 23,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - Shell Victory Bayamon",
        address: "A43 Calle 1, Bayamón, 00956",
        phone: "+1 855-550-2646",
        website: "https://athenabitcoin.com",
        hours: "24/7",
        coins: ["Bitcoin", "Ethereum"],
        location: { lat: 18.3980, lng: -66.1551 },
        city: "Bayamón",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 24,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - Shell Turabo Gardens",
        address: "Avenida Shuford Num 4, Centro Comercial Turabo Gardens, Caguas, 00727",
        phone: "+1 855-550-2646",
        website: "https://athenabitcoin.com",
        hours: "24/7",
        coins: ["Bitcoin", "Ethereum"],
        location: { lat: 18.2344, lng: -66.0368 },
        city: "Caguas",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop"
    },
    {
        id: 25,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - Pontezuela Puma",
        address: "Pontezuela and Marginal Ave, Vistamar, Carolina",
        phone: "+1 855-550-2646",
        website: "https://athenabitcoin.com",
        hours: "24/7",
        coins: ["Bitcoin", "Ethereum"],
        location: { lat: 18.3793, lng: -65.9573 },
        city: "Carolina",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=300&h=200&fit=crop"
    },
    {
        id: 26,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - Puma Ciales",
        address: "PR-149, Ciales, 00638",
        phone: "+1 855-550-2646",
        website: "https://athenabitcoin.com",
        hours: "24/7",
        coins: ["Bitcoin", "Ethereum"],
        location: { lat: 18.3361, lng: -66.4688 },
        city: "Ciales",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 27,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - Shell Dorado Centro",
        address: "363 Calle Méndez Vigo, Dorado, 00646",
        phone: "+1 855-550-2646",
        website: "https://athenabitcoin.com",
        hours: "24/7",
        coins: ["Bitcoin", "Ethereum"],
        location: { lat: 18.4589, lng: -66.2578 },
        city: "Dorado",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop"
    },
    {
        id: 28,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - AM:PM City Market",
        address: "49 Av. Isla Verde, Carolina, 00979",
        phone: "+1 855-550-2646",
        website: "https://athenabitcoin.com",
        hours: "24/7",
        coins: ["Bitcoin", "Ethereum"],
        location: { lat: 18.4442, lng: -66.0285 },
        city: "Carolina",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=300&h=200&fit=crop"
    },
    {
        id: 29,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - Del Mar Mini Market",
        address: "1479, S-7, Av. Ashford, San Juan, 00907",
        phone: "+1 855-550-2646",
        website: "https://athenabitcoin.com",
        hours: "Mon-Fri: 7:00 am – 8:00 pm, Sat-Sun: 9:00 am – 9:00 pm",
        coins: ["Bitcoin", "Ethereum"],
        location: { lat: 18.4587, lng: -66.0694 },
        city: "San Juan",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 30,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - Santiago Iglesias Cafe",
        address: "1416 Av. Francisco Paz Granela, San Juan, 00921",
        phone: "+1 855-550-2646",
        website: "https://athenabitcoin.com",
        hours: "Mon-Sun: 11:00 am – 2:00 am",
        coins: ["Bitcoin", "Ethereum"],
        location: { lat: 18.4112, lng: -66.0633 },
        city: "San Juan",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop"
    },
    {
        id: 31,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - Puma La Rambla",
        address: "La Rambla Plaza 606 Ave, Tito Castro, Ponce",
        phone: "+1 855-550-2646",
        website: "https://athenabitcoin.com",
        hours: "24/7",
        coins: ["Bitcoin", "Ethereum"],
        location: { lat: 18.0115, lng: -66.6138 },
        city: "Ponce",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=300&h=200&fit=crop"
    },
    {
        id: 32,
        operator: "Athena Bitcoin",
        name: "Athena Bitcoin ATM - Shell San Lorenzo",
        address: "PR Road 181, San Lorenzo, 00754",
        phone: "+1 855-550-2646",
        website: "https://athenabitcoin.com",
        hours: "24/7",
        coins: ["Bitcoin", "Ethereum"],
        location: { lat: 18.1876, lng: -65.9601 },
        city: "San Lorenzo",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 33,
        operator: "Crypto Hub",
        name: "Crypto Hub - Plaza del Sol",
        address: "Plaza del Sol, Bayamón, PR 00961",
        phone: "1-800-CRYPTO",
        website: "https://cryptohub.com",
        hours: "24/7",
        coins: ["Bitcoin", "Ethereum", "Tether", "Litecoin"],
        location: { lat: 18.4054, lng: -65.9792 },
        city: "Bayamón",
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop"
    },
    {
        id: 34,
        operator: "CoinFlip",
        name: "CoinFlip - Plaza Las Américas",
        address: "525 Ave FD Roosevelt, San Juan, PR 00918",
        phone: "1-800-FLIP",
        website: "https://coinflip.tech",
        hours: "24/7",
        coins: ["Bitcoin", "Ethereum", "Tether", "Dogecoin", "Ripple"],
        location: { lat: 18.4037, lng: -66.0636 },
        city: "San Juan",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop"
    },
    {
        id: 35,
        operator: "Bitcoin Depot",
        name: "Bitcoin Depot - Plaza Carolina",
        address: "65 Infantería Ave, Carolina, PR 00985",
        phone: "1-800-BTC",
        website: "https://bitcoindepot.com",
        hours: "24/7",
        coins: ["Bitcoin", "Ethereum", "Bitcoin Cash", "USD Coin"],
        location: { lat: 18.3793, lng: -66.1635 },
        city: "Carolina",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=300&h=200&fit=crop"
    }
];

// Global variables
let map;
let markers = [];
let currentFilter = 'all';
let searchQuery = '';

// Initialize the page when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    initializeSearch();
    
    // Check for query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const coin = urlParams.get('coin');
    const city = urlParams.get('city');
    const search = urlParams.get('search');

    // Handle different pages based on pathname
    const currentPath = window.location.pathname;
    
    if (currentPath === '/' || currentPath === '/index.html') {
        // Home page - initialize map and ATM list
        if (typeof google !== 'undefined') {
            initMap();
        }
        updateATMList(search);
    } else if (currentPath === '/neighborhoods' || currentPath === '/neighborhoods.html') {
        if (city) {
            showNeighborhoodATMs(decodeURIComponent(city));
        } else {
            loadNeighborhoodsContent(search);
        }
    } else if (currentPath === '/cryptocurrencies' || currentPath === '/cryptocurrencies.html') {
        if (coin) {
            showCryptoATMs(decodeURIComponent(coin));
        } else {
            loadCryptocurrenciesContent(search);
        }
    }
});

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.querySelector('#searchInput');
    if (!searchInput) return;

    // Clear any existing value
    searchInput.value = '';

    // Get search term from URL if exists
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    if (searchTerm) {
        searchInput.value = decodeURIComponent(searchTerm);
    }

    // Handle search input
    searchInput.addEventListener('input', handleSearch);
}

// Handle search across all pages
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    const currentPath = window.location.pathname;

    // Update URL with search term
    const urlParams = new URLSearchParams(window.location.search);
    if (searchTerm) {
        urlParams.set('search', searchTerm);
    } else {
        urlParams.delete('search');
    }
    
    // Update URL without page reload
    const newUrl = `${window.location.pathname}${urlParams.toString() ? '?' + urlParams.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);

    // Handle search based on current page
    if (currentPath === '/' || currentPath === '/index.html') {
        updateATMList(searchTerm);
        if (typeof map !== 'undefined') {
            updateMarkers(searchTerm);
        }
    } else if (currentPath === '/neighborhoods' || currentPath === '/neighborhoods.html') {
        loadNeighborhoodsContent(searchTerm);
    } else if (currentPath === '/cryptocurrencies' || currentPath === '/cryptocurrencies.html') {
        loadCryptocurrenciesContent(searchTerm);
    }
}

// Set up event listeners for navigation and search
function setupEventListeners() {
    // Handle filter button clicks
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = button.getAttribute('data-filter');
            setFilter(filter);
        });
    });

    // Handle search input
    const searchInput = document.querySelector('#searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            updateATMList(searchTerm);
            if (typeof map !== 'undefined') {
                updateMarkers(searchTerm);
            }
        });
    }
}

// Update URL and navigate
function setFilter(filter) {
    let newPath = '/';
    switch (filter) {
        case 'neighborhoods':
            newPath = '/neighborhoods';
            break;
        case 'cryptocurrencies':
            newPath = '/cryptocurrencies';
            break;
        case 'all':
            newPath = '/';
            break;
    }
    window.location.href = newPath;
}

// Load neighborhoods content
function loadNeighborhoodsContent(searchTerm = '') {
    const neighborhoodsGrid = document.querySelector('.neighborhoods-grid');
    if (!neighborhoodsGrid) return;

    // Get cities that match the search term
    const cities = [...new Set(atmData
        .filter(atm => 
            !searchTerm || 
            atm.city.toLowerCase().includes(searchTerm) ||
            atm.address.toLowerCase().includes(searchTerm) ||
            atm.operator.toLowerCase().includes(searchTerm)
        )
        .map(atm => atm.city)
    )];

    const cityATMs = {};
    cities.forEach(city => {
        cityATMs[city] = atmData.filter(atm => atm.city === city).length;
    });

    neighborhoodsGrid.innerHTML = cities.length > 0 ? `
        <h2>Bitcoin ATMs by Neighborhood in Puerto Rico</h2>
        <div class="neighborhood-cards">
            ${cities.map(city => `
                <div class="neighborhood-card" onclick="window.location.href='/neighborhoods?city=${encodeURIComponent(city)}'">
                    <h3>${city}</h3>
                    <p>${cityATMs[city]} ATM${cityATMs[city] !== 1 ? 's' : ''}</p>
                </div>
            `).join('')}
        </div>
    ` : `
        <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>No Neighborhoods Found</h3>
            <p>No neighborhoods match your search criteria.</p>
        </div>
    `;
}

// Normalize cryptocurrency name
function normalizeCryptoName(crypto) {
    const normalizeMap = {
        'btc': 'Bitcoin',
        'bitcoin': 'Bitcoin',
        'eth': 'Ethereum',
        'ethereum': 'Ethereum',
        'usdt': 'Tether',
        'tether': 'Tether',
        'ltc': 'Litecoin',
        'litecoin': 'Litecoin',
        'doge': 'Dogecoin',
        'dogecoin': 'Dogecoin',
        'xrp': 'Ripple',
        'ripple': 'Ripple',
        'bch': 'Bitcoin Cash',
        'bitcoin cash': 'Bitcoin Cash',
        'usdc': 'USD Coin',
        'usd coin': 'USD Coin'
    };
    return normalizeMap[crypto.toLowerCase()] || crypto;
}

// Get cryptocurrency symbol
function getCryptoSymbol(crypto) {
    const symbolMap = {
        'Bitcoin': 'BTC',
        'Ethereum': 'ETH',
        'Tether': 'USDT',
        'Litecoin': 'LTC',
        'Dogecoin': 'DOGE',
        'Ripple': 'XRP',
        'Bitcoin Cash': 'BCH',
        'USD Coin': 'USDC'
    };
    return symbolMap[crypto] || crypto.toUpperCase();
}

// Get cryptocurrency icon
function getCryptoIcon(crypto) {
    const iconMap = {
        'Bitcoin': 'fab fa-bitcoin',
        'Ethereum': 'fab fa-ethereum',
        'Tether': 'fas fa-dollar-sign',
        'Litecoin': 'fas fa-litecoin-sign',
        'Dogecoin': 'fas fa-dog',
        'Ripple': 'fas fa-water',
        'Bitcoin Cash': 'fab fa-bitcoin',
        'USD Coin': 'fas fa-dollar-sign',
        'default': 'fas fa-coins'
    };
    return iconMap[crypto] || iconMap.default;
}

// Load cryptocurrencies content with accurate counts
function loadCryptocurrenciesContent(searchTerm = '') {
    const cryptoGrid = document.querySelector('.crypto-grid');
    if (!cryptoGrid) return;

    // Get unique cryptocurrencies and their counts
    const cryptoCounts = {};
    atmData.forEach(atm => {
        atm.coins.forEach(coin => {
            const normalizedCoin = normalizeCryptoName(coin);
            if (!cryptoCounts[normalizedCoin]) {
                cryptoCounts[normalizedCoin] = atmData.filter(a => 
                    a.coins.some(c => normalizeCryptoName(c) === normalizedCoin)
                ).length;
            }
        });
    });

    // Define supported cryptocurrencies with search matching
    const supportedCryptos = [
        { name: 'Bitcoin', symbol: 'BTC', icon: 'fab fa-bitcoin', searchTerms: ['bitcoin', 'btc'] },
        { name: 'Ethereum', symbol: 'ETH', icon: 'fab fa-ethereum', searchTerms: ['ethereum', 'eth'] },
        { name: 'Tether', symbol: 'USDT', icon: 'fas fa-dollar-sign', searchTerms: ['tether', 'usdt'] },
        { name: 'Litecoin', symbol: 'LTC', icon: 'fas fa-litecoin-sign', searchTerms: ['litecoin', 'ltc'] },
        { name: 'Dogecoin', symbol: 'DOGE', icon: 'fas fa-dog', searchTerms: ['dogecoin', 'doge'] },
        { name: 'Ripple', symbol: 'XRP', icon: 'fas fa-water', searchTerms: ['ripple', 'xrp'] },
        { name: 'Bitcoin Cash', symbol: 'BCH', icon: 'fab fa-bitcoin', searchTerms: ['bitcoin cash', 'bch'] },
        { name: 'USD Coin', symbol: 'USDC', icon: 'fas fa-dollar-sign', searchTerms: ['usd coin', 'usdc'] }
    ];

    // Filter cryptocurrencies based on search term
    const filteredCryptos = searchTerm 
        ? supportedCryptos.filter(crypto => 
            crypto.searchTerms.some(term => term.includes(searchTerm)) ||
            crypto.name.toLowerCase().includes(searchTerm) ||
            crypto.symbol.toLowerCase().includes(searchTerm)
        )
        : supportedCryptos;

    cryptoGrid.innerHTML = filteredCryptos.length > 0 ? `
        <h2>Supported Cryptocurrencies at Puerto Rico ATMs</h2>
        <p class="crypto-description">Find ATMs supporting various cryptocurrencies across Puerto Rico</p>
        <div class="crypto-cards">
            ${filteredCryptos.map(crypto => {
                const count = cryptoCounts[crypto.name] || 0;
                return `
                    <div class="crypto-card" onclick="window.location.href='/cryptocurrencies?coin=${encodeURIComponent(crypto.name)}'">
                        <div class="crypto-icon">
                            <i class="${crypto.icon}"></i>
                        </div>
                        <h3>${crypto.name}</h3>
                        <p class="crypto-symbol">${crypto.symbol}</p>
                        <p class="atm-count">${count} ATM${count !== 1 ? 's' : ''}</p>
                        <button class="view-atms-btn">View ATMs</button>
                    </div>
                `;
            }).join('')}
        </div>
    ` : `
        <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>No Cryptocurrencies Found</h3>
            <p>No cryptocurrencies match your search criteria.</p>
        </div>
    `;
}

function updateMarkers(searchTerm) {
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    // Filter ATMs based on current filter and search
    const filteredATMs = filterATMs(searchTerm);

    // Add new markers
    filteredATMs.forEach(atm => {
        // Create marker
        const marker = new google.maps.Marker({
            position: atm.location,
            map: map,
            title: atm.name,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: '#FF385C',
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 2
            }
        });

        // Add click listener for showing details
        marker.addListener('click', () => showATMDetails(atm));

        // Create info window content
        const infoContent = document.createElement('div');
        infoContent.className = 'info-window';
        infoContent.innerHTML = `
            <h3>${atm.name}</h3>
            <p>${atm.address}</p>
            <p>${atm.operator}</p>
        `;

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
            content: infoContent
        });

        // Add hover listeners
        marker.addListener('mouseover', () => infoWindow.open(map, marker));
        marker.addListener('mouseout', () => infoWindow.close());

        markers.push(marker);
    });

    // Adjust map bounds if markers exist
    if (markers.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(marker => bounds.extend(marker.getPosition()));
        map.fitBounds(bounds);
    }
}

function filterATMs(searchTerm) {
    return atmData.filter(atm => {
        const matchesFilter = currentFilter === 'all' || atm.operator.toLowerCase() === currentFilter.toLowerCase();
        const matchesSearch = !searchTerm || 
            atm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            atm.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            atm.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            atm.operator.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });
}

function updateATMList(searchTerm) {
    const atmList = document.querySelector('.atm-list');
    const filteredATMs = filterATMs(searchTerm);

    if (filteredATMs.length === 0) {
        atmList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h2>No ATMs Found</h2>
                <p>Try adjusting your search or filters to find ATMs in Puerto Rico.</p>
                <button onclick="resetFilters()" class="reset-btn">Reset Filters</button>
            </div>
        `;
        return;
    }

    // Update with just the count and ATM cards in a grid
    atmList.innerHTML = `
        <p class="atm-count">Found ${filteredATMs.length} ATMs across Puerto Rico</p>
        <div class="atm-grid">
            ${filteredATMs.map(atm => `
                <article class="atm-card" itemscope itemtype="https://schema.org/LocalBusiness">
                    <meta itemprop="@type" content="CurrencyExchange" />
                    <img src="${atm.image}" 
                         alt="ATM at ${atm.name}" 
                         itemprop="image"
                         onerror="this.src='https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop'">
                    <div class="atm-info">
                        <div class="operator" itemprop="brand">${atm.operator}</div>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(atm.address)}" 
                           class="address" 
                           target="_blank" 
                           title="Get directions to this ATM"
                           itemprop="address" 
                           itemscope 
                           itemtype="https://schema.org/PostalAddress">
                            <i class="fas fa-map-marker-alt"></i>
                            <span itemprop="streetAddress">${atm.address}</span>
                        </a>
                        <a href="tel:${atm.phone}" 
                           class="phone" 
                           itemprop="telephone">
                            <i class="fas fa-phone"></i>
                            <span>${atm.phone}</span>
                        </a>
                        <div class="coins">
                            ${atm.coins.map(coin => `<span class="coin-badge">${coin}</span>`).join('')}
                        </div>
                    </div>
                </article>
            `).join('')}
        </div>
    `;
}

function showATMDetails(atm) {
    const modal = document.getElementById('atmModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Create map links for both Google Maps and Apple Maps
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(atm.address)}`;
    const appleMapsUrl = `maps://maps.apple.com/?q=${encodeURIComponent(atm.address)}`;

    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${atm.name}</h2>
            <button class="modal-close" onclick="closeModal()">&times;</button>
        </div>
        <img src="${atm.image}" alt="${atm.name}" class="modal-image" onerror="this.src='https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=600&h=400&fit=crop'">
        <div class="modal-details">
            <p><strong>Operator:</strong> ${atm.operator}</p>
            <p class="location-links">
                <strong>Address:</strong> ${atm.address}
                <div class="map-links">
                    <a href="${googleMapsUrl}" target="_blank" class="map-link">
                        <i class="fas fa-map-marker-alt"></i> Open in Google Maps
                    </a>
                    <a href="${appleMapsUrl}" class="map-link">
                        <i class="fas fa-map-marker-alt"></i> Open in Apple Maps
                    </a>
                </div>
            </p>
            <p><strong>Phone:</strong> <a href="tel:${atm.phone}">${atm.phone}</a></p>
            <p><strong>Website:</strong> <a href="${atm.website}" target="_blank">${atm.website}</a></p>
            <p><strong>Hours:</strong> ${atm.hours}</p>
            <div class="coin-badges">
                <strong>Supported Coins:</strong>
                ${atm.coins.map(coin => `<span class="coin-badge">${coin}</span>`).join('')}
            </div>
        </div>
    `;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('atmModal').style.display = "none";
}

function resetFilters() {
    currentFilter = 'all';
    searchQuery = '';
    document.querySelector('#searchInput').value = '';
    document.querySelectorAll('.filter-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === 'all');
    });
    updateMarkers();
    updateATMList();
}

function showNeighborhoodATMs(city) {
    const contentArea = document.querySelector('.content-grid');
    if (!contentArea) return;
    
    const normalizedCity = city.toLowerCase().trim();
    const filteredATMs = atmData.filter(atm => 
        atm.city.toLowerCase().trim() === normalizedCity
    );

    contentArea.innerHTML = `
        <div class="atm-list-container">
            <div class="neighborhood-header">
                <h2>Bitcoin ATMs in ${city}, Puerto Rico</h2>
                <p class="atm-count">Found ${filteredATMs.length} Bitcoin ATM${filteredATMs.length !== 1 ? 's' : ''} in ${city}</p>
                <a href="/neighborhoods" class="back-button">
                    <i class="fas fa-arrow-left"></i> Back to Neighborhoods
                </a>
            </div>
            <div class="atm-grid">
                ${filteredATMs.map(atm => `
                    <article class="atm-card">
                        <img src="${atm.image}" alt="Bitcoin ATM at ${atm.name}">
                        <div class="atm-info">
                            <h3>${atm.name}</h3>
                            <div class="operator">${atm.operator}</div>
                            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(atm.address)}" 
                               class="address" 
                               target="_blank"
                               title="Get directions to this ATM">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${atm.address}</span>
                            </a>
                            <a href="tel:${atm.phone}" 
                               class="phone"
                               title="Call this ATM location">
                                <i class="fas fa-phone"></i>
                                <span>${atm.phone}</span>
                            </a>
                            <div class="hours">
                                <i class="fas fa-clock"></i>
                                <span>${atm.hours}</span>
                            </div>
                            <div class="coins">
                                ${atm.coins.map(coin => `<span class="coin-badge">${coin}</span>`).join('')}
                            </div>
                            <a href="${atm.website}" 
                               target="_blank" 
                               class="visit-website"
                               title="Visit ${atm.operator} website">
                               Visit Website
                            </a>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    `;
}

function showCryptoATMs(cryptocurrency) {
    const contentArea = document.querySelector('.content-grid');
    if (!contentArea) return;

    const normalizedCrypto = normalizeCryptoName(cryptocurrency);
    const filteredATMs = atmData.filter(atm => 
        atm.coins.some(coin => normalizeCryptoName(coin) === normalizedCrypto)
    );

    contentArea.innerHTML = `
        <div class="crypto-atm-list">
            <div class="crypto-header">
                <h2>${normalizedCrypto} ATMs in Puerto Rico</h2>
                <p class="atm-count">Found ${filteredATMs.length} ATM${filteredATMs.length !== 1 ? 's' : ''} supporting ${normalizedCrypto}</p>
                <a href="/cryptocurrencies" class="back-button">
                    <i class="fas fa-arrow-left"></i> Back to Cryptocurrencies
                </a>
            </div>
            ${filteredATMs.length > 0 ? `
                <div class="atm-grid">
                    ${filteredATMs.map(atm => `
                        <article class="atm-card" onclick="showATMDetails(${atm.id})">
                            <img src="${atm.image}" alt="${atm.name}" onerror="this.src='https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=300&h=200&fit=crop'">
                            <div class="atm-info">
                                <h3>${atm.name}</h3>
                                <div class="operator">${atm.operator}</div>
                                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(atm.address)}" 
                                   class="address" 
                                   target="_blank"
                                   title="Get directions to this ATM">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>${atm.address}</span>
                                </a>
                                <a href="tel:${atm.phone}" class="phone">
                                    <i class="fas fa-phone"></i>
                                    <span>${atm.phone}</span>
                                </a>
                                <div class="hours">
                                    <i class="fas fa-clock"></i>
                                    <span>${atm.hours}</span>
                                </div>
                                <div class="coins">
                                    ${atm.coins.map(coin => `<span class="coin-badge">${normalizeCryptoName(coin)}</span>`).join('')}
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>
            ` : `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <h3>No ATMs Found</h3>
                    <p>Currently, there are no ATMs supporting ${normalizedCrypto} in Puerto Rico.</p>
                </div>
            `}
        </div>
    `;
}

function initMap() {
    // Check if the map element exists
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error("Map element not found.");
        return;
    }

    try {
        // Create the map
        map = new google.maps.Map(mapElement, {
            center: { lat: 18.4655, lng: -66.1057 }, // Center on Puerto Rico
            zoom: 10,
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                }
            ],
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true
        });

        // Initialize markers and list
        updateMarkers();
        updateATMList();

    } catch (error) {
        console.error('Error initializing map:', error);
        mapElement.innerHTML = `
            <div class="api-error">
                <h2>Map Loading Error</h2>
                <p>There was an error loading the map. Please try refreshing the page.</p>
            </div>
        `;
    }
} 