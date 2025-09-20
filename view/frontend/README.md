# QSolve Frontend

A production-ready React frontend built with Vite, featuring modern performance optimizations and a clean architecture.

## 🚀 Features

- **React 18** with concurrent features
- **Vite** for lightning-fast development and optimized builds
- **React Router DOM** with lazy loading and route-based code splitting
- **React Query** for efficient data fetching and caching
- **Progressive Web App** support with offline capabilities
- **Performance optimized** with lazy loading, prefetching, and bundle analysis

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── LoadingSpinner.jsx
│   └── ErrorBoundary.jsx
├── pages/              # Page components with lazy loading
│   ├── Home.jsx
│   ├── About.jsx
│   └── Product.jsx
├── hooks/              # Custom React Query hooks
│   └── useProducts.js
├── App.jsx             # Main app component with routing
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Analyze bundle size
npm run analyze
```

## 🌐 Available Routes

- `/` - Home page with course selection
- `/about` - About page with QSOLVE branding
- `/product` - Product management page

## ⚡ Performance Features

### Code Splitting
- Routes are lazy-loaded using React.lazy
- Route chunks are prefetched on navigation hover
- Vendor libraries are split into separate chunks

### Caching Strategy
- React Query with stale-while-revalidate
- 5-minute stale time for queries
- 10-minute cache time
- Background refetching disabled for better performance

### Image Optimization
- Lazy loading with `loading="lazy"`
- Async decoding with `decoding="async"`
- Optimized for Core Web Vitals

### Font Loading
- Preconnect to Google Fonts
- Font-display: swap for better performance
- System font fallbacks

### Bundle Optimization
- Manual chunks for vendor libraries
- Terser minification with console/debugger removal
- Source maps for debugging

## 📱 PWA Features

- Service worker with Workbox
- Offline caching for API responses
- Auto-update on new deployments
- Fast reload capabilities

## 🔧 Configuration

### Vite Config
- React plugin for JSX support
- PWA plugin for offline capabilities
- Bundle analyzer for optimization insights
- Manual chunks for better caching

### React Query Setup
- Optimized default options
- Smart retry logic
- Background refetching control

## 🚀 Deployment

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

### Environment Variables
Create a `.env` file for environment-specific configurations:

```env
VITE_API_BASE_URL=https://your-api.com
VITE_APP_TITLE=QSolve Frontend
```

## 📊 Bundle Analysis

Run `npm run analyze` to see bundle composition and identify optimization opportunities.

## 🔍 Browser Support

- Modern browsers with ES2020 support
- Progressive enhancement for older browsers
- PWA support for compatible browsers

## 📝 Development Notes

- All routes use lazy loading for optimal performance
- Error boundaries prevent app crashes
- Loading states provide smooth user experience
- Responsive design works on all screen sizes

## 🤝 Contributing

1. Follow the existing code style
2. Use ESLint for code quality
3. Test on multiple browsers
4. Optimize for performance

## 📄 License

This project is part of the QSolve application suite.
