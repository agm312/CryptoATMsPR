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
let map = null;
let markers = [];
let currentFilter = 'all';
let searchQuery = '';

// Initialize the map and handle navigation
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    setupEventListeners();
    handleRoute();
    if (typeof google !== 'undefined' && google.maps) {
        initMap();
    } else {
        console.warn('Google Maps API not loaded');
    }
});

// Set up event listeners for navigation and search
function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Handle navigation clicks
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const path = e.currentTarget.getAttribute('href');
            console.log('Navigation clicked:', path);
            navigateTo(path);
        });
    });

    // Handle search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Search term:', searchTerm);
            updateATMList(searchTerm);
            if (typeof updateMarkers === 'function') {
                updateMarkers(searchTerm);
            }
        });
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        console.log('Popstate event triggered');
        handleRoute();
    });
}

// Handle navigation to different views
function navigateTo(path) {
    console.log('Navigating to:', path);
    history.pushState({}, '', path);
    handleRoute();
}

// Handle routing based on current path
function handleRoute() {
    const path = window.location.pathname;
    console.log('Handling route:', path);

    // Hide all sections initially
    ['all-atms', 'neighborhoods', 'cryptocurrencies'].forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'none';
        }
    });

    // Remove active class from all filter buttons
    document.querySelectorAll('.filter-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Handle different routes
    if (path === '/' || path === '/index.html') {
        showAllATMs();
        const allBtn = document.querySelector('[data-filter="all"]');
        if (allBtn) allBtn.classList.add('active');
    } else if (path === '/neighborhoods') {
        showNeighborhoods();
        const neighborhoodsBtn = document.querySelector('[data-filter="neighborhoods"]');
        if (neighborhoodsBtn) neighborhoodsBtn.classList.add('active');
    } else if (path === '/cryptocurrencies') {
        showCryptocurrencies();
        const cryptoBtn = document.querySelector('[data-filter="cryptocurrencies"]');
        if (cryptoBtn) cryptoBtn.classList.add('active');
    } else if (path.startsWith('/Bitcoin') || path.startsWith('/Ethereum') || 
               path.startsWith('/Litecoin') || path.startsWith('/Tether') || 
               path.startsWith('/Dogecoin') || path.startsWith('/USD/Coin') || 
               path.startsWith('/Bitcoin/Cash')) {
        const crypto = path.split('/')[1];
        showCryptoATMs(crypto);
    } else {
        const city = path.split('/').filter(Boolean).join(' ');
        if (city) {
            showNeighborhoodATMs(city);
        }
    }
}

// Show all ATMs view
function showAllATMs() {
    console.log('Showing all ATMs');
    const allATMsSection = document.getElementById('all-atms');
    if (allATMsSection) {
        allATMsSection.style.display = 'block';
    }

    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.style.display = 'block';
    }

    updateATMList('');
    if (typeof updateMarkers === 'function') {
        updateMarkers('');
    }
}

// Show neighborhoods view
function showNeighborhoods() {
    console.log('Showing neighborhoods');
    const neighborhoodsSection = document.getElementById('neighborhoods');
    if (!neighborhoodsSection) return;

    neighborhoodsSection.style.display = 'block';
    
    // Get unique cities and count ATMs
    const cities = {};
    atmData.forEach(atm => {
        cities[atm.city] = (cities[atm.city] || 0) + 1;
    });

    // Generate HTML for neighborhood cards
    const html = `
        <h2>Bitcoin ATMs by Neighborhood in Puerto Rico</h2>
        <div class="neighborhood-cards">
            ${Object.entries(cities).map(([city, count]) => `
                <div class="neighborhood-card">
                    <h3>${city}</h3>
                    <p>${count} ATM${count !== 1 ? 's' : ''}</p>
                    <a href="/${city.split(' ').join('/')}" class="view-atms-btn">View ATMs</a>
                </div>
            `).join('')}
        </div>
    `;

    neighborhoodsSection.innerHTML = html;
}

// Show cryptocurrencies view
function showCryptocurrencies() {
    console.log('Showing cryptocurrencies');
    const cryptoSection = document.getElementById('cryptocurrencies');
    if (!cryptoSection) return;

    cryptoSection.style.display = 'block';

    // Count ATMs supporting each cryptocurrency
    const cryptoCounts = {};
    atmData.forEach(atm => {
        atm.coins.forEach(coin => {
            const normalizedCoin = normalizeCryptoName(coin);
            cryptoCounts[normalizedCoin] = (cryptoCounts[normalizedCoin] || 0) + 1;
        });
    });

    // Generate HTML for cryptocurrency cards
    const html = `
        <h2>Cryptocurrency ATMs in Puerto Rico</h2>
        <div class="crypto-cards">
            ${Object.entries(cryptoCounts).map(([crypto, count]) => `
                <div class="crypto-card">
                    <div class="crypto-icon">
                        <i class="${getCryptoIcon(crypto)}"></i>
                    </div>
                    <h3>${crypto}</h3>
                    <p class="crypto-symbol">${getCryptoSymbol(crypto)}</p>
                    <p>${count} ATM${count !== 1 ? 's' : ''}</p>
                    <a href="/${crypto.replace(' ', '/')}" class="view-atms-btn">View ATMs</a>
                </div>
            `).join('')}
        </div>
    `;

    cryptoSection.innerHTML = html;
}

// Show ATMs for a specific neighborhood
function showNeighborhoodATMs(city) {
    console.log('Showing ATMs for city:', city);
    const allATMsSection = document.getElementById('all-atms');
    if (!allATMsSection) return;

    allATMsSection.style.display = 'block';

    const filteredATMs = atmData.filter(atm => 
        atm.city.toLowerCase() === city.toLowerCase()
    );

    const heading = document.createElement('h2');
    heading.textContent = `Bitcoin ATMs in ${city}`;
    
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Neighborhoods';
    backButton.onclick = () => navigateTo('/neighborhoods');

    const contentArea = document.querySelector('.content-grid');
    if (contentArea) {
        contentArea.insertBefore(heading, contentArea.firstChild);
        contentArea.insertBefore(backButton, contentArea.firstChild);
    }

    updateATMList('', filteredATMs);
    if (typeof updateMarkers === 'function') {
        updateMarkers(city);
    }
}

// Show ATMs for a specific cryptocurrency
function showCryptoATMs(crypto) {
    console.log('Showing ATMs for crypto:', crypto);
    const allATMsSection = document.getElementById('all-atms');
    if (!allATMsSection) return;

    allATMsSection.style.display = 'block';

    const normalizedCrypto = normalizeCryptoName(crypto);
    const filteredATMs = atmData.filter(atm =>
        atm.coins.some(coin => normalizeCryptoName(coin) === normalizedCrypto)
    );

    const heading = document.createElement('h2');
    heading.textContent = `${crypto} ATMs in Puerto Rico`;
    
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Cryptocurrencies';
    backButton.onclick = () => navigateTo('/cryptocurrencies');

    const contentArea = document.querySelector('.content-grid');
    if (contentArea) {
        contentArea.insertBefore(heading, contentArea.firstChild);
        contentArea.insertBefore(backButton, contentArea.firstChild);
    }

    updateATMList('', filteredATMs);
    if (typeof updateMarkers === 'function') {
        updateMarkers(crypto);
    }
}

// Update ATM list based on search term
function updateATMList(searchTerm = '', atms = atmData) {
    console.log('Updating ATM list with search term:', searchTerm);
    const atmList = document.getElementById('atm-list');
    if (!atmList) return;

    const filteredATMs = atms.filter(atm => {
        if (!searchTerm) return true;
        const searchString = `${atm.name} ${atm.address} ${atm.operator} ${atm.city}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    });

    if (filteredATMs.length === 0) {
        atmList.innerHTML = '<p class="no-results">No ATMs found matching your search.</p>';
        return;
    }

    atmList.innerHTML = filteredATMs.map(atm => `
        <div class="atm-card">
            <div class="atm-info">
                <h3>${atm.name}</h3>
                <p class="address">${atm.address}</p>
                <p class="operator">Operator: ${atm.operator}</p>
                <p class="hours">${atm.hours}</p>
                <div class="supported-coins">
                    ${atm.coins.map(coin => `<span class="coin">${coin}</span>`).join('')}
                </div>
            </div>
            <div class="atm-actions">
                <a href="https://www.google.com/maps?q=${atm.location.lat},${atm.location.lng}" 
                   target="_blank" 
                   class="directions-btn">
                    <i class="fas fa-directions"></i> Get Directions
                </a>
                ${atm.website ? `
                    <a href="${atm.website}" 
                       target="_blank" 
                       class="website-btn">
                        <i class="fas fa-globe"></i> Visit Website
                    </a>
                ` : ''}
                ${atm.phone ? `
                    <a href="tel:${atm.phone}" 
                       class="phone-btn">
                        <i class="fas fa-phone"></i> ${atm.phone}
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Initialize Google Map
function initMap() {
    console.log('Initializing map');
    try {
        const mapOptions = {
            center: { lat: 18.2208, lng: -66.5901 },
            zoom: 9,
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                }
            ]
        };

        const mapElement = document.getElementById('map');
        if (!mapElement) {
            console.error('Map container not found');
            return;
        }

        window.map = new google.maps.Map(mapElement, mapOptions);
        window.markers = [];
        updateMarkers('');
    } catch (error) {
        console.error('Error initializing map:', error);
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
            mapContainer.innerHTML = `
                <div class="map-error">
                    <h3>Map Loading Error</h3>
                    <p>Sorry, we couldn't load the map. Please try refreshing the page.</p>
                </div>
            `;
        }
    }
}

// Update map markers based on filter
function updateMarkers(filter = '') {
    console.log('Updating markers with filter:', filter);
    if (!window.map || !window.markers) {
        console.warn('Map or markers not initialized');
        return;
    }

    // Clear existing markers
    window.markers.forEach(marker => marker.setMap(null));
    window.markers = [];

    const bounds = new google.maps.LatLngBounds();
    let hasValidMarkers = false;

    atmData.forEach(atm => {
        if (!atm.location || typeof atm.location.lat !== 'number' || typeof atm.location.lng !== 'number') {
            console.warn('Invalid location data for ATM:', atm);
            return;
        }

        const matchesFilter = !filter || 
            atm.city.toLowerCase().includes(filter.toLowerCase()) ||
            atm.coins.some(coin => normalizeCryptoName(coin).toLowerCase().includes(filter.toLowerCase()));

        if (matchesFilter) {
            const position = { lat: atm.location.lat, lng: atm.location.lng };
            const marker = new google.maps.Marker({
                position,
                map: window.map,
                title: atm.name,
                icon: {
                    url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
                }
            });

            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div class="info-window">
                        <h3>${atm.name}</h3>
                        <p>${atm.address}</p>
                        <p>Operator: ${atm.operator}</p>
                        <p>${atm.hours}</p>
                        <div class="supported-coins">
                            ${atm.coins.map(coin => `<span class="coin">${coin}</span>`).join('')}
                        </div>
                        <a href="https://www.google.com/maps?q=${atm.location.lat},${atm.location.lng}" 
                           target="_blank">Get Directions</a>
                    </div>
                `
            });

            marker.addListener('click', () => {
                infoWindow.open(window.map, marker);
            });

            window.markers.push(marker);
            bounds.extend(position);
            hasValidMarkers = true;
        }
    });

    if (hasValidMarkers) {
        window.map.fitBounds(bounds);
        if (window.map.getZoom() > 15) {
            window.map.setZoom(15);
        }
    }
}

// Helper functions for cryptocurrency handling
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
    return symbolMap[crypto] || crypto;
}

function getCryptoIcon(crypto) {
    const iconMap = {
        'Bitcoin': 'fab fa-bitcoin',
        'Ethereum': 'fab fa-ethereum',
        'Tether': 'fas fa-dollar-sign',
        'Litecoin': 'fas fa-litecoin-sign',
        'Dogecoin': 'fas fa-dog',
        'Ripple': 'fas fa-water',
        'Bitcoin Cash': 'fab fa-bitcoin',
        'USD Coin': 'fas fa-dollar-sign'
    };
    return iconMap[crypto] || 'fas fa-coins';
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

// Load neighborhoods content
function loadNeighborhoodsContent(searchTerm = '') {
    const contentArea = document.querySelector('.content-grid');
    if (!contentArea) return;

    // Hide map container if it exists
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.style.display = 'none';
    }

    const cities = [...new Set(atmData
        .filter(atm => 
            !searchTerm || 
            atm.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            atm.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            atm.operator.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(atm => atm.city)
    )];

    const cityATMs = {};
    cities.forEach(city => {
        cityATMs[city] = atmData.filter(atm => atm.city === city).length;
    });

    contentArea.innerHTML = `
        <div class="neighborhoods-grid">
            <h2>Bitcoin ATMs by Neighborhood in Puerto Rico</h2>
            ${cities.length > 0 ? `
                <div class="neighborhood-cards">
                    ${cities.map(city => {
                        const seoCity = city.toLowerCase().replace(/\s+/g, '');
                        return `
                            <div class="neighborhood-card">
                                <h3>${city}</h3>
                                <p>${cityATMs[city]} ATM${cityATMs[city] !== 1 ? 's' : ''}</p>
                                <a href="/Bitcoin/ATMs/${seoCity}/PR" class="view-atms-btn">View ATMs</a>
                            </div>
                        `;
                    }).join('')}
                </div>
            ` : `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <h3>No Neighborhoods Found</h3>
                    <p>No neighborhoods match your search criteria.</p>
                </div>
            `}
        </div>
    `;

    // Update URL
    const newUrl = searchTerm 
        ? `/Bitcoin/ATMs/PR?search=${encodeURIComponent(searchTerm)}`
        : '/Bitcoin/ATMs/PR';
    window.history.pushState({ page: 'neighborhoods' }, '', newUrl);
}

// Load cryptocurrencies content
function loadCryptocurrenciesContent(searchTerm = '') {
    const contentArea = document.querySelector('.content-grid');
    if (!contentArea) return;

    // Hide map container if it exists
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.style.display = 'none';
    }

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

    // Define supported cryptocurrencies
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
            crypto.searchTerms.some(term => term.includes(searchTerm.toLowerCase())) ||
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : supportedCryptos;

    contentArea.innerHTML = `
        <div class="crypto-grid">
            <h2>Supported Cryptocurrencies at Puerto Rico ATMs</h2>
            <p class="crypto-description">Find ATMs supporting various cryptocurrencies across Puerto Rico</p>
            ${filteredCryptos.length > 0 ? `
                <div class="crypto-cards">
                    ${filteredCryptos.map(crypto => {
                        const count = cryptoCounts[crypto.name] || 0;
                        return `
                            <div class="crypto-card">
                                <div class="crypto-icon">
                                    <i class="${crypto.icon}"></i>
                                </div>
                                <h3>${crypto.name}</h3>
                                <p class="crypto-symbol">${crypto.symbol}</p>
                                <p class="atm-count">${count} ATM${count !== 1 ? 's' : ''}</p>
                                <a href="/Bitcoin/ATMs/PR" class="view-atms-btn">View ATMs</a>
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
            `}
        </div>
    `;

    // Update URL
    const newUrl = searchTerm 
        ? `/Bitcoin/ATMs/PR?search=${encodeURIComponent(searchTerm)}`
        : '/Bitcoin/ATMs/PR';
    window.history.pushState({ page: 'cryptocurrencies' }, '', newUrl);
}

// Handle browser navigation
window.addEventListener('popstate', (event) => {
    const path = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    const searchTerm = searchParams.get('search') || '';

    if (path === '/' || path === '/index.html') {
        handleNavigation('all', { search: searchTerm });
    } else if (path.startsWith('/neighborhoods')) {
        const cityMatch = path.match(/\/neighborhoods\/([^/]+)/);
        if (cityMatch) {
            const city = cityMatch[1].replace(/-/g, ' ');
            handleNavigation('neighborhoods', { city });
        } else {
            handleNavigation('neighborhoods', { search: searchTerm });
        }
    } else if (path.startsWith('/cryptocurrencies')) {
        const coinMatch = path.match(/\/cryptocurrencies\/([^/]+)/);
        if (coinMatch) {
            const coin = coinMatch[1].replace(/-/g, ' ');
            handleNavigation('cryptocurrencies', { coin });
        } else {
            handleNavigation('cryptocurrencies', { search: searchTerm });
        }
    }
}); 