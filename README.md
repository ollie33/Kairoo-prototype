# Kairoo - Registration & Setup Page

## Project Overview

Kairoo is a social matching application. This page is the registration and setup page that users see when they first enter the app. Users can create their profile and take a personality test to prepare for subsequent matching features.

## Features

### 🎨 Design Style
- **Primary Color**: Orange (#ff6b35)
- **Background Color**: Cream white (#faf8f5)
- **Font**: Inter font family, clean and bright
- **Responsive Design**: Optimized for 430x932 mobile screen

### 📱 Page Structure
1. **Status Bar**: Displays time, signal, WiFi, battery status
2. **Header**: App name and tagline
3. **Registration Form**: Personal information input
4. **Personality Test**: Swipe-based Q&A
5. **Completion Page**: Setup completion confirmation
6. **Navigation Bar**: Bottom navigation bar

### ✨ Main Features

#### Registration Form
- Name, age, gender input
- Interests and hobbies description
- Profile photo upload (with preview and remove support)
- Form validation

#### Personality Test
- 10 carefully designed statements
- Swipe left for "Disagree", swipe right for "Agree"
- Real-time progress bar display
- Support for touch and mouse operations

#### Interactive Experience
- Smooth animation effects
- Intuitive swipe operations
- Real-time visual feedback
- Form validation prompts

## Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic tag structure
- **CSS3**: Modern styling and animations
- **JavaScript**: Interactive functionality and logic

### Key Features
- Responsive design
- Touch gesture support
- Local storage
- Form validation
- Animation effects

## File Structure

```
Kairoo/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript logic
└── README.md           # Project documentation
```

## Usage Instructions

### 1. Open the Page
Open `index.html` directly in your browser

### 2. Fill Out Registration Form
- Enter name (required)
- Enter age (18-100, required)
- Select gender (required)
- Describe interests and hobbies (optional)
- Upload profile photo (optional)

### 3. Take Personality Test
- Click "Start Personality Test" button
- Read each statement carefully
- Swipe left for "Disagree"
- Swipe right for "Agree"
- Observe progress bar changes

### 4. Complete Setup
- After completing all questions, completion page will be displayed
- Click "Get Started" to enter main application

## Operation Methods

### Desktop Version
- Use mouse to drag question cards
- Drag left = Disagree
- Drag right = Agree

### Mobile Version
- Use finger to swipe question cards
- Swipe left = Disagree
- Swipe right = Agree

## Customization

### Modify Color Theme
In `styles.css`, modify the following variables:
```css
/* Primary color */
color: #ff6b35;

/* Background color */
background-color: #faf8f5;
```

### Modify Question Content
In `script.js`, edit the `personalityQuestions` array:
```javascript
const personalityQuestions = [
    "Your question 1",
    "Your question 2",
    // ... more questions
];
```

### Adjust Screen Size
In `styles.css`, modify container width:
```css
.container {
    max-width: 430px; /* Change to target width */
}
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Important Notes

1. Photo upload functionality only supports local preview, real app needs backend API
2. User data is currently stored in browser local storage
3. Navigation functionality is currently for demonstration only, needs to connect to actual pages
4. Recommended to test on mobile or in developer tools mobile device mode

## Future Improvements

- [ ] Add backend API integration
- [ ] Implement real photo upload functionality
- [ ] Add more personality test question types
- [ ] Implement user profile editing functionality
- [ ] Add multi-language support
- [ ] Optimize animation performance
- [ ] Add accessibility feature support

## License

This project is for learning and demonstration purposes only. 