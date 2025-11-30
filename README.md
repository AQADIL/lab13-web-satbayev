# 🚀 MarlenEDU - Bootstrap 5.3 Education Platform

<div align="center">

![MarlenEDU Logo](https://img.shields.io/badge/MarlenEDU-Education%20Platform-4F46E5?style=for-the-badge&logo=bootstrap&logoColor=white)

**A modern, fully responsive education platform built with Bootstrap 5.3**

[![GitHub stars](https://img.shields.io/github/stars/AQADIL/lab13-web-satbayev.svg?style=social&logo=github)](https://github.com/AQADIL/lab13-web-satbayev)
[![GitHub forks](https://img.shields.io/github/forks/AQADIL/lab13-web-satbayev.svg?style=social&logo=github)](https://github.com/AQADIL/lab13-web-satbayev)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://aqadil.github.io/lab13-web-satbayev/)

</div>

## 📖 About

MarlenEDU is a comprehensive educational platform showcasing the power of Bootstrap 5.3. This project demonstrates advanced Bootstrap components and responsive design patterns for modern educational websites.

### ✨ Key Features

- 🎨 **Modern Design** - Clean, professional interface with gradient backgrounds
- 📱 **Fully Responsive** - Perfect adaptation across all device sizes
- 🎯 **Bootstrap Components** - All required Bootstrap 5.3 components implemented
- 🔄 **Interactive Elements** - Carousels, modals, accordions, tabs, and toasts
- ⚡ **Performance** - Optimized loading with CDN resources
- 🌍 **Kazakh Localization** - Content in Kazakh language

## 🛠️ Technical Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Bootstrap** | 5.3.0 | CSS Framework & Components |
| **Bootstrap Icons** | 1.11.0 | Icon Library |
| **HTML5** | - | Semantic Structure |
| **CSS3** | - | Custom Styling & Media Queries |
| **JavaScript** | ES6+ | Interactive Functionality |

## 🏗️ Architecture

```
lab13-web-satbayev/
├── 📄 index.html              # Main HTML file
├── 📁 assets/                # Static resources
│   ├── css/
│   │   └── style.css         # Custom styles & media queries
│   └── js/
│       └── main.js           # JavaScript functionality
└── 📄 README.md              # This documentation
```

## 🎯 Bootstrap Components Implemented

### ✅ **Required Components**
- [x] **Navbar** - Fixed navigation with responsive collapse
- [x] **Carousel** - Hero section slider with captions
- [x] **Collapse** - Navbar mobile menu
- [x] **Accordion** - FAQ section with expandable items
- [x] **Badge** - Course tags and certifications
- [x] **Buttons** - Various button styles and states
- [x] **Modal** - Course enrollment and details dialogs
- [x] **Card** - Course and program displays
- [x] **Navs & Tabs** - Program level switching
- [x] **Toasts** - Success notifications

### 📱 **Responsive Breakpoints**
- 📱 **Mobile** (< 576px) - Optimized for touch devices
- 💻 **Tablet** (576px - 768px) - Balanced layout
- 🖥️ **Desktop** (768px - 992px) - Enhanced features
- 🖥️ **Large Desktop** (> 992px) - Full experience

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds** - Dynamic hero section backgrounds
- **Card Hover Effects** - Smooth elevation and shadow transitions
- **Toast Notifications** - Non-intrusive success messages
- **Modal Dialogs** - Course enrollment and information displays
- **Badge System** - Technology tags and certifications

### Responsive Design
- **Mobile-First Approach** - Progressive enhancement
- **Flexible Grid System** - Bootstrap's responsive grid
- **Adaptive Typography** - Scalable font sizes
- **Touch-Friendly Interface** - Optimized for mobile interactions

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/AQADIL/lab13-web-satbayev.git
   cd lab13-web-satbayev
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your favorite browser
   open index.html
   ```

3. **Explore the platform**
   - Navigate through different sections
   - Test responsive design on various devices
   - Interact with Bootstrap components
   - Try course enrollment and details

## 🎮 Interactive Features

### Hero Carousel
- **Auto-play** with 5-second intervals
- **Manual navigation** with controls
- **Caption animations** and call-to-action buttons
- **Responsive sizing** for all devices

### Course Cards
- **Hover effects** with elevation and shadows
- **Badge system** for technology tags
- **Modal integration** for detailed information
- **Grid layout** with responsive columns

### FAQ Accordion
- **Expandable items** with smooth animations
- **Icon indicators** for expanded/collapsed states
- **Single item expansion** behavior
- **Mobile-friendly** touch targets

### Program Tabs
- **Tab navigation** for different skill levels
- **Content switching** without page reload
- **Active state indicators**
- **Responsive tab layout**

### Modals & Toasts
- **Enrollment modal** with form validation
- **Course details modal** with rich content
- **Toast notifications** for user feedback
- **Backdrop and escape key** support

## 📱 Mobile Optimization

### Touch Interactions
- **Larger touch targets** for buttons and links
- **Swipe-friendly carousel** controls
- **Responsive navigation** with hamburger menu
- **Optimized form inputs** for mobile keyboards

### Performance
- **Bootstrap CDN** for fast loading
- **Optimized images** and assets
- **Minimal JavaScript** for better performance
- **CSS media queries** for responsive design

## 🎨 Custom Styling

### CSS Structure
```css
/* Hero Section Styles */
.hero-section { /* Full viewport height */ }
.carousel-item { /* Gradient backgrounds */ }

/* Component Enhancements */
.feature-card { /* Hover animations */ }
.accordion-button { /* Focus states */ }

/* Responsive Utilities */
@media (max-width: 768px) { /* Tablet styles */ }
@media (max-width: 576px) { /* Mobile styles */ }
```

### Color Scheme
- **Primary**: Bootstrap's default blue (#0d6efd)
- **Success**: Green for positive actions (#198754)
- **Warning**: Amber for attention (#ffc107)
- **Danger**: Red for important actions (#dc3545)
- **Gradients**: Custom gradients for hero sections

## 🔧 Customization

### Adding New Courses
1. Update the `courses` object in `main.js`
2. Add course cards to the HTML grid
3. Update badge categories if needed
4. Test responsive behavior

### Modifying Colors
Edit CSS variables in `assets/css/style.css`:
```css
.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
```

### Adding New Sections
1. Create HTML structure with Bootstrap grid
2. Add responsive classes
3. Implement JavaScript interactions if needed
4. Add media queries for mobile optimization

## 🌟 Highlights

- ⚡ **Bootstrap 5.3** - Latest Bootstrap features
- 🎯 **Component Coverage** - All required components
- 📱 **Responsive Design** - Perfect mobile experience
- 🎨 **Modern UI** - Clean, professional design
- 🌍 **Localization** - Kazakh language support
- 🔧 **Modular Structure** - Organized code architecture

## 🧪 Testing Checklist

### Manual Testing
- [ ] Navigation works on all devices
- [ ] Carousel auto-play and manual controls
- [ ] Accordion expand/collapse functionality
- [ ] Tab switching works correctly
- [ ] Modal dialogs open and close properly
- [ ] Toast notifications display correctly
- [ ] Form validation in enrollment modal
- [ ] Responsive breakpoints trigger correctly

### Cross-Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Contribution Ideas
- Add new Bootstrap components
- Improve responsive design
- Add animations and transitions
- Enhance accessibility features
- Add dark mode support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Platform**: MarlenEDU
- **Email**: info@marlenedu.kz
- **Website**: [marlenedu.kz](https://marlenedu.kz)
- **Location**: Almaty, Kazakhstan

---

<div align="center">

**⭐ Star this repository if you find it useful!**

Built with ❤️ using Bootstrap 5.3

</div>
