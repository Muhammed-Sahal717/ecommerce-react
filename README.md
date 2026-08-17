## Features

1. 🏠 **Home Page**
2. 🛍️ **Product Listing**
3. 📂 **Product Categories**
4. 🔍 **Product Search**
5. 🏷️ **Category Filter**
6. 💰 **Price Filter**
7. 📄 **Product Details Page**
8. 🛒 **Add to Cart**
9. ➕➖ **Increase / Decrease Quantity**
10. 🗑️ **Remove from Cart**
11. 🧮 **Cart Total Calculation**
12. ❤️ **Wishlist**
13. 📝 **Checkout Form**
14. 📦 **Order Summary**
15. 💾 **Store Cart & Wishlist using localStorage (SaveData)**

## Core Tech Stack

```md
- React
- JavaScript (ES6+)
- Vite
- Material UI (MUI)
- Redux Toolkit
- React Redux
- React Router DOM
- CSS
- localStorage
- Git & GitHub
```

## React Concepts & Tools

| Item                       | Where We Use                                                                 |
| -------------------------- | ---------------------------------------------------------------------------- |
| **Components**             | Navbar, Footer, ProductCard, ProductGrid, Filters, CartItem, etc.            |
| **Props**                  | Passing product data, prices, images, callbacks, and component configuration |
| **useState**               | Search, filters, forms, quantity, UI states                                  |
| **useEffect**              | Loading/saving data with localStorage and synchronizing state                |
| **useContext**             | Shared UI/app-level data where appropriate                                   |
| **useMemo**                | Optimizing filtered products and cart calculations                           |
| **useCallback**            | Optimizing frequently passed event handlers                                  |
| **useRef**                 | Form/input references and DOM interactions where needed                      |
| **Custom Hooks**           | Reusable logic such as localStorage and product filtering                    |
| **Redux Toolkit**          | Global cart, wishlist, and application state                                 |
| **Redux Slices**           | `cartSlice`, `wishlistSlice`, potentially `productSlice`                     |
| **Redux Actions**          | Add/remove/update cart items and wishlist items                              |
| **Redux Selectors**        | Reading cart items, totals, wishlist, etc.                                   |
| **React Router**           | Home, Products, Product Details, Cart, Wishlist, Checkout                    |
| **Dynamic Routes**         | Product details using `/products/:id`                                        |
| **Controlled Components**  | Search, filters, checkout form inputs                                        |
| **Conditional Rendering**  | Empty cart, empty wishlist, loading/error states                             |
| **List Rendering**         | Products, cart items, wishlist items, categories                             |
| **Event Handling**         | Search, filtering, quantity changes, cart actions, form submission           |
| **Form Validation**        | Checkout form validation                                                     |
| **localStorage**           | Persisting cart and wishlist                                                 |
| **Derived State**          | Cart subtotal, total items, total price, filtered products                   |
| **Lifting State Up**       | Sharing state between related components when Redux isn't needed             |
| **Material UI Components** | Buttons, Cards, TextFields, Selects, Dialogs, AppBar, Drawer, Grid, etc.     |
| **Material UI Theme**      | Global colors, typography, spacing, and component styling                    |
| **Reusable Components**    | Consistent UI across all pages                                               |

## Pages & Routes

| Page            | Route            | Purpose                                        |
| --------------- | ---------------- | ---------------------------------------------- |
| Home            | `/`              | Hero, categories, featured products            |
| Products        | `/products`      | All products, search, category & price filters |
| Product Details | `/products/:id`  | Individual product information                 |
| Cart            | `/cart`          | Cart items, quantity, remove, totals           |
| Wishlist        | `/wishlist`      | Saved products                                 |
| Checkout        | `/checkout`      | Customer details + order summary               |
| Order Success   | `/order-success` | Order confirmation                             |

---

## Components Structure

```
components/
├── Navbar
├── Footer
├── ProductCard
├── ProductGrid
├── CategoryCard
├── SearchBar
├── PriceFilter
├── CategoryFilter
├── CartItem
├── CartSummary
├── WishlistItem
├── CheckoutForm
├── OrderSummary
├── SaveData
└── EmptyState
```

## Redux Structure

```
redux/
├── store.js
└── slices/
    ├── cartSlice.js
    └── wishlistSlice.js
```

### Cart Slice

- `addToCart()`
- `removeFromCart()`
- `increaseQuantity()`
- `decreaseQuantity()`
- `clearCart()`
- `setCart()`

### Wishlist Slice

- `addToWishlist()`
- `removeFromWishlist()`
- `toggleWishlist()`
- `clearWishlist()`
- `setWishlist()`

---


## Data

```
data/
└── products.js
```

### Product Structure

```javascript
{
  id: 1,
  name: "Classic Double burger",
  category: "Burgers",
  price: 299,
  image: "...",
  description: "...",
  rating: 4.8
}
```



---

## Final Folder Structure

```
src/
├── assets/
│   └── images/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── CategoryCard.jsx
│   ├── SearchBar.jsx
│   ├── PriceFilter.jsx
│   ├── CategoryFilter.jsx
│   ├── CartItem.jsx
│   ├── CartSummary.jsx
│   ├── WishlistItem.jsx
│   ├── CheckoutForm.jsx
│   ├── OrderSummary.jsx
│   ├── SaveData.jsx
│   └── EmptyState.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   ├── Checkout.jsx
│   └── OrderSuccess.jsx
│
├── redux/
│   ├── store.js
│   └── slices/
│       ├── cartSlice.js
│       └── wishlistSlice.js
│
├── hooks/
│   ├── useLocalStorage.js
│   └── useProducts.js
│
├── data/
│   └── products.js
│
├── theme/
│   └── theme.js
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```
