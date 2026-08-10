#!/bin/bash

# Create root src directory
mkdir -p src

# Create assets and images
mkdir -p src/assets/images

# Create components and all component files
mkdir -p src/components
touch src/components/Navbar.jsx
touch src/components/Footer.jsx
touch src/components/ProductCard.jsx
touch src/components/ProductGrid.jsx
touch src/components/CategoryCard.jsx
touch src/components/SearchBar.jsx
touch src/components/PriceFilter.jsx
touch src/components/CategoryFilter.jsx
touch src/components/CartItem.jsx
touch src/components/CartSummary.jsx
touch src/components/WishlistItem.jsx
touch src/components/CheckoutForm.jsx
touch src/components/OrderSummary.jsx
touch src/components/EmptyState.jsx

# Create pages and all page files
mkdir -p src/pages
touch src/pages/Home.jsx
touch src/pages/Products.jsx
touch src/pages/ProductDetails.jsx
touch src/pages/Cart.jsx
touch src/pages/Wishlist.jsx
touch src/pages/Checkout.jsx
touch src/pages/OrderSuccess.jsx

# Create redux and slices
mkdir -p src/redux/slices
touch src/redux/store.js
touch src/redux/slices/cartSlice.js
touch src/redux/slices/wishlistSlice.js

# Create hooks
mkdir -p src/hooks
touch src/hooks/useLocalStorage.js
touch src/hooks/useProducts.js

# Create data
mkdir -p src/data
touch src/data/products.js

# Create utils
mkdir -p src/utils
touch src/utils/storage.js

# Create theme
mkdir -p src/theme
touch src/theme/theme.js

# Create root files
touch src/App.jsx
touch src/main.jsx
touch src/index.css

echo "✅ Folder structure created successfully in ./src"