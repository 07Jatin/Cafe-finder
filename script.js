// Cafe Finder JavaScript - Static Data Version (no API)

// Local sample data organized by Indian cities
const locationBasedCafes = {
    default: [
        { id: 1, name: "Chai Point", address: "MG Road, Central Delhi", rating: 4.5, features: ["wifi", "outdoor", "parking"], description: "Modern Indian tea house serving authentic chai and coffee blends.", distance: "0.2 km" },
        { id: 2, name: "Bean There Coffee", address: "Khan Market, New Delhi", rating: 4.2, features: ["wifi", "parking"], description: "Cozy cafe with freshly roasted coffee and continental breakfast options.", distance: "0.5 km" },
        { id: 3, name: "Filter Coffee Corner", address: "CP Metro Station, New Delhi", rating: 4.7, features: ["outdoor", "parking"], description: "Authentic South Indian filter coffee with traditional breakfast items.", distance: "0.8 km" },
        { id: 4, name: "Cyber City Chai", address: "Gurgaon IT Hub, Haryana", rating: 4.0, features: ["wifi"], description: "Tech district chai spot with quick bites and strong blends.", distance: "1.2 km" }
    ],
    mumbai: [
        { id: 5, name: "Leopold Cafe", address: "Colaba Causeway, Mumbai", rating: 4.3, features: ["wifi", "outdoor"], description: "Iconic Mumbai cafe serving continental fare and coffee.", distance: "1.1 km" },
        { id: 6, name: "Prithvi Cafe", address: "Juhu, Mumbai", rating: 4.5, features: ["outdoor"], description: "Charming outdoor cafe at Prithvi Theatre.", distance: "2.3 km" }
    ],
    bengaluru: [
        { id: 7, name: "Third Wave Coffee", address: "Koramangala, Bengaluru", rating: 4.6, features: ["wifi", "outdoor"], description: "Specialty coffee roaster offering pour-overs and espresso.", distance: "0.9 km" },
        { id: 8, name: "Blue Tokai", address: "Indiranagar, Bengaluru", rating: 4.4, features: ["wifi"], description: "Artisanal roastery and cafe with single-origin beans.", distance: "1.4 km" }
    ],
    delhi: [
        { id: 9, name: "Cafe Turtle", address: "Khan Market, New Delhi", rating: 4.2, features: ["wifi"], description: "Bookstore cafe with quiet ambience and coffee.", distance: "0.7 km" },
        { id: 10, name: "Hauz Khas Social", address: "Hauz Khas Village, Delhi", rating: 4.1, features: ["outdoor"], description: "Hip co-working space and cafe with views.", distance: "2.8 km" }
    ],
    chennai: [
        { id: 11, name: "Amethyst Cafe", address: "Royapettah, Chennai", rating: 4.7, features: ["outdoor", "parking"], description: "Garden cafe offering coffee and continental fare.", distance: "1.6 km" }
    ],
    kolkata: [
        { id: 12, name: "Flurys", address: "Park Street, Kolkata", rating: 4.3, features: ["wifi"], description: "Historic tearoom with pastries and coffee.", distance: "0.8 km" },
        { id: 13, name: "Coffee House", address: "College Street, Kolkata", rating: 4.1, features: ["outdoor"], description: "Legendary adda spot serving South Indian coffee.", distance: "0.6 km" }
    ],
    pune: [
        { id: 14, name: "German Bakery", address: "Koregaon Park, Pune", rating: 4.2, features: ["wifi", "outdoor"], description: "European-style bakery cafe with fresh coffee.", distance: "0.5 km" },
        { id: 15, name: "Dario's", address: "FC Road, Pune", rating: 4.5, features: ["outdoor", "parking"], description: "Italian eatery and cafe popular with students.", distance: "0.8 km" }
    ]
};

// State management
let currentCafes = [];
let isLoading = false;

// DOM elements
const locationInput = document.getElementById('location-input');
const searchBtn = document.getElementById('search-btn');
const cafeResults = document.getElementById('cafe-results');
const wifiFilter = document.getElementById('wifi-filter');
const outdoorFilter = document.getElementById('outdoor-filter');
const parkingFilter = document.getElementById('parking-filter');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners
    searchBtn.addEventListener('click', handleSearch);
    locationInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Add filter event listeners
    wifiFilter.addEventListener('change', applyFilters);
    outdoorFilter.addEventListener('change', applyFilters);
    parkingFilter.addEventListener('change', applyFilters);

    // Load initial cafes from API
    loadInitialCafes();
});

// Load initial cafes from local data
function loadInitialCafes() {
    setLoading(true);
    currentCafes = locationBasedCafes.default.slice();
    displayCafes(currentCafes);
    setLoading(false);
}

// Handle search functionality (no API)
function handleSearch() {
    const location = locationInput.value.trim().toLowerCase();
    console.log(`Searching for cafes in: ${location}`);
    
    if (!location) {
        alert('Please enter a location to search for cafes.');
        return;
    }

    if (isLoading) return;

    setLoading(true);
    
    // Use local data for city or fall back to default
    const cafes = locationBasedCafes[location] || locationBasedCafes.default;
    currentCafes = cafes;
    applyFilters();

    const titleEl = document.querySelector('.results-section h3');
    if (locationBasedCafes[location]) {
        titleEl.textContent = `Cafes near "${location.charAt(0).toUpperCase() + location.slice(1)}"`;
    } else {
        titleEl.textContent = `Cafes near "${location.charAt(0).toUpperCase() + location.slice(1)}" - City not found, showing default`;
    }

    setLoading(false);
}

// Apply filters to current cafes
function applyFilters() {
    const activeFilters = [];
    
    if (wifiFilter.checked) activeFilters.push('wifi');
    if (outdoorFilter.checked) activeFilters.push('outdoor');
    if (parkingFilter.checked) activeFilters.push('parking');
    
    let filteredCafes = currentCafes;
    
    if (activeFilters.length > 0) {
        filteredCafes = currentCafes.filter(cafe => {
            return activeFilters.every(filter => cafe.features.includes(filter));
        });
    }
    
    displayCafes(filteredCafes);
}

// Display cafes in the results section
function displayCafes(cafes) {
    if (cafes.length === 0) {
        cafeResults.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #666;">
                <p>No cafes found matching your criteria. Try adjusting your filters or search location.</p>
            </div>
        `;
        return;
    }
    
    cafeResults.innerHTML = cafes.map(cafe => createCafeCard(cafe)).join('');
}

// Create HTML for a cafe card
function createCafeCard(cafe) {
    const featureBadges = cafe.features.map(feature => {
        const featureNames = {
            wifi: 'WiFi',
            outdoor: 'Outdoor Seating',
            parking: 'Parking'
        };
        return `<span class="feature-badge">${featureNames[feature]}</span>`;
    }).join('');
    
    const stars = generateStarRating(cafe.rating);
    
    return `
        <div class="cafe-card">
            <h4>${cafe.name}</h4>
            <div class="rating" style="margin-bottom: 0.5rem;">
                ${stars} <span style="color: #666; margin-left: 0.5rem;">${cafe.rating}/5</span>
            </div>
            <p><strong>Address:</strong> ${cafe.address}</p>
            <p><strong>Distance:</strong> ${cafe.distance}</p>
            <p>${cafe.description}</p>
            <div class="cafe-features">
                ${featureBadges}
            </div>
        </div>
    `;
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '★';
    }
    
    // Add half star if needed
    if (hasHalfStar) {
        starsHtml += '☆';
    }
    
    // Add empty stars to make 5 total
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '☆';
    }
    
    return `<span style="color: #FFD700; font-size: 1.2rem;">${starsHtml}</span>`;
}

// Show error message
function showError(message) {
    cafeResults.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: #e74c3c;">
            <p><strong>Error:</strong> ${message}</p>
            <button onclick="loadInitialCafes()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #8B4513; color: white; border: none; border-radius: 4px; cursor: pointer;">Retry</button>
        </div>
    `;
}

// Set loading state
function setLoading(loading) {
    isLoading = loading;
    
    if (loading) {
        searchBtn.innerHTML = '<span class="loading"></span> Searching...';
        searchBtn.disabled = true;
        cafeResults.innerHTML = '<div style="text-align: center; padding: 2rem;"><span class="loading"></span> Loading cafes...</div>';
    } else {
        searchBtn.innerHTML = 'Find Cafes';
        searchBtn.disabled = false;
    }
}

// Utility function to simulate geolocation (for future enhancement)
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported by this browser.'));
            return;
        }
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (error) => {
                reject(error);
            }
        );
    });
}

// Future enhancement: Add map integration
function initializeMap(cafes) {
    // This would integrate with Google Maps or another mapping service
    console.log('Map integration would be implemented here');
}

// Future enhancement: Add cafe details modal
function showCafeDetails(cafeId) {
    const cafe = currentCafes.find(c => c.id === cafeId);
    if (cafe) {
        // Show detailed modal with more information
        console.log('Showing details for:', cafe.name);
    }
}
