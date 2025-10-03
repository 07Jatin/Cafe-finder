# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Cafe Finder is a simple, responsive web application built with vanilla HTML, CSS, and JavaScript that helps users discover coffee shops in their area. The app uses sample data and demonstrates modern web development patterns without external dependencies or build tools.

## Development Commands

### Running the Application
```powershell
# Simple file serving (open index.html directly)
start index.html

# Or serve with Python (if available)
python -m http.server 8000

# Or with Node.js http-server (if available)
npx http-server

# Or with PHP (if available)
php -S localhost:8000
```

### Development Testing
```powershell
# No formal test suite - manual testing by opening index.html
# Verify responsiveness by resizing browser window
# Test all filter combinations
# Test search functionality with different location inputs
```

### Code Validation
```powershell
# HTML validation (if w3c validator is installed via npm)
npx html-validate index.html

# CSS validation (using online tools or browser dev tools)
# Check CSS Grid and Flexbox support in browser dev tools

# JavaScript linting (if ESLint is available)
npx eslint script.js
```

## Architecture & Code Organization

### File Structure
- `index.html` - Single-page application structure with semantic HTML5
- `styles.css` - Mobile-first responsive design using CSS Grid and Flexbox
- `script.js` - Vanilla JavaScript with modular function architecture
- `README.md` - Comprehensive documentation

### Key Architectural Patterns

#### State Management
The application uses simple global state management:
- `currentCafes[]` - Holds the current dataset (initially sample data)
- `isLoading` - Boolean flag for async operations
- DOM elements cached at module level for performance

#### Data Flow
1. **Search Flow**: User input → `handleSearch()` → simulated API delay → `applyFilters()` → `displayCafes()`
2. **Filter Flow**: Checkbox changes → `applyFilters()` → filter logic → `displayCafes()`
3. **Rendering**: `displayCafes()` → `createCafeCard()` → DOM manipulation

#### Event Handling
- Event listeners attached in `DOMContentLoaded` for initialization
- Search supports both button clicks and Enter key presses
- Filter checkboxes use change events for real-time filtering

### Core Functions Architecture

#### Search System (`handleSearch()`)
- Input validation and loading state management
- Simulates API call with 1.5s delay for demonstration
- Designed to easily integrate with real APIs (Google Places, Yelp, etc.)

#### Filtering System (`applyFilters()`)
- Supports multiple concurrent filters using array intersection logic
- Filters: WiFi availability, outdoor seating, parking
- Filters applied to `currentCafes` array, not original dataset

#### Rendering System (`displayCafes()`, `createCafeCard()`)
- Dynamic HTML generation with template literals
- Responsive card-based layout using CSS Grid
- Star rating system with Unicode characters
- Feature badges with semantic color coding

#### Utility Functions
- `generateStarRating()` - Converts numeric ratings to visual stars
- `getCurrentLocation()` - Prepared for geolocation integration
- `setLoading()` - Manages button state during async operations

### CSS Architecture

#### Design System
- Coffee-themed color palette: `#8B4513` (primary brown), `#D2691E` (accent orange)
- Consistent spacing using rem units
- Card-based layout with hover effects and shadows

#### Responsive Strategy
- Mobile-first approach with progressive enhancement
- Breakpoints: 768px (tablet), 480px (mobile)
- CSS Grid for cafe cards, Flexbox for smaller components
- Search container switches from horizontal to vertical on mobile

#### Component Styling
- `.cafe-card` - Main content cards with hover animations
- `.feature-badge` - Semantic badges for cafe amenities
- `.search-container` - Flexible search input and button layout
- `.filter-container` - Checkbox filter layout

## Development Guidelines

### Adding New Features

#### API Integration
Replace the simulated search in `handleSearch()`:
```javascript
// Current simulation at line 89-99
setTimeout(() => { ... }, 1500);

// Replace with real API call
fetch(`/api/cafes?location=${encodeURIComponent(location)}`)
  .then(response => response.json())
  .then(data => { ... });
```

#### New Cafe Data Fields
Extend the cafe object structure in `sampleCafes` array (lines 4-41):
- Add new properties to cafe objects
- Update `createCafeCard()` function (line 136) to display new fields
- Add corresponding filter logic in `applyFilters()` if needed

#### Additional Filters
1. Add new checkbox in `index.html` filters section
2. Cache DOM reference in initialization
3. Add filter logic to `applyFilters()` function
4. Update cafe data structure to include new filterable properties

### Browser Compatibility
- Modern JavaScript features (ES6+): template literals, arrow functions, const/let
- CSS Grid and Flexbox used extensively
- No transpilation or polyfills included
- Targets modern browsers (Chrome, Firefox, Safari, Edge)

### Performance Considerations
- DOM elements cached to avoid repeated queries
- Debouncing should be added for real-time search if implemented
- Image loading optimization needed when cafe photos are added
- Consider virtual scrolling for large cafe datasets

## Future Enhancement Areas

The codebase is structured for these planned improvements:
- **Map Integration**: `initializeMap()` function prepared (line 225)
- **Geolocation**: `getCurrentLocation()` utility ready (line 203)
- **Cafe Details Modal**: `showCafeDetails()` function outlined (line 231)
- **Local Storage**: Easy to add for saving user preferences
- **API Integration**: Search function designed for easy API swapping