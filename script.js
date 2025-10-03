// Cafe Finder JavaScript

// Sample cafe data organized by Indian cities
const locationBasedCafes = {
    // Default cafes for generic searches
    default: [
        {
            id: 1,
            name: "Chai Point",
            address: "MG Road, Central Delhi",
            rating: 4.5,
            features: ["wifi", "outdoor", "parking"],
            description: "Modern Indian tea house serving authentic chai and coffee blends.",
            distance: "0.2 km"
        },
        {
            id: 2,
            name: "Bean There Coffee",
            address: "Khan Market, New Delhi",
            rating: 4.2,
            features: ["wifi", "parking"],
            description: "Cozy cafe with freshly roasted coffee and continental breakfast options.",
            distance: "0.5 km"
        }
    ],
    // Mumbai area cafes
    'mumbai': [
        {
            id: 5,
            name: "Cafe Mocha",
            address: "Bandra West, Mumbai, Maharashtra",
            rating: 4.6,
            features: ["wifi", "outdoor"],
            description: "Trendy Bandra cafe known for its filter coffee and vada pav fusion dishes.",
            distance: "0.3 km"
        },
        {
            id: 6,
            name: "Leopold Cafe",
            address: "Colaba Causeway, Mumbai, Maharashtra",
            rating: 4.3,
            features: ["wifi", "parking"],
            description: "Historic Mumbai institution serving continental food and excellent coffee since 1871.",
            distance: "0.7 km"
        },
        {
            id: 7,
            name: "Prithvi Cafe",
            address: "Juhu, Mumbai, Maharashtra",
            rating: 4.8,
            features: ["outdoor", "wifi", "parking"],
            description: "Artistic cafe attached to Prithvi Theatre with live performances and great coffee.",
            distance: "1.1 km"
        }
    ],
    // Bangalore area cafes
    'bangalore': [
        {
            id: 8,
            name: "Third Wave Coffee",
            address: "Koramangala, Bangalore, Karnataka",
            rating: 4.4,
            features: ["wifi", "outdoor"],
            description: "Specialty coffee roasters popular among IT professionals with single-origin beans.",
            distance: "0.4 km"
        },
        {
            id: 9,
            name: "Toit Brewpub",
            address: "Indiranagar, Bangalore, Karnataka",
            rating: 4.7,
            features: ["outdoor", "parking"],
            description: "Microbrewery and cafe serving craft beer, wood-fired pizzas, and artisan coffee.",
            distance: "0.9 km"
        },
        {
            id: 10,
            name: "Blue Tokai Coffee",
            address: "Church Street, Bangalore, Karnataka",
            rating: 4.5,
            features: ["wifi", "outdoor"],
            description: "Indian coffee roaster focusing on estate-grown beans with minimalist decor.",
            distance: "0.6 km"
        }
    ],
    // Delhi area cafes
    'delhi': [
        {
            id: 11,
            name: "Cafe Turtle",
            address: "Khan Market, New Delhi",
            rating: 4.5,
            features: ["wifi", "outdoor"],
            description: "Bookstore cafe with literary ambiance, serving excellent coffee and continental cuisine.",
            distance: "0.5 km"
        },
        {
            id: 12,
            name: "Hauz Khas Social",
            address: "Hauz Khas Village, New Delhi",
            rating: 4.2,
            features: ["wifi", "parking"],
            description: "Trendy co-working cafe space with rooftop seating and Instagram-worthy interiors.",
            distance: "0.8 km"
        },
        {
            id: 13,
            name: "Roseate House Cafe",
            address: "Aerocity, New Delhi",
            rating: 4.6,
            features: ["wifi", "outdoor", "parking"],
            description: "Luxury hotel cafe with premium coffee blends and elegant fine dining experience.",
            distance: "1.2 km"
        }
    ],
    // Chennai area cafes
    'chennai': [
        {
            id: 14,
            name: "Cafe Coffee Day",
            address: "Marina Beach, Chennai, Tamil Nadu",
            rating: 4.1,
            features: ["wifi", "outdoor"],
            description: "Popular Indian coffee chain with beachside location and strong South Indian filter coffee.",
            distance: "0.3 km"
        },
        {
            id: 15,
            name: "Amethyst Cafe",
            address: "Whites Road, Chennai, Tamil Nadu",
            rating: 4.7,
            features: ["outdoor", "parking"],
            description: "Garden cafe in a heritage bungalow serving organic coffee and healthy Mediterranean food.",
            distance: "0.7 km"
        }
    ],
    // Kolkata area cafes
    'kolkata': [
        {
            id: 16,
            name: "Flurys",
            address: "Park Street, Kolkata, West Bengal",
            rating: 4.4,
            features: ["wifi", "parking"],
            description: "Iconic colonial-era confectionery and cafe famous for its cakes and English breakfast tea.",
            distance: "0.4 km"
        },
        {
            id: 17,
            name: "Coffee House",
            address: "College Street, Kolkata, West Bengal",
            rating: 4.3,
            features: ["wifi", "outdoor"],
            description: "Historic adda spot for intellectuals and students, serving traditional South Indian coffee.",
            distance: "0.6 km"
        }
    ],
    // Pune area cafes
    'pune': [
        {
            id: 18,
            name: "German Bakery",
            address: "Koregaon Park, Pune, Maharashtra",
            rating: 4.2,
            features: ["wifi", "outdoor"],
            description: "Famous bakery cafe serving European-style coffee, fresh breads, and continental breakfast.",
            distance: "0.5 km"
        },
        {
            id: 19,
            name: "Dario's",
            address: "FC Road, Pune, Maharashtra",
            rating: 4.5,
            features: ["outdoor", "parking"],
            description: "Student-friendly cafe near Fergusson College with affordable coffee and Italian cuisine.",
            distance: "0.8 km"
        }
    ]
};

// Keep original sample cafes for backward compatibility
const sampleCafes = locationBasedCafes.default.concat([
    {
        id: 3,
        name: "Filter Coffee Corner",
        address: "CP Metro Station, New Delhi",
        rating: 4.7,
        features: ["outdoor", "parking"],
        description: "Authentic South Indian filter coffee with traditional breakfast items.",
        distance: "0.8 km"
    },
    {
        id: 4,
        name: "Cyber City Chai",
        address: "Gurgaon IT Hub, Haryana",
        rating: 4.0,
        features: ["wifi"],
        description: "Perfect for remote work with high-speed WiFi and masala chai.",
        distance: "1.2 km"
    }
]);

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
    const location = locationInput.value.trim().toLowerCase();
    
    if (!location) {
        alert('Please enter a location to search for cafes.');
        return;
    }

    if (isLoading) return;

    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
        // Look for location matches in our sample data
        let matchFound = false;
        
        // Check if we have cafes for this location
        for (const [key, cafes] of Object.entries(locationBasedCafes)) {
            if (location.includes(key) || key.includes(location)) {
                currentCafes = cafes;
                matchFound = true;
                break;
            }
        }
        
        // If no match, use default cafes
        if (!matchFound) {
            currentCafes = sampleCafes;
        }
        
        applyFilters();
        setLoading(false);
        
        // Update the results section heading
        document.querySelector('.results-section h3').textContent = 
            `Cafes near "${location.charAt(0).toUpperCase() + location.slice(1)}"`;
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