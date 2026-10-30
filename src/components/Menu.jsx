import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Search,
  Star,
  Clock3,
  Heart,
  ShoppingBag,
  Plus,
  Minus,
  SlidersHorizontal,
  ChevronDown,
  Flame,
  Leaf,
  UtensilsCrossed,
  X,
  Check,
} from "lucide-react";

import {
  addToCart,
  updateQuantity,
  selectCartItems,
  selectCartTotalCount,
} from "../features/CartFeatures/cartSlice";
import {
  toggleWishlist,
  selectWishlistItems,
} from "../features/WishlistFeatures/wishlistSlice";
import ROUTES from "../router/routespaths";

const categories = [
  {
    name: "All",
    emoji: "🍽️",
  },
  {
    name: "Pizza",
    emoji: "🍕",
  },
  {
    name: "Burgers",
    emoji: "🍔",
  },
  {
    name: "Biryani",
    emoji: "🍛",
  },
  {
    name: "Chinese",
    emoji: "🥡",
  },
  {
    name: "Desserts",
    emoji: "🍰",
  },
  {
    name: "Healthy",
    emoji: "🥗",
  },
  {
    name: "South Indian",
    emoji: "🥞",
  },
  {
    name: "Drinks",
    emoji: "🥤",
  },
];

const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    restaurant: "The Food Factory",
    category: "Pizza",
    type: "Veg",
    price: 249,
    oldPrice: 299,
    rating: 4.8,
    reviews: 324,
    deliveryTime: "25-30 min",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    description:
      "Classic Italian pizza with fresh mozzarella, tomato sauce and basil.",
    popular: true,
    bestseller: true,
  },
  {
    id: 2,
    name: "Classic Cheese Burger",
    restaurant: "Burger House",
    category: "Burgers",
    type: "Non-Veg",
    price: 199,
    oldPrice: 249,
    rating: 4.7,
    reviews: 287,
    deliveryTime: "20-25 min",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description:
      "Juicy chicken patty with cheddar cheese, lettuce and signature sauce.",
    popular: true,
    bestseller: true,
  },
  {
    id: 3,
    name: "Chicken Biryani",
    restaurant: "Biryani Palace",
    category: "Biryani",
    type: "Non-Veg",
    price: 299,
    oldPrice: 349,
    rating: 4.9,
    reviews: 512,
    deliveryTime: "30-35 min",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=80",
    description:
      "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    popular: true,
    bestseller: true,
  },
  {
    id: 4,
    name: "Paneer Butter Masala",
    restaurant: "Urban Tadka",
    category: "North Indian",
    type: "Veg",
    price: 229,
    oldPrice: 279,
    rating: 4.6,
    reviews: 198,
    deliveryTime: "25-30 min",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    description:
      "Soft paneer cooked in a rich, creamy tomato and butter gravy.",
    popular: true,
    bestseller: false,
  },
  {
    id: 5,
    name: "Veg Hakka Noodles",
    restaurant: "Dragon Bowl",
    category: "Chinese",
    type: "Veg",
    price: 179,
    oldPrice: 219,
    rating: 4.5,
    reviews: 176,
    deliveryTime: "20-25 min",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    description:
      "Stir-fried noodles tossed with fresh vegetables and Asian sauces.",
    popular: false,
    bestseller: false,
  },
  {
    id: 6,
    name: "Chocolate Brownie",
    restaurant: "Sweet Cravings",
    category: "Desserts",
    type: "Veg",
    price: 149,
    oldPrice: 179,
    rating: 4.8,
    reviews: 241,
    deliveryTime: "15-20 min",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    description:
      "Warm, fudgy chocolate brownie served with delicious chocolate sauce.",
    popular: true,
    bestseller: true,
  },
  {
    id: 7,
    name: "Farmhouse Pizza",
    restaurant: "Pizza Corner",
    category: "Pizza",
    type: "Veg",
    price: 329,
    oldPrice: 399,
    rating: 4.7,
    reviews: 362,
    deliveryTime: "25-30 min",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    description:
      "Loaded with onion, capsicum, tomato, mushroom and mozzarella.",
    popular: true,
    bestseller: false,
  },
  {
    id: 8,
    name: "Chicken Momos",
    restaurant: "Dragon Bowl",
    category: "Chinese",
    type: "Non-Veg",
    price: 169,
    oldPrice: 199,
    rating: 4.6,
    reviews: 214,
    deliveryTime: "20-25 min",
    image:
      "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80",
    description:
      "Steamed chicken momos served with spicy red chutney.",
    popular: false,
    bestseller: true,
  },
  {
    id: 9,
    name: "Masala Dosa",
    restaurant: "South Indian Hub",
    category: "South Indian",
    type: "Veg",
    price: 129,
    oldPrice: 159,
    rating: 4.7,
    reviews: 189,
    deliveryTime: "20-25 min",
    image:
      "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80",
    description:
      "Crispy dosa filled with spicy potato masala and served with chutney.",
    popular: true,
    bestseller: false,
  },
  {
    id: 10,
    name: "Fresh Green Salad",
    restaurant: "Green Leaf Kitchen",
    category: "Healthy",
    type: "Veg",
    price: 159,
    oldPrice: 189,
    rating: 4.5,
    reviews: 142,
    deliveryTime: "15-20 min",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description:
      "Fresh seasonal vegetables with herbs and a light dressing.",
    popular: false,
    bestseller: false,
  },
  {
    id: 11,
    name: "Cold Coffee",
    restaurant: "Sweet Cravings",
    category: "Drinks",
    type: "Veg",
    price: 119,
    oldPrice: 149,
    rating: 4.6,
    reviews: 165,
    deliveryTime: "10-15 min",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    description:
      "Creamy chilled coffee topped with a smooth layer of foam.",
    popular: false,
    bestseller: false,
  },
  {
    id: 12,
    name: "Chicken Tikka",
    restaurant: "Royal Kitchen",
    category: "North Indian",
    type: "Non-Veg",
    price: 279,
    oldPrice: 329,
    rating: 4.8,
    reviews: 296,
    deliveryTime: "30-35 min",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    description:
      "Juicy chicken pieces marinated with spices and grilled to perfection.",
    popular: true,
    bestseller: true,
  },
];

const Menu = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartTotalCount);
  const wishlistItems = useSelector(selectWishlistItems);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [foodType, setFoodType] = useState("All");
  const [sortBy, setSortBy] = useState("Popular");
  const [showFilters, setShowFilters] = useState(false);

  const toggleFavorite = (item) => {
    dispatch(toggleWishlist(item));
  };

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        restaurant: item.restaurant,
        category: item.category,
        type: item.type,
        price: item.price,
        oldPrice: item.oldPrice,
        image: item.image,
        quantity: 1,
      })
    );
  };

  const handleRemoveFromCart = (id) => {
    const existing = cartItems.find((item) => item.id === id);
    if (existing) {
      dispatch(updateQuantity({ id, quantity: (existing.quantity || 1) - 1 }));
    }
  };

  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const filteredItems = useMemo(() => {
    let result = [...foodItems];

    if (activeCategory !== "All") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (foodType !== "All") {
      result = result.filter((item) => item.type === foodType);
    }

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.restaurant.toLowerCase().includes(search) ||
          item.category.toLowerCase().includes(search)
      );
    }

    if (sortBy === "Rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "Fast Delivery") {
      result.sort(
        (a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime)
      );
    }

    if (sortBy === "Popular") {
      result.sort((a, b) => Number(b.popular) - Number(a.popular));
    }

    return result;
  }, [activeCategory, foodType, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-700 text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-300/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Flame className="h-4 w-4 text-yellow-300" />
              <span>Fresh • Fast • Delicious</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Explore Our
              <span className="block text-green-300">Delicious Menu</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-green-100 sm:text-lg">
              Discover delicious meals from your favorite restaurants. From crispy
              pizzas to flavorful biryanis, find something you'll love.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-2xl">
              <div className="flex items-center rounded-2xl bg-white p-2 shadow-2xl">
                <Search className="ml-3 h-5 w-5 shrink-0 text-gray-400" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for food, restaurants or cuisines..."
                  className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none sm:text-base"
                />

                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="mr-2 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}

                <button className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto py-5 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category.name
                    ? "border-green-600 bg-green-600 text-white shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                <span className="text-lg">{category.emoji}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Heading + Mobile Filter */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-green-600">
              {filteredItems.length} items available
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              {activeCategory === "All"
                ? "Popular Dishes"
                : `${activeCategory} Dishes`}
            </h2>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:border-green-300 hover:text-green-700 lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters & Sort
          </button>
        </div>

        {/* Filters */}
        <div
          className={`mb-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm ${
            showFilters ? "block" : "hidden"
          } lg:block`}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Food Type */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                Food Type
              </p>

              <div className="flex gap-2">
                {["All", "Veg", "Non-Veg"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFoodType(type)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                      foodType === type
                        ? "border-green-600 bg-green-50 text-green-700"
                        : "border-gray-200 text-gray-600 hover:border-green-300"
                    }`}
                  >
                    {type === "Veg" && (
                      <Leaf className="mr-1 inline h-3.5 w-3.5" />
                    )}

                    {type === "Non-Veg" && (
                      <span className="mr-1 inline-block h-3 w-3 rounded-sm border border-red-500 align-middle">
                        <span className="mx-auto mt-0.5 block h-1.5 w-1.5 rounded-full bg-red-500" />
                      </span>
                    )}

                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-600">
                Sort by
              </label>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none rounded-xl border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm font-medium text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                >
                  <option>Popular</option>
                  <option>Rating</option>
                  <option>Fast Delivery</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Food Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => {
              const quantity = getQuantity(item.id);
              const isFavorite = wishlistItems.some((w) => w.id === item.id);

              return (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
                      {item.bestseller ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white shadow">
                          <Flame className="h-3.5 w-3.5" />
                          Bestseller
                        </span>
                      ) : (
                        <span />
                      )}

                      <button
                        onClick={() => toggleFavorite(item)}
                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-md backdrop-blur transition ${
                          isFavorite
                            ? "text-red-500"
                            : "text-gray-500 hover:text-red-500"
                        }`}
                        title={
                          isFavorite
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                      >
                        <Heart
                          className="h-4.5 w-4.5"
                          fill={isFavorite ? "currentColor" : "none"}
                        />
                      </button>
                    </div>

                    {/* Discount */}
                    <div className="absolute bottom-3 left-3 rounded-lg bg-green-600 px-2.5 py-1.5 text-xs font-bold text-white shadow">
                      {Math.round(
                        ((item.oldPrice - item.price) / item.oldPrice) * 100
                      )}
                      % OFF
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="mb-1 flex items-start justify-between gap-2">
                      <h3 className="line-clamp-1 text-base font-bold text-gray-900">
                        {item.name}
                      </h3>
                    </div>

                    <Link
                      to={ROUTES.RESTAURANTS}
                      className="text-sm font-medium text-gray-500 transition hover:text-green-600"
                    >
                      {item.restaurant}
                    </Link>

                    <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-gray-500">
                      {item.description}
                    </p>

                    <div className="mt-3 flex items-center gap-3 text-xs">
                      <span className="inline-flex items-center gap-1 font-semibold text-gray-700">
                        <span className="flex items-center gap-1 rounded-md bg-green-600 px-1.5 py-1 text-white">
                          <Star className="h-3 w-3" fill="currentColor" />
                          {item.rating}
                        </span>
                        <span className="text-gray-400">({item.reviews})</span>
                      </span>

                      <span className="h-1 w-1 rounded-full bg-gray-300" />

                      <span className="flex items-center gap-1 text-gray-500">
                        <Clock3 className="h-3.5 w-3.5" />
                        {item.deliveryTime}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          ₹{item.price}
                        </span>

                        <span className="ml-2 text-xs text-gray-400 line-through">
                          ₹{item.oldPrice}
                        </span>
                      </div>

                      {quantity === 0 ? (
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-green-600 bg-green-50 px-4 py-2 text-sm font-bold text-green-700 transition hover:bg-green-600 hover:text-white"
                        >
                          <Plus className="h-4 w-4" />
                          Add
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 rounded-xl bg-green-600 p-1 text-white">
                          <button
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-green-700"
                          >
                            <Minus className="h-4 w-4" />
                          </button>

                          <span className="min-w-5 text-center text-sm font-bold">
                            {quantity}
                          </span>

                          <button
                            onClick={() => handleAddToCart(item)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-green-700"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Food Type */}
                    <div className="mt-3">
                      {item.type === "Veg" ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600">
                          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-sm border border-green-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                          </span>
                          Pure Veg
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-red-500">
                          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-sm border border-red-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                          </span>
                          Non-Veg
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
              <UtensilsCrossed className="h-8 w-8 text-green-600" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              No dishes found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              We couldn't find any dishes matching your search or filters. Try
              another food, category or restaurant.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
                setFoodType("All");
                setSortBy("Popular");
              }}
              className="mt-6 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Cart Floating Bar */}
        {cartCount > 0 && (
          <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2">
            <div className="flex items-center justify-between rounded-2xl bg-green-700 p-3 pl-5 text-white shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                  <ShoppingBag className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold">
                    {cartCount} {cartCount === 1 ? "item" : "items"} in cart
                  </p>

                  <p className="text-xs text-green-100">Ready to order</p>
                </div>
              </div>

              <Link
                to={ROUTES.CART}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-green-700 transition hover:bg-green-50"
              >
                View Cart
                <ShoppingBag className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 to-green-500">
          <div className="relative px-6 py-12 text-center text-white sm:px-12">
            <div className="absolute -right-10 -top-20 h-48 w-48 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-white/10" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Check className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                Hungry for more?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm text-green-50 sm:text-base">
                Explore restaurants near you and discover even more delicious
                dishes delivered right to your doorstep.
              </p>

              <Link
                to={ROUTES.RESTAURANTS}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-green-700 shadow-lg transition hover:bg-green-50"
              >
                Explore Restaurants
                <UtensilsCrossed className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Menu;
