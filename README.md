# 🍔 Cafe Finder

A modern, responsive web application for discovering and exploring cafes across Indian cities. Built with vanilla JavaScript, featuring a clean UI and a simple JSON Server API backend.

## ✨ Features

### Core Functionality
- **City-based Search**: Find cafes by entering city names (Delhi, Mumbai, Bangalore, Chennai, Kolkata, Pune)
- **Real-time Filtering**: Filter cafes by WiFi, Outdoor Seating, and Parking
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Loading Animations**: Engaging loading messages during data fetching

### Enhanced Cafe Details
- **Detailed Cafe Information**: Click "View More Info" to see comprehensive cafe details including:
  - Contact information (phone number)
  - Opening hours
  - Popular menu items
  - Customer reviews
  - Full feature list with icons
- **Modal Interface**: Clean, accessible modal popup for detailed information
- **Dynamic Content**: Only displays available information for each cafe

### API Integration
- **JSON Server Backend**: Simple REST API serving cafe data
- **City Filtering**: Automatic filtering by city parameter
- **CORS Enabled**: Ready for frontend integration

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Icons**: Google Fonts (Inter), Emoji icons
- **Backend**: JSON Server (for development)
- **Build Tools**: npm

## 📁 Project Structure

```
cafe-finder/
├── index.html          # Main application file
├── db.json            # Cafe database (JSON Server)
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone or download the project**
   ```bash
   # If cloning from git
   git clone <repository-url>
   cd cafe-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server API**
   ```bash
   npm start
   ```
   This will start the JSON Server on `http://localhost:3000`

4. **Open the application**
   - Open `index.html` in your web browser, or
   - Use a local server: `python -m http.server 8000` and visit `http://localhost:8000`

## 📖 Usage

### Basic Usage
1. Enter a city name in the search box (e.g., "Mumbai", "Delhi", "Bangalore")
2. Browse the displayed cafe cards
3. Use filters to narrow down results by WiFi, Outdoor Seating, or Parking
4. Click "View More Info" on any cafe card to see detailed information

### API Usage
The JSON Server provides the following endpoints:

- **Get all cafes**: `GET http://localhost:3000/cafes`
- **Filter by city**: `GET http://localhost:3000/cafes?city=Mumbai`
- **Get specific cafe**: `GET http://localhost:3000/cafes/1`

### Sample API Response
```json
{
  "id": 1,
  "name": "Chai Point",
  "address": "MG Road, Central Delhi",
  "city": "Delhi",
  "rating": 4.5,
  "features": ["wifi", "outdoor", "parking"],
  "description": "Modern Indian tea house serving authentic chai and coffee blends.",
  "distance": "0.2 km",
  "cuisine": "Tea, Coffee",
  "delivery_time": "20 mins",
  "phone": "+91-9876543210",
  "opening_hours": "7:00 AM - 11:00 PM",
  "menu": ["Masala Chai", "Filter Coffee", "Sandwiches", "Pastries"],
  "reviews": ["Great ambiance and excellent chai!", "Perfect for work meetings."]
}
```

## 🎨 UI Features

- **Modern Design**: Clean, card-based layout with hover effects
- **Color Scheme**: Red accent color (#DC2626) with cream background
- **Typography**: Inter font family for modern readability
- **Animations**: Smooth transitions and loading states
- **Accessibility**: Proper semantic HTML and keyboard navigation

## 🔧 Customization

### Adding New Cafes
Edit `db.json` to add new cafe entries. Each cafe object should include:

```json
{
  "id": 21,
  "name": "Your Cafe Name",
  "address": "Full Address",
  "city": "City Name",
  "rating": 4.5,
  "features": ["wifi", "outdoor", "parking"],
  "description": "Brief description",
  "cuisine": "Cuisine type",
  "delivery_time": "X mins",
  "phone": "+91-XXXXXXXXXX",           // Optional
  "opening_hours": "HH:MM AM - HH:MM PM", // Optional
  "menu": ["Item 1", "Item 2"],        // Optional
  "reviews": ["Review 1", "Review 2"]  // Optional
}
```

### Modifying Features
Update the `features` array in `index.html` to add new filter options:

```javascript
// In the createCafeCard function, add new feature cases
switch(f) {
    case 'wifi': icon = '📶'; color = 'text-blue-500'; break;
    case 'outdoor': icon = '🌳'; color = 'text-green-500'; break;
    case 'parking': icon = '🅿️'; color = 'text-yellow-500'; break;
    case 'pet-friendly': icon = '🐕'; color = 'text-green-600'; break; // New feature
    default: icon = '✨'; color = 'text-gray-500';
}
```

## 🌟 Key Improvements

### From Previous Version
- **Removed Firebase Dependency**: Replaced with simple JSON Server for easier development
- **Enhanced Data Model**: Added detailed cafe information (phone, hours, menu, reviews)
- **Improved UX**: Added modal-based detailed view instead of expanding cards
- **Better Performance**: Lightweight API with no authentication overhead
- **Easier Development**: No complex setup required, works out of the box

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or issues:
- Check the API is running on port 3000
- Ensure `db.json` is properly formatted
- Verify browser console for JavaScript errors

---

**Happy cafe hunting! ☕**
