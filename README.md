# 🍔 FoodFlick — Online Food Ordering & Restaurant Platform

A modern, responsive, and feature-rich food ordering web application built with **React 19**, **Redux Toolkit**, **Tailwind CSS v4**, and **Vite**.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.13-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

---

## 🌟 Key Features

### 1. 🔐 User Authentication & Protected Routes
- **Secure Registration & Login** with client-side form validation (Formik & Yup).
- **Persistent User Sessions**: Retains authentication state across page reloads using `localStorage` and Redux.
- **Route Guards**: `ProtectedRoute` prevents unauthorized access to app features, and `PublicRoutes` handles auth redirections.

### 2. 🏪 Enhanced Restaurant Discovery (`/restaurants`)
- **Smart Filtering**: Filter by cuisine, minimum rating (3.5+ to 4.5+), delivery speed (<20m to <40m), and cost-for-two.
- **Dietary Toggles**: Quick toggle between *All*, *Pure Veg*, and *Non-Veg*.
- **Flexible Layouts**: Switch dynamically between **Grid View** and **Compact List View**.
- **Quick Badges**: 1-tap pills for *Great Offers*, *Top Rated (4.5+)*, and *Under 25 mins*.
- **Interactive Wishlisting**: Save favorite dining spots with instant Redux state synchronization and toast feedback.

### 3. 🍕 Interactive Menu & Ordering (`/menu`)
- Categorized exploration (Pizza, Burgers, Biryani, Chinese, Desserts, Healthy, South Indian, Drinks).
- Instant live search by dish name, cuisine, or restaurant name.
- Direct **Add to Cart** with real-time quantity steppers `[-] [qty] [+]`.
- Bottom floating cart indicator for rapid checkout when browsing items.

### 4. 🛒 Full E-Commerce Cart & Checkout (`/cart`)
- **Global Cart via Redux Toolkit**: Add, remove, and adjust item quantities from any page.
- **Live Navbar Badge**: Instant badge update displaying the total items in the cart.
- **Coupon Engine**: Apply promotional coupons (`FLICK50` for 50% off, `FREEDEL` for free delivery, `TASTY100` for flat ₹100 off).
- **Dynamic Bill Breakdown**: Calculates items subtotal, delivery charges (free over ₹499), platform packaging fee, and taxes.
- **Delivery Instructions**: Add drop-off notes (*"Avoid ringing bell"*, *"Leave at door"*, etc.).
- **Order Placement Simulation**: Interactive checkout modal with unique Order ID and tracking navigation.

### 5. ❤️ Wishlist & Favorites System (`/wishlist`)
- Save both **restaurants** and **individual dishes**.
- Filter items by *All*, *Restaurants*, and *Dishes*.
- 1-click **Add to Cart** directly from the wishlist.
- Persistent saved items stored in `localStorage`.

### 6. 🏷️ Offers & Deals (`/offers`)
- Curated discount coupons with 1-click clipboard copy (`FOODFLICK50`, `TASTY100`, `FREEDEL`, etc.).
- Trending restaurant deals and promotional partner offers.

---

## 📁 Project Architecture

```
src/
├── components/             # UI Components & Page Views
│   ├── About.jsx           # About page
│   ├── AuthInitializer.jsx # Session rehydration on app boot
│   ├── Cart.jsx            # Cart & checkout management
│   ├── Contact.jsx         # Contact page
│   ├── Footer.jsx          # App footer
│   ├── Home.jsx            # Landing / Dashboard page
│   ├── LoginForm.jsx       # Login component
│   ├── Menu.jsx            # Food menu catalog
│   ├── Navbar.jsx          # Responsive navbar with live Redux badges
│   ├── Offer.jsx           # Promo codes & discount vouchers
│   ├── Order.jsx           # Order tracking & history
│   ├── Register.jsx        # User signup form
│   ├── Restaurant.jsx      # Enhanced restaurant discovery & filter page
│   └── Wishlist.jsx        # Saved restaurants & food items
├── features/               # Redux Toolkit Slices
│   ├── AuthFeatures/
│   │   └── authSlice.jsx   # Auth state (login, logout, session)
│   ├── CartFeatures/
│   │   └── cartSlice.jsx   # Shopping cart state & selectors
│   └── WishlistFeatures/
│       └── wishlistSlice.jsx # Wishlist state & selectors
├── hooks/
│   └── useAuth.js          # Authentication custom hook
├── layout/
│   ├── AuthLayout.jsx      # Layout for authentication pages
│   └── Layout.jsx          # Core layout wrapper with Navbar & Footer
├── router/
│   ├── ProtectedRoute.jsx  # Route guard for authenticated users
│   ├── PublicRoutes.jsx    # Route wrapper for public auth pages
│   ├── Router.jsx          # React Router 7 route definitions
│   └── routespaths.js      # Centralized route constants
├── services/
│   └── authService.jsx     # Local storage mock auth API
├── store/
│   └── store.jsx           # Redux configureStore
└── index.css               # Tailwind CSS v4 styling rules
```

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Bundler & Dev Server** | [Vite 7](https://vitejs.dev/) |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) + [React Redux](https://react-redux.js.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Form Handling & Validation** | [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup) |
| **Code Quality** | ESLint 9 |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `yarn` or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/foodflick.git
   cd foodflick
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Run ESLint checks:**
   ```bash
   npm run lint
   ```

---

## 🧪 Available Coupon Codes (Testing)

Test these coupons during checkout on the `/cart` page:
- `FLICK50` — **50% OFF** (up to ₹100 on orders above ₹199)
- `FREEDEL` — **FREE Delivery** (waives ₹35 delivery fee)
- `TASTY100` — **Flat ₹100 OFF** (on orders above ₹399)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
