// Cafe Finder JavaScript

// Sample cafe data (in a real app, this would come from an API)
const sampleCafes = [
    {
        id: 1,
        name: "The Coffee Bean",
        address: "123 Main Street, Downtown",
        rating: 4.5,
        features: ["wifi", "outdoor", "parking"],
        description: "Cozy neighborhood cafe with excellent espresso and friendly atmosphere.",
        distance: "0.2 miles"
    },
    {
        id: 2,
        name: "Brew & Bistro",
        address: "456 Oak Avenue, Midtown",
        rating: 4.2,
        features: ["wifi", "parking"],
        description: "Modern coffee shop with artisanal brews and light meals.",
        distance: "0.5 miles"
    },
    {
        id: 3,
        name: "Garden Cafe",
        address: "789 Pine Road, Uptown",
        rating: 4.7,
        features: ["outdoor", "parking"],
        description: "Beautiful garden setting with organic coffee and homemade pastries.",
        distance: "0.8 miles"
    },
    {
        id: 4,
        name: "Tech Hub Coffee",
        address: "321 Innovation Drive, Tech District",
        rating: 4.0,
        features: ["wifi"],
        description: "Perfect for remote work with high-speed WiFi and quiet atmosphere.",
        distance: "1.2 miles"
    }
];

// DOM elements
const locationInput = document.getElementById('location-input');
const searchBtn = document.getElementById('search-btn');
const cafeResults = document.getElementById('cafe-results');
const wifiFilter = document.getElementById('wifi-filter');
const outdoorFilter = document.getElementById('outdoor-filter');
const parkingFilter = document.getElementById('parking-filter');

// State
let currentCafes = [];
let isLoading = false;

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

    // Show initial results
    displayCafes(sampleCafes);
    currentCafes = sampleCafes;
});

// Handle search functionality
function handleSearch() {
    const location = locationInput.value.trim();
    
    if (!location) {
        alert('Please enter a location to search for cafes.');
        return;
    }

    if (isLoading) return;

    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
        // In a real app, this would be an API call to a service like Google Places
        // For now, we'll use the sample data
        currentCafes = sampleCafes;
        applyFilters();
        setLoading(false);
        
        // Update the results section heading
        document.querySelector('.results-section h3').textContent = 
            `Cafes near "${location}"`;
    }, 1500);
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

// Set loading state
function setLoading(loading) {
    isLoading = loading;
    
    if (loading) {
        searchBtn.innerHTML = '<span class="loading"></span> Searching...';
        searchBtn.disabled = true;
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