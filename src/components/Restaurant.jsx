import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Search,
  MapPin,
  Star,
  Clock3,
  Heart,
  SlidersHorizontal,
  ChevronDown,
  X,
  Bike,
  UtensilsCrossed,
  Flame,
  BadgePercent,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  LayoutGrid,
  List,
  ShieldCheck,
  Check,
} from "lucide-react";

import {
  toggleWishlist,
  selectWishlistItems,
} from "../features/WishlistFeatures/wishlistSlice";
import ROUTES from "../router/routespaths";

// =========================================================
// RESTAURANTS DATA
// =========================================================

const restaurantsData = [
  {
    id: 1,
    name: "The Food Factory",
    cuisine: ["North Indian", "Chinese", "Fast Food"],
    category: "Indian",
    rating: 4.8,
    reviews: 2450,
    time: 25,
    distance: "1.4 km",
    priceForTwo: 450,
    offer: "50% OFF up to ₹100",
    promoted: true,
    isVeg: false,
    featuredDish: "Paneer Tikka Lababdar",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Urban Tadka",
    cuisine: ["Indian", "Punjabi", "Thali"],
    category: "Indian",
    rating: 4.7,
    reviews: 1820,
    time: 30,
    distance: "2.1 km",
    priceForTwo: 500,
    offer: "20% OFF",
    promoted: false,
    isVeg: true,
    featuredDish: "Royal Amritsari Thali",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Pizza Corner",
    cuisine: ["Pizza", "Italian", "Beverages"],
    category: "Pizza",
    rating: 4.6,
    reviews: 3210,
    time: 20,
    distance: "1.0 km",
    priceForTwo: 400,
    offer: "FREE Garlic Bread",
    promoted: true,
    isVeg: true,
    featuredDish: "Signature 4-Cheese Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Burger House",
    cuisine: ["Burgers", "Fast Food", "American"],
    category: "Burgers",
    rating: 4.7,
    reviews: 2980,
    time: 22,
    distance: "1.8 km",
    priceForTwo: 350,
    offer: "Buy 1 Get 1 Free",
    promoted: false,
    isVeg: false,
    featuredDish: "Smoked Bacon BBQ Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Biryani Palace",
    cuisine: ["Biryani", "Mughlai", "North Indian"],
    category: "Biryani",
    rating: 4.9,
    reviews: 4120,
    time: 32,
    distance: "2.8 km",
    priceForTwo: 550,
    offer: "₹125 OFF above ₹499",
    promoted: true,
    isVeg: false,
    featuredDish: "Dum Pukht Handi Biryani",
    image:
      "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?a=1&b=1&s=612x612&w=0&k=20&c=a8j_p9BkWtsSX7WkcqeetigH8PYWXGayIGto9GiehNY=",
  },
  {
    id: 6,
    name: "Dragon Bowl",
    cuisine: ["Chinese", "Asian", "Noodles"],
    category: "Chinese",
    rating: 4.5,
    reviews: 1560,
    time: 27,
    distance: "2.4 km",
    priceForTwo: 400,
    offer: "30% OFF",
    promoted: false,
    isVeg: true,
    featuredDish: "Schezwan Sizzling Noodles",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Green Leaf Kitchen",
    cuisine: ["Healthy", "Salads", "Vegetarian"],
    category: "Healthy",
    rating: 4.6,
    reviews: 980,
    time: 24,
    distance: "1.2 km",
    priceForTwo: 450,
    offer: "20% OFF",
    promoted: false,
    isVeg: true,
    featuredDish: "Avocado Quinoa Power Bowl",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Sweet Cravings",
    cuisine: ["Desserts", "Ice Cream", "Bakery"],
    category: "Desserts",
    rating: 4.8,
    reviews: 2150,
    time: 18,
    distance: "0.8 km",
    priceForTwo: 300,
    offer: "FREE Delivery",
    promoted: false,
    isVeg: true,
    featuredDish: "Belgian Waffles with Nutella",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    name: "Royal Kitchen",
    cuisine: ["Gujarati", "Indian", "Thali"],
    category: "Indian",
    rating: 4.5,
    reviews: 1250,
    time: 35,
    distance: "3.1 km",
    priceForTwo: 400,
    offer: "15% OFF",
    promoted: false,
    isVeg: true,
    featuredDish: "Deluxe Kathiyawadi Thali",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
  },
];

// =========================================================
// CATEGORIES
// =========================================================

const categories = [
  { name: "All", label: "All Cuisines" },
  { name: "Indian", label: "Indian & Thalis" },
  { name: "Pizza", label: "Pizzas & Italian" },
  { name: "Burgers", label: "Burgers & Wraps" },
  { name: "Biryani", label: "Biryani & Mughlai" },
  { name: "Chinese", label: "Pan-Asian & Noodles" },
  { name: "Healthy", label: "Salads & Bowls" },
  { name: "Desserts", label: "Desserts & Bakes" },
];

const Restaurants = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [rating, setRating] = useState("All");
  const [deliveryTime, setDeliveryTime] = useState("All");
  const [maxPrice, setMaxPrice] = useState("All");
  const [dietary, setDietary] = useState("All"); // All, Veg, Non-Veg
  const [offersOnly, setOffersOnly] = useState(false);
  const [sortBy, setSortBy] = useState("Recommended");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [showFilters, setShowFilters] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2200);
  };

  const handleToggleWishlist = (restaurant) => {
    const isAlready = wishlistItems.some((item) => item.id === restaurant.id);
    dispatch(
      toggleWishlist({
        id: restaurant.id,
        name: restaurant.name,
        cuisine: restaurant.cuisine,
        category: restaurant.category,
        rating: restaurant.rating,
        reviews: restaurant.reviews,
        time: restaurant.time,
        priceForTwo: restaurant.priceForTwo,
        offer: restaurant.offer,
        isVeg: restaurant.isVeg,
        image: restaurant.image,
      })
    );
    showToast(
      isAlready
        ? `Removed "${restaurant.name}" from wishlist`
        : `Added "${restaurant.name}" to wishlist ❤️`
    );
  };

  // =========================================================
  // FILTERING LOGIC
  // =========================================================

  const filteredRestaurants = useMemo(() => {
    let result = [...restaurantsData];

    // Search
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(search) ||
          restaurant.cuisine.some((item) => item.toLowerCase().includes(search)) ||
          (restaurant.featuredDish &&
            restaurant.featuredDish.toLowerCase().includes(search))
      );
    }

    // Category
    if (category !== "All") {
      result = result.filter((restaurant) => restaurant.category === category);
    }

    // Rating
    if (rating !== "All") {
      result = result.filter((restaurant) => restaurant.rating >= Number(rating));
    }

    // Delivery Time
    if (deliveryTime !== "All") {
      result = result.filter((restaurant) => restaurant.time <= Number(deliveryTime));
    }

    // Price
    if (maxPrice !== "All") {
      result = result.filter(
        (restaurant) => restaurant.priceForTwo <= Number(maxPrice)
      );
    }

    // Dietary
    if (dietary === "Veg") {
      result = result.filter((restaurant) => restaurant.isVeg);
    } else if (dietary === "Non-Veg") {
      result = result.filter((restaurant) => !restaurant.isVeg);
    }

    // Offers
    if (offersOnly) {
      result = result.filter((restaurant) => Boolean(restaurant.offer));
    }

    // Sorting
    if (sortBy === "Rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Delivery Time") {
      result.sort((a, b) => a.time - b.time);
    } else if (sortBy === "Price Low to High") {
      result.sort((a, b) => a.priceForTwo - b.priceForTwo);
    } else if (sortBy === "Price High to Low") {
      result.sort((a, b) => b.priceForTwo - a.priceForTwo);
    }

    return result;
  }, [searchTerm, category, rating, deliveryTime, maxPrice, dietary, offersOnly, sortBy]);

  const resetFilters = () => {
    setCategory("All");
    setRating("All");
    setDeliveryTime("All");
    setMaxPrice("All");
    setDietary("All");
    setOffersOnly(false);
    setSortBy("Recommended");
    setSearchTerm("");
  };

  const activeFilterCount =
    (category !== "All" ? 1 : 0) +
    (rating !== "All" ? 1 : 0) +
    (deliveryTime !== "All" ? 1 : 0) +
    (maxPrice !== "All" ? 1 : 0) +
    (dietary !== "All" ? 1 : 0) +
    (offersOnly ? 1 : 0);

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-gray-950 px-5 py-3.5 text-xs font-bold text-white shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 size={16} className="text-green-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =====================================================
          HERO & SEARCH SECTION
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-green-50/70 via-white to-[#fafbfc] pb-12 pt-10 sm:pt-14">
        {/* Soft background accents */}
        <div className="pointer-events-none absolute -left-20 -top-24 h-96 w-96 rounded-full bg-green-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200/80 bg-green-100/60 px-3.5 py-1.5 text-xs font-extrabold text-green-800 shadow-sm">
              <Sparkles size={14} className="text-green-600" />
              <span>Curated Dining Experience</span>
            </div>

            <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:leading-tight">
              Top Rated Restaurants <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Delivered In Minutes
              </span>
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
              Explore beloved local kitchens, premium dining spots, and express cloud kitchens.
              Fresh taste, guaranteed hygiene, and lightning-fast delivery to your door.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 flex max-w-3xl flex-col gap-3 rounded-2xl bg-white p-2.5 shadow-xl shadow-green-900/5 ring-1 ring-gray-200/80 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-3 px-3 py-2">
              <Search size={20} className="shrink-0 text-green-600" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search restaurants, cuisines, or special dishes..."
                className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none placeholder:text-gray-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 border-t border-gray-100 pt-2 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-xs font-bold text-gray-700 transition hover:bg-green-50 hover:text-green-700 lg:hidden"
              >
                <SlidersHorizontal size={15} />
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </button>

              <button
                onClick={() => {}}
                className="flex shrink-0 items-center gap-1.5 rounded-xl bg-green-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-green-600/20 transition hover:bg-green-700"
              >
                <span>Find Food</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Quick Filter Highlights */}
          <div className="mt-5 flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">
              Quick Filters:
            </span>

            <button
              onClick={() => setOffersOnly(!offersOnly)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition flex items-center gap-1.5 ${
                offersOnly
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <BadgePercent size={13} />
              <span>Great Offers</span>
            </button>

            <button
              onClick={() => setRating(rating === "4.5" ? "All" : "4.5")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition flex items-center gap-1.5 ${
                rating === "4.5"
                  ? "bg-amber-500 text-white shadow-sm"
                  : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-amber-50 hover:text-amber-600"
              }`}
            >
              <Star size={13} className="fill-current" />
              <span>4.5+ Rating</span>
            </button>

            <button
              onClick={() => setDeliveryTime(deliveryTime === "25" ? "All" : "25")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition flex items-center gap-1.5 ${
                deliveryTime === "25"
                  ? "bg-green-600 text-white shadow-sm"
                  : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              <Clock3 size={13} />
              <span>Under 25 mins</span>
            </button>

            <button
              onClick={() => setDietary(dietary === "Veg" ? "All" : "Veg")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition flex items-center gap-1.5 ${
                dietary === "Veg"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-emerald-50 hover:text-emerald-700"
              }`}
            >
              <span className="flex h-3 w-3 items-center justify-center rounded-sm border border-current">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
              </span>
              <span>Pure Veg Only</span>
            </button>

            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs font-bold text-red-500 hover:underline ml-2"
              >
                Clear all ({activeFilterCount})
              </button>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          HORIZONTAL CATEGORY STRIP
      ====================================================== */}
      <section className="sticky top-20 z-30 border-b border-gray-200/80 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2.5 overflow-x-auto py-3.5 scrollbar-none">
            {categories.map((item) => {
              const active = category === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setCategory(item.name)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-extrabold transition-all duration-200 ${
                    active
                      ? "bg-green-600 text-white shadow-md shadow-green-600/20 scale-[1.02]"
                      : "bg-gray-100/80 text-gray-600 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN SECTION: SIDEBAR + RESTAURANTS GRID
      ====================================================== */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* ================= DESKTOP FILTER ASIDE ================= */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-36 space-y-5 rounded-3xl border border-gray-200/80 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={16} className="text-green-600" />
                  <h3 className="text-sm font-extrabold text-gray-900">Filter By</h3>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-xs font-bold text-green-600 hover:text-green-800"
                  >
                    Reset all
                  </button>
                )}
              </div>

              {/* Dietary Filter */}
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                  Dietary Preference
                </p>
                <div className="mt-2.5 flex rounded-xl border border-gray-200 bg-gray-50 p-1">
                  {["All", "Veg", "Non-Veg"].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDietary(d)}
                      className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition ${
                        dietary === d
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Minimum Rating */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                  Customer Rating
                </p>
                <div className="mt-2.5 space-y-1.5">
                  {[
                    { label: "All Ratings", value: "All" },
                    { label: "4.5+ ⭐ Superb", value: "4.5" },
                    { label: "4.0+ ⭐ Very Good", value: "4.0" },
                    { label: "3.5+ ⭐ Good", value: "3.5" },
                  ].map((item) => (
                    <label
                      key={item.value}
                      className="flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="desktop_rating"
                          checked={rating === item.value}
                          onChange={() => setRating(item.value)}
                          className="accent-green-600"
                        />
                        <span>{item.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Delivery Speed */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                  Delivery Speed
                </p>
                <div className="mt-2.5 space-y-1.5">
                  {[
                    { label: "Any Time", value: "All" },
                    { label: "Under 20 mins ⚡", value: "20" },
                    { label: "Under 30 mins", value: "30" },
                    { label: "Under 40 mins", value: "40" },
                  ].map((item) => (
                    <label
                      key={item.value}
                      className="flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="desktop_delivery"
                        checked={deliveryTime === item.value}
                        onChange={() => setDeliveryTime(item.value)}
                        className="accent-green-600"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget for Two */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                  Cost For Two
                </p>
                <div className="mt-2.5 space-y-1.5">
                  {[
                    { label: "Any Price", value: "All" },
                    { label: "Under ₹350 (Affordable)", value: "350" },
                    { label: "Under ₹450 (Moderate)", value: "450" },
                    { label: "Under ₹550 (Premium)", value: "550" },
                  ].map((p) => (
                    <label
                      key={p.value}
                      className="flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="desktop_price"
                        checked={maxPrice === p.value}
                        onChange={() => setMaxPrice(p.value)}
                        className="accent-green-600"
                      />
                      <span>{p.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Verified Trust Badge */}
              <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50/60 p-3.5 border border-green-200/50">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck size={18} className="text-green-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-gray-900">FoodFlick Promise</p>
                    <p className="mt-0.5 text-[11px] leading-4 text-gray-600">
                      100% contactless pickup, sanitized kitchens & tamper-proof bags.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* ================= RESTAURANTS RESULTS LIST ================= */}
          <div className="min-w-0 flex-1">
            {/* Header controls: Results Count + View Switcher + Sort */}
            <div className="flex flex-col justify-between gap-4 border-b border-gray-200/60 pb-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
                  {category === "All" ? "All Kitchens" : `${category} Specialties`}
                </h2>
                <p className="mt-0.5 text-xs text-gray-500">
                  Showing <span className="font-bold text-gray-900">{filteredRestaurants.length}</span> restaurant{filteredRestaurants.length === 1 ? "" : "s"} nearby
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* View Mode Toggle */}
                <div className="hidden sm:flex items-center rounded-xl border border-gray-200 bg-white p-1 shadow-2xs">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`rounded-lg p-1.5 transition ${
                      viewMode === "grid"
                        ? "bg-green-600 text-white shadow-xs"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                    title="Grid view"
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`rounded-lg p-1.5 transition ${
                      viewMode === "list"
                        ? "bg-green-600 text-white shadow-xs"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                    title="List view"
                  >
                    <List size={16} />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none rounded-xl border border-gray-200 bg-white py-2.5 pl-3.5 pr-9 text-xs font-bold text-gray-700 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100 shadow-2xs"
                  >
                    <option value="Recommended">Recommended</option>
                    <option value="Rating">Highest Rated</option>
                    <option value="Delivery Time">Fastest Delivery</option>
                    <option value="Price Low to High">Price: Low to High</option>
                    <option value="Price High to Low">Price: High to Low</option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Restaurant Cards Container */}
            {filteredRestaurants.length > 0 ? (
              <div
                className={`mt-6 ${
                  viewMode === "grid"
                    ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                    : "space-y-4"
                }`}
              >
                {filteredRestaurants.map((restaurant) => {
                  const isWishlisted = wishlistItems.some(
                    (item) => item.id === restaurant.id
                  );

                  if (viewMode === "list") {
                    return (
                      <div
                        key={restaurant.id}
                        className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-4 shadow-xs transition duration-300 hover:border-green-300 hover:shadow-lg"
                      >
                        {/* List image */}
                        <div className="relative h-48 w-full sm:h-36 sm:w-52 shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          {restaurant.offer && (
                            <div className="absolute bottom-2 left-2 rounded-lg bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                              {restaurant.offer}
                            </div>
                          )}
                        </div>

                        {/* List body */}
                        <div className="flex flex-1 flex-col justify-between pt-4 sm:pl-5 sm:pt-0">
                          <div>
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h3 className="text-base font-extrabold text-gray-900 group-hover:text-green-700 transition">
                                  {restaurant.name}
                                </h3>
                                <p className="mt-0.5 text-xs text-gray-500">
                                  {restaurant.cuisine.join(" • ")}
                                </p>
                              </div>

                              <button
                                onClick={() => handleToggleWishlist(restaurant)}
                                className={`rounded-full p-2 transition ${
                                  isWishlisted
                                    ? "text-red-500"
                                    : "text-gray-400 hover:text-red-500"
                                }`}
                              >
                                <Heart
                                  size={18}
                                  className={isWishlisted ? "fill-red-500" : ""}
                                />
                              </button>
                            </div>

                            {restaurant.featuredDish && (
                              <p className="mt-2 text-xs text-green-700 font-medium">
                                <span className="font-bold">Must try:</span>{" "}
                                {restaurant.featuredDish}
                              </p>
                            )}
                          </div>

                          <div className="mt-4 flex flex-wrap items-center justify-between border-t border-gray-100 pt-3">
                            <div className="flex items-center gap-3 text-xs">
                              <span className="flex items-center gap-1 rounded-md bg-green-600 px-2 py-0.5 font-bold text-white">
                                <Star size={11} className="fill-white" />
                                {restaurant.rating}
                              </span>
                              <span className="text-gray-400">
                                ({restaurant.reviews})
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1 text-gray-600 font-semibold">
                                <Clock3 size={13} />
                                {restaurant.time} min
                              </span>
                              <span>•</span>
                              <span className="text-gray-700 font-bold">
                                ₹{restaurant.priceForTwo} for two
                              </span>
                            </div>

                            <Link
                              to={ROUTES.MENU}
                              className="mt-2 sm:mt-0 inline-flex items-center gap-1.5 rounded-xl bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700"
                            >
                              <span>View Menu</span>
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Default Grid Mode
                  return (
                    <div
                      key={restaurant.id}
                      className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-xs transition duration-300 hover:-translate-y-1.5 hover:border-green-300 hover:shadow-xl hover:shadow-green-950/5"
                    >
                      {/* Image container */}
                      <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Promoted Tag */}
                        {restaurant.promoted && (
                          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-gray-950/80 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-xs">
                            <Sparkles size={11} className="text-amber-400" />
                            <span>Featured</span>
                          </div>
                        )}

                        {/* Favorite Button */}
                        <button
                          type="button"
                          onClick={() => handleToggleWishlist(restaurant)}
                          title={
                            isWishlisted
                              ? "Remove from wishlist"
                              : "Save to wishlist"
                          }
                          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-md backdrop-blur-xs transition ${
                            isWishlisted
                              ? "text-red-500 scale-105"
                              : "text-gray-500 hover:text-red-500 hover:scale-105"
                          }`}
                        >
                          <Heart
                            size={18}
                            className={isWishlisted ? "fill-red-500" : ""}
                          />
                        </button>

                        {/* Offer Badge & Time */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                          {restaurant.offer ? (
                            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-600/90 px-2.5 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-xs">
                              <BadgePercent size={13} />
                              {restaurant.offer}
                            </span>
                          ) : (
                            <span />
                          )}

                          <span className="flex items-center gap-1 rounded-lg bg-gray-900/80 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-xs">
                            <Clock3 size={13} className="text-green-400" />
                            {restaurant.time}m
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="flex flex-1 flex-col p-5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <h3 className="truncate text-base font-extrabold text-gray-900 group-hover:text-green-700 transition">
                                {restaurant.name}
                              </h3>
                              <CheckCircle2
                                size={14}
                                className="shrink-0 text-green-600"
                              />
                            </div>
                            <p className="mt-0.5 truncate text-xs text-gray-500">
                              {restaurant.cuisine.join(" • ")}
                            </p>
                          </div>

                          {/* Veg / Non-Veg Indicator */}
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border mt-1 ${
                              restaurant.isVeg
                                ? "border-green-600"
                                : "border-red-600"
                            }`}
                            title={restaurant.isVeg ? "Pure Veg" : "Non-Veg Available"}
                          >
                            <span
                              className={`h-2 w-2 rounded-full ${
                                restaurant.isVeg ? "bg-green-600" : "bg-red-600"
                              }`}
                            />
                          </span>
                        </div>

                        {/* Featured Dish Highlight */}
                        {restaurant.featuredDish && (
                          <div className="mt-3 rounded-xl bg-gray-50 px-2.5 py-1.5 text-[11px] text-gray-600 flex items-center gap-1.5">
                            <span className="font-bold text-gray-900">Must Try:</span>
                            <span className="truncate">{restaurant.featuredDish}</span>
                          </div>
                        )}

                        {/* Rating & Distance */}
                        <div className="mt-4 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5">
                            <span className="flex items-center gap-1 rounded-md bg-green-600 px-2 py-0.5 font-black text-white">
                              <Star size={11} className="fill-white" />
                              {restaurant.rating}
                            </span>
                            <span className="text-gray-400">
                              ({restaurant.reviews.toLocaleString()})
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-gray-500 font-semibold">
                            <MapPin size={13} className="text-gray-400" />
                            <span>{restaurant.distance}</span>
                          </div>
                        </div>

                        {/* Price & CTA Action */}
                        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                          <div>
                            <p className="text-[11px] text-gray-400">Cost for two</p>
                            <p className="text-sm font-extrabold text-gray-900">
                              ₹{restaurant.priceForTwo}
                            </p>
                          </div>

                          <Link
                            to={ROUTES.MENU}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-green-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-green-700 active:scale-95"
                          >
                            <span>Explore Menu</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Empty State */
              <div className="mt-8 rounded-3xl border border-dashed border-gray-300 bg-white p-14 text-center shadow-xs">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <Search size={32} />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-gray-900">
                  No matching restaurants
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                  We couldn't find any restaurants that meet your selected filters or search terms.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-6 rounded-xl bg-green-600 px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-green-700"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* =====================================================
          MOBILE FILTER DRAWER
      ====================================================== */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-lg font-black text-gray-900">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Dietary */}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Dietary
              </p>
              <div className="mt-2.5 flex rounded-xl border border-gray-200 bg-gray-50 p-1">
                {["All", "Veg", "Non-Veg"].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDietary(d)}
                    className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${
                      dietary === d
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-500"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Rating
              </p>
              <div className="mt-2.5 grid grid-cols-2 gap-2">
                {[
                  { label: "All Ratings", value: "All" },
                  { label: "4.5+ ⭐", value: "4.5" },
                  { label: "4.0+ ⭐", value: "4.0" },
                  { label: "3.5+ ⭐", value: "3.5" },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setRating(item.value)}
                    className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition ${
                      rating === item.value
                        ? "border-green-600 bg-green-50 text-green-700"
                        : "border-gray-200 text-gray-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery */}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Delivery Time
              </p>
              <div className="mt-2.5 grid grid-cols-2 gap-2">
                {[
                  { label: "Any Time", value: "All" },
                  { label: "Under 20m", value: "20" },
                  { label: "Under 30m", value: "30" },
                  { label: "Under 40m", value: "40" },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setDeliveryTime(item.value)}
                    className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition ${
                      deliveryTime === item.value
                        ? "border-green-600 bg-green-50 text-green-700"
                        : "border-gray-200 text-gray-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={resetFilters}
                className="flex-1 rounded-xl border border-gray-200 py-3 text-xs font-bold text-gray-700"
              >
                Reset All
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 rounded-xl bg-green-600 py-3 text-xs font-bold text-white shadow-md"
              >
                Apply Filters ({activeFilterCount})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          BOTTOM DISCOVERY BANNER
      ====================================================== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-green-700 to-green-600 shadow-xl shadow-green-950/10">
          <div className="flex flex-col items-center justify-between gap-6 px-8 py-12 text-center md:flex-row md:text-left lg:px-14">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-green-100 backdrop-blur-xs">
                <Flame size={14} className="text-amber-300" />
                <span>Craving something delicious?</span>
              </div>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Ready to taste the best dishes in town?
              </h2>
              <p className="mt-1.5 text-xs text-green-100 sm:text-sm">
                Explore handpicked combos, chef specials, and hot discount deals right now.
              </p>
            </div>

            <Link
              to={ROUTES.MENU}
              className="flex shrink-0 items-center gap-2 rounded-2xl bg-white px-7 py-4 text-xs font-black text-green-800 shadow-lg transition hover:bg-green-50 active:scale-95"
            >
              <span>Explore Menu</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;
