import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Heart,
  Trash2,
  ShoppingBag,
  Star,
  Clock3,
  ArrowRight,
  Sparkles,
  UtensilsCrossed,
  CheckCircle,
} from "lucide-react";
import {
  selectWishlistItems,
  removeFromWishlist,
  clearWishlist,
} from "../features/WishlistFeatures/wishlistSlice";
import { addToCart } from "../features/CartFeatures/cartSlice";
import ROUTES from "../router/routespaths";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const [filterType, setFilterType] = useState("all");
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        restaurant: item.restaurant || "Featured Kitchen",
        price: item.price || item.priceForTwo || 199,
        image: item.image,
        type: item.isVeg || item.type === "Veg" ? "Veg" : "Non-Veg",
        quantity: 1,
      })
    );
    showToast(`Added "${item.name}" to your cart!`);
  };

  const filteredItems = wishlistItems.filter((item) => {
    if (filterType === "restaurants") {
      return item.priceForTwo !== undefined || item.cuisine !== undefined;
    }
    if (filterType === "dishes") {
      return item.priceForTwo === undefined && item.cuisine === undefined;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-10">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-2xl transition-all">
          <CheckCircle size={18} className="text-green-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3.5 py-1.5 text-xs font-bold text-red-600">
              <Heart size={14} className="fill-red-500" />
              <span>Saved Delights</span>
            </div>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              My Wishlist
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">
              Your handpicked collection of restaurants & favorite dishes
            </p>
          </div>

          {wishlistItems.length > 0 && (
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                {wishlistItems.length} {wishlistItems.length === 1 ? "Item" : "Items"}
              </span>
              <button
                onClick={() => dispatch(clearWishlist())}
                className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 size={14} />
                Clear Wishlist
              </button>
            </div>
          )}
        </div>

        {/* Filter Pills */}
        {wishlistItems.length > 0 && (
          <div className="mt-6 flex gap-2">
            {[
              { id: "all", label: "All Items" },
              { id: "restaurants", label: "Restaurants" },
              { id: "dishes", label: "Dishes & Food" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  filterType === tab.id
                    ? "bg-green-600 text-white shadow-sm"
                    : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Main Content */}
        {filteredItems.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => {
              const isRestaurant =
                item.priceForTwo !== undefined || item.cuisine !== undefined;

              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Tag badge */}
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-800 shadow-sm backdrop-blur-sm">
                        {isRestaurant ? "Restaurant" : item.category || "Dish"}
                      </span>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => dispatch(removeFromWishlist(item.id))}
                      title="Remove from wishlist"
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-500 shadow-md backdrop-blur-sm transition hover:bg-red-500 hover:text-white"
                    >
                      <Trash2 size={16} />
                    </button>

                    {/* Rating Pill */}
                    {item.rating && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-lg bg-gray-900/80 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm">
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                        <span>{item.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="line-clamp-1 text-base font-extrabold text-gray-900">
                        {item.name}
                      </h3>
                      {item.isVeg !== undefined && (
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                            item.isVeg
                              ? "border-green-600"
                              : "border-red-600"
                          }`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              item.isVeg ? "bg-green-600" : "bg-red-600"
                            }`}
                          />
                        </span>
                      )}
                    </div>

                    <p className="mt-1 line-clamp-1 text-xs text-gray-500">
                      {isRestaurant
                        ? Array.isArray(item.cuisine)
                          ? item.cuisine.join(" • ")
                          : item.cuisine || "Multi-cuisine"
                        : item.restaurant || "FoodFlick Special"}
                    </p>

                    <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                      {item.time && (
                        <span className="flex items-center gap-1">
                          <Clock3 size={13} className="text-gray-400" />
                          {item.time} mins
                        </span>
                      )}
                      <span>•</span>
                      <span className="font-bold text-gray-900">
                        {isRestaurant
                          ? `₹${item.priceForTwo || 400} for two`
                          : `₹${item.price || 199}`}
                      </span>
                    </div>

                    {/* Action Footer */}
                    <div className="mt-5 border-t border-gray-100 pt-4">
                      {isRestaurant ? (
                        <Link
                          to={ROUTES.MENU}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-2.5 text-xs font-bold text-white transition hover:bg-green-600"
                        >
                          <UtensilsCrossed size={14} />
                          Explore Menu
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-green-700"
                        >
                          <ShoppingBag size={14} />
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-12 rounded-3xl border border-dashed border-gray-200 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
              <Heart size={36} />
            </div>
            <h3 className="mt-5 text-xl font-black text-gray-900 sm:text-2xl">
              Your wishlist is empty
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              Save your favorite places and craving-worthy dishes by tapping the heart icon as you browse!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to={ROUTES.RESTAURANTS}
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-green-700"
              >
                <UtensilsCrossed size={16} />
                Browse Restaurants
              </Link>
              <Link
                to={ROUTES.MENU}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
              >
                <Sparkles size={16} className="text-amber-500" />
                Explore Menu
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

