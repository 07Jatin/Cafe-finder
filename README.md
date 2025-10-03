# ☕ Cafe Finder

> **Discover the perfect coffee spots across Indian cities**

A modern, responsive web application that helps you find the best cafes in major Indian cities. Built with vanilla HTML, CSS, and JavaScript, featuring location-based search, smart filtering, and an animated coffee-themed interface.

## 🌟 Features

- 🇮🇳 **Indian Cities Focus**: Curated cafe data for Mumbai, Bangalore, Delhi, Chennai, Kolkata, and Pune
- 🔍 **Smart Location Search**: Find cafes based on city names with intelligent matching
- 🏷️ **Advanced Filters**: Filter by WiFi availability, outdoor seating, and parking
- ⭐ **Ratings & Reviews**: View authentic cafe ratings and detailed descriptions
- 📱 **Fully Responsive**: Works seamlessly across desktop, tablet, and mobile devices
- ☕ **Animated Logo**: Beautiful CSS-only coffee cup with steaming animation
- 🎨 **Modern UI**: Coffee-themed design with smooth animations and hover effects

## 🚀 Live Demo

**Try it now:** Simply clone and open `index.html` in your browser!

```bash
git clone https://github.com/07Jatin/cafe-finder.git
cd cafe-finder
# Open index.html in your browser
```

## 🏗️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, Custom Animations
- **Features**: Responsive Design, Local Data Processing
- **No Dependencies**: Pure client-side application

## 📱 Screenshots

### Desktop View
- Clean, professional interface with animated coffee cup logo
- Grid-based cafe cards with hover effects
- Intuitive search and filtering system

### Mobile View
- Fully responsive design that adapts to all screen sizes
- Touch-friendly interface elements
- Optimized layout for mobile browsing

## 🌆 Supported Cities

| City | Featured Cafes | Highlights |
|------|----------------|------------|
| **Mumbai** | Leopold Cafe, Prithvi Cafe, Cafe Mocha | Historic institutions & trendy Bandra spots |
| **Bangalore** | Third Wave Coffee, Toit Brewpub, Blue Tokai | Tech-friendly spaces & specialty roasters |
| **Delhi** | Cafe Turtle, Hauz Khas Social | Literary cafes & co-working spaces |
| **Chennai** | Amethyst Cafe, CCD Marina | Garden settings & beachside locations |
| **Kolkata** | Flurys, Coffee House | Colonial heritage & intellectual adda spots |
| **Pune** | German Bakery, Dario's | Student-friendly & European-style cafes |

## 🔧 Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Quick Start
1. **Clone the repository**
   ```bash
   git clone https://github.com/07Jatin/cafe-finder.git
   cd cafe-finder
   ```

2. **Run the application**
   ```bash
   # Option 1: Direct browser opening
   start index.html  # Windows
   open index.html   # macOS
   
   # Option 2: Local server (recommended for development)
   python -m http.server 8000  # Python 3
   # OR
   npx http-server  # Node.js
   ```

3. **Access the app**
   - Direct: Open `index.html` in your browser
   - Server: Visit `http://localhost:8000`

## 📁 Project Structure

```
cafe-finder/
├── index.html          # Main HTML structure with semantic markup
├── styles.css          # CSS with animations, grid layouts & responsiveness
├── script.js           # JavaScript with location-based search logic
├── DEVELOPMENT.md     # Development guide and architectural overview
├── README.md          # Project documentation
└── .gitignore         # Git ignore file
```

## 🎯 How to Use

1. **Search by City**: Type any Indian city name (e.g., "Mumbai", "Bangalore")
2. **Apply Filters**: Use checkboxes to filter by WiFi, outdoor seating, or parking
3. **Browse Results**: View cafe cards with ratings, addresses, and descriptions
4. **Responsive Experience**: Resize your window to see mobile-optimized layout

## 🛠️ Customization

### Adding New Cities
Extend the `locationBasedCafes` object in `script.js`:

```javascript
'your-city': [
    {
        id: 20,
        name: "Your Cafe Name",
        address: "123 Your Street, Your City",
        rating: 4.5,
        features: ["wifi", "outdoor", "parking"],
        description: "Description of your cafe...",
        distance: "0.3 km"
    }
]
```

### Styling Customization
Modify CSS variables in `styles.css`:
- Primary color: `#8B4513` (Coffee brown)
- Accent color: `#D2691E` (Warm orange)
- Responsive breakpoints: 768px, 480px

## 🚀 Future Enhancements

- [ ] **Real API Integration**: Google Places, Zomato API
- [ ] **Interactive Maps**: Location visualization
- [ ] **User Reviews**: Community-driven content
- [ ] **Favorite System**: Local storage for preferences
- [ ] **Advanced Filters**: Price range, cuisine type, opening hours
- [ ] **Progressive Web App**: Offline functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Jatin Kumar** ([@07Jatin](https://github.com/07Jatin))

## 🙏 Acknowledgments

- Inspired by the vibrant cafe culture of Indian cities
- CSS animations inspired by coffee brewing aesthetics
- Responsive design patterns from modern web standards
- Sample data curated from popular Indian cafe destinations

---

⭐ **Star this repository if you found it helpful!**

☕ **Happy cafe hunting across India!**
