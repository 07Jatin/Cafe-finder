# Cafe Finder

A simple, responsive web application to help you discover the perfect coffee spots in your area. Built with vanilla HTML, CSS, and JavaScript.

## Features

- 🔍 **Location-based Search**: Find cafes near any location
- 🏷️ **Smart Filters**: Filter by WiFi availability, outdoor seating, and parking
- ⭐ **Ratings & Reviews**: View cafe ratings and descriptions
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, coffee-themed design with smooth animations

## Demo

Open `index.html` in your web browser to try the application. The app currently uses sample data to demonstrate functionality.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installation required - it's a client-side web application

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd cafe-finder
   ```

2. Open the application:
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. Visit `http://localhost:8000` (if using a local server)

## Project Structure

```
cafe-finder/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Features in Detail

### Search Functionality
- Enter any location to find nearby cafes
- Real-time search with loading animations
- Enter key support for quick searching

### Filtering System
- **WiFi Available**: Find cafes with reliable internet
- **Outdoor Seating**: Perfect for nice weather
- **Parking Available**: Easy access with parking facilities
- Filters work in combination for precise results

### Cafe Information
Each cafe displays:
- Name and star rating
- Full address
- Distance from search location
- Description and atmosphere details
- Available amenities as badges

## Customization

### Adding Your Own Cafe Data

The sample data is stored in `script.js`. To add your own cafes, modify the `sampleCafes` array:

```javascript
const sampleCafes = [
    {
        id: 1,
        name: "Your Cafe Name",
        address: "123 Your Street, Your City",
        rating: 4.5,
        features: ["wifi", "outdoor", "parking"], // Available: wifi, outdoor, parking
        description: "Description of your cafe...",
        distance: "0.3 miles"
    }
    // Add more cafes...
];
```

### Styling

The color scheme uses coffee-inspired browns (#8B4513, #D2691E). To customize:

1. Open `styles.css`
2. Modify the CSS custom properties or color values
3. The design is fully responsive and uses CSS Grid and Flexbox

## Future Enhancements

This project is designed to be easily extended. Planned features include:

- 🗺️ **Map Integration**: Google Maps or OpenStreetMap integration
- 📍 **Geolocation**: Automatic location detection
- 🔗 **API Integration**: Connect to real cafe data sources
- 💾 **Local Storage**: Save favorite cafes
- 🔍 **Advanced Filters**: Hours, price range, cafe type
- 📝 **User Reviews**: Allow users to add reviews

## API Integration

To connect to real cafe data, you would typically integrate with services like:
- Google Places API
- Yelp Fusion API
- Foursquare Places API

The `handleSearch()` function in `script.js` is set up to easily accommodate API calls.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Coffee cup icon inspiration from the coffee community
- Responsive design patterns from modern web standards
- Sample cafe data created for demonstration purposes

---

**Happy cafe hunting! ☕**