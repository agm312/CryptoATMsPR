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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop"
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
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=600&fit=crop"
    }
];

// Global variables
let map;
let markers = [];
let currentFilter = 'all';
let searchQuery = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadContent('all');
});

// Set up event listeners
function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadContent(tabId);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    if (searchInput && searchButton) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            filterATMs();
        });

        searchButton.addEventListener('click', () => {
            filterATMs();
        });
    }
}

// Load content based on selected tab
async function loadContent(tabId) {
    currentFilter = tabId;
    
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedContent = document.getElementById(tabId === 'all' ? 'all-atms' : tabId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    switch(tabId) {
        case 'all':
            showAllATMs();
            break;
        case 'neighborhoods':
            await loadNeighborhoodsContent();
            break;
        case 'cryptocurrencies':
            await loadCryptocurrenciesContent();
            break;
    }
}

// Load neighborhoods content
async function loadNeighborhoodsContent() {
    try {
        const response = await fetch('neighborhoods.html');
        const html = await response.text();
        document.getElementById('neighborhoods').innerHTML = html;
    } catch (error) {
        console.error('Error loading neighborhoods content:', error);
    }
}

// Load cryptocurrencies content
async function loadCryptocurrenciesContent() {
    try {
        const response = await fetch('cryptocurrencies.html');
        const html = await response.text();
        document.getElementById('cryptocurrencies').innerHTML = html;
    } catch (error) {
        console.error('Error loading cryptocurrencies content:', error);
    }
}

// Show all ATMs view
function showAllATMs() {
    if (typeof google === 'undefined') {
        console.error('Google Maps not loaded');
        return;
    }

    if (!map) {
        initMap();
    }

    updateATMList();
    updateMarkers();
}

// Initialize Google Maps
function initMap() {
    const mapOptions = {
        center: { lat: 18.2208, lng: -66.5901 }, // Center of Puerto Rico
        zoom: 9,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }
        ]
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    updateMarkers();
}

// Update ATM list based on search
function updateATMList() {
    const atmList = document.getElementById('atm-list');
    if (!atmList) return;

    const filteredATMs = filterATMs();
    
    atmList.innerHTML = filteredATMs.map(atm => `
        <div class="atm-card">
            <img src="${atm.image}" alt="${atm.name}" class="atm-image">
            <div class="atm-info">
                <h3>${atm.name}</h3>
                <p><i class="fas fa-map-marker-alt"></i> ${atm.address}</p>
                <p><i class="fas fa-clock"></i> ${atm.hours}</p>
                <p><i class="fas fa-coins"></i> ${atm.coins.join(', ')}</p>
            </div>
            <div class="atm-actions">
                <a href="https://www.google.com/maps?q=${atm.location.lat},${atm.location.lng}" 
                   target="_blank" class="btn-directions">
                    <i class="fas fa-directions"></i> Get Directions
                </a>
                <a href="${atm.website}" target="_blank" class="btn-website">
                    <i class="fas fa-globe"></i> Visit Website
                </a>
            </div>
        </div>
    `).join('');
}

// Filter ATMs based on search query
function filterATMs() {
    return atmData.filter(atm => {
        const searchString = `${atm.name} ${atm.address} ${atm.operator} ${atm.city} ${atm.coins.join(' ')}`.toLowerCase();
        return searchString.includes(searchQuery);
    });
}

// Update map markers
function updateMarkers() {
    if (!map) return;

    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    const filteredATMs = filterATMs();
    const bounds = new google.maps.LatLngBounds();

    filteredATMs.forEach(atm => {
        const marker = new google.maps.Marker({
            position: atm.location,
            map: map,
            title: atm.name
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="info-window">
                    <h3>${atm.name}</h3>
                    <p>${atm.address}</p>
                    <p><strong>Hours:</strong> ${atm.hours}</p>
                    <p><strong>Coins:</strong> ${atm.coins.join(', ')}</p>
                    <a href="https://www.google.com/maps?q=${atm.location.lat},${atm.location.lng}" 
                       target="_blank">Get Directions</a>
                </div>
            `
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });

        markers.push(marker);
        bounds.extend(atm.location);
    });

    if (filteredATMs.length > 0) {
        map.fitBounds(bounds);
        if (map.getZoom() > 15) {
            map.setZoom(15);
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
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(atm.address)}`;
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
    document.querySelector('#search-input').value = '';
    document.querySelectorAll('.filter-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === 'all');
    });
    updateMarkers();
    updateATMList();
}

function renderATMCard(atm) {
    return `
        <div class="atm-card">
            <img src="${atm.image || 'default-atm.jpg'}" alt="${atm.name}" class="atm-image">
            <div class="atm-info">
                <h3>${atm.name}</h3>
                <p><strong>Address:</strong> ${atm.address}</p>
                <p><strong>Hours:</strong> ${atm.hours || 'Not specified'}</p>
                <p><strong>Cryptocurrencies:</strong> ${atm.coins.join(', ')}</p>
            </div>
            <div class="atm-actions">
                <a href="https://www.google.com/maps?q=${atm.location.lat},${atm.location.lng}" target="_blank" class="btn btn-primary">View on Map</a>
                ${atm.website ? `<a href="${atm.website}" target="_blank" class="btn btn-secondary">Visit Website</a>` : ''}
            </div>
        </div>
    `;
}

function updateActiveTab(view) {
    document.querySelectorAll('.filter-button').forEach(button => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`[data-filter="${view}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
} 