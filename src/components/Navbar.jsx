import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  MapPin,
  ChevronDown,
  LogOut,
  UtensilsCrossed,
  Clock3,
} from "lucide-react";

import useAuth from "../hooks/useAuth";
import ROUTES from "../router/routespaths";
import { selectCartTotalCount } from "../features/CartFeatures/cartSlice";
import { selectWishlistCount } from "../features/WishlistFeatures/wishlistSlice";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const cartCount = useSelector(selectCartTotalCount);
  const wishlistCount = useSelector(selectWishlistCount);

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    setMobileMenu(false);
    navigate(ROUTES.LOGIN, { replace: true });
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= DESKTOP / MAIN NAV ================= */}
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link
            to={ROUTES.HOME}
            className="flex shrink-0 items-center gap-2"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-white shadow-md shadow-green-200 transition hover:scale-105">
              <UtensilsCrossed size={23} strokeWidth={2.3} />
            </div>

            <div className="leading-none">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                Food<span className="text-green-600">Flick</span>
              </h1>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gray-400">
                Food · Delivered
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            <Link
              to={ROUTES.HOME}
              className="text-sm font-semibold text-gray-700 transition hover:text-green-600"
            >
              Home
            </Link>

            <Link
              to={ROUTES.RESTAURANTS}
              className="text-sm font-semibold text-gray-700 transition hover:text-green-600"
            >
              Restaurants
            </Link>

            <Link
              to={ROUTES.MENU}
              className="text-sm font-semibold text-gray-700 transition hover:text-green-600"
            >
              Menu
            </Link>

            <Link
              to={ROUTES.OFFERS}
              className="relative text-sm font-semibold text-gray-700 transition hover:text-green-600"
            >
              Offers
              <span className="absolute -right-3 -top-3 rounded-full bg-orange-500 px-1.5 py-0.5 text-[8px] font-bold text-white shadow-sm">
                HOT
              </span>
            </Link>

            <Link
              to={ROUTES.ORDERS}
              className="text-sm font-semibold text-gray-700 transition hover:text-green-600"
            >
              Orders
            </Link>
          </div>

          {/* Search */}
          <div className="hidden xl:flex w-64">
            <div className="flex w-full items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 transition-all focus-within:border-green-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-100">
              <Search
                size={18}
                className="shrink-0 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search food, restaurants..."
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Location */}
            <button
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-gray-600 transition hover:bg-green-50 hover:text-green-600 xl:flex"
            >
              <MapPin size={18} className="text-green-600" />

              <div className="text-left">
                <p className="text-[10px] text-gray-400">
                  Deliver to
                </p>

                <p className="text-xs font-semibold text-gray-800">
                  Your Location
                </p>
              </div>

              <ChevronDown size={15} />
            </button>

            {/* Wishlist */}
            <Link
              to={ROUTES.WISHLIST}
              className="relative rounded-full p-2.5 text-gray-600 transition hover:bg-green-50 hover:text-green-600"
              title="My Wishlist"
            >
              <Heart
                size={21}
                className={`transition-colors ${
                  wishlistCount > 0 ? "fill-red-500 text-red-500" : ""
                }`}
              />

              {wishlistCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-black text-white shadow-md">
                  {wishlistCount > 99 ? "99+" : wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to={ROUTES.CART}
              className="relative rounded-full p-2.5 text-gray-600 transition hover:bg-green-50 hover:text-green-600"
              title="Shopping Cart"
            >
              <ShoppingBag
                size={21}
                className={`transition-colors ${
                  cartCount > 0 ? "text-green-600" : ""
                }`}
              />

              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-green-600 px-1 text-[10px] font-black text-white shadow-md">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Profile */}
            <div className="relative ml-1">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1.5 transition hover:border-green-300 hover:bg-green-50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <User size={19} />
                </div>

                <div className="hidden text-left md:block">
                  <p className="max-w-24 truncate text-xs font-bold text-gray-800">
                    {user?.username || "Guest"}
                  </p>

                  <p className="text-[10px] text-gray-400">
                    {user ? "Customer" : "Account"}
                  </p>
                </div>

                <ChevronDown
                  size={15}
                  className={`hidden text-gray-400 transition-transform md:block ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 top-14 w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl z-50">
                  {/* User Information */}
                  <div className="border-b border-gray-100 bg-green-50 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white shadow-sm">
                        <User size={21} />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-gray-900">
                          {user?.username || "Guest User"}
                        </p>

                        <p className="truncate text-xs text-gray-500">
                          {user?.email || "Please login"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Links */}
                  <div className="p-2">
                    <Link
                      to={ROUTES.ORDERS}
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-600"
                    >
                      <Clock3 size={17} />
                      My Orders
                    </Link>

                    <Link
                      to={ROUTES.WISHLIST}
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-600"
                    >
                      <div className="flex items-center gap-3">
                        <Heart size={17} className={wishlistCount > 0 ? "text-red-500 fill-red-500" : ""} />
                        <span>Wishlist</span>
                      </div>
                      {wishlistCount > 0 && (
                        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">
                          {wishlistCount}
                        </span>
                      )}
                    </Link>

                    <Link
                      to={ROUTES.CART}
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-600"
                    >
                      <div className="flex items-center gap-3">
                        <ShoppingBag size={17} className={cartCount > 0 ? "text-green-600" : ""} />
                        <span>Cart</span>
                      </div>
                      {cartCount > 0 && (
                        <span className="rounded-full bg-green-600 px-2 py-0.5 text-xs font-bold text-white">
                          {cartCount}
                        </span>
                      )}
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                      <LogOut size={17} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="ml-1 rounded-xl p-2.5 text-gray-700 transition hover:bg-green-50 hover:text-green-600 lg:hidden"
            >
              {mobileMenu ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenu && (
          <div className="border-t border-gray-100 py-5 lg:hidden">
            {/* Mobile Search */}
            <div className="mb-4 flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-100">
              <Search
                size={19}
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Search food, restaurants..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Mobile Location */}
            <button className="mb-4 flex w-full items-center gap-3 rounded-xl bg-green-50 px-4 py-3 text-left">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white">
                <MapPin size={17} />
              </div>

              <div>
                <p className="text-[11px] text-gray-400">
                  Deliver to
                </p>

                <p className="text-sm font-semibold text-gray-800">
                  Select your location
                </p>
              </div>

              <ChevronDown
                size={17}
                className="ml-auto text-gray-400"
              />
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col gap-1">
              <Link
                to={ROUTES.HOME}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-600"
              >
                Home
              </Link>

              <Link
                to={ROUTES.RESTAURANTS}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-600"
              >
                Restaurants
              </Link>

              <Link
                to={ROUTES.MENU}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-600"
              >
                Menu
              </Link>

              <Link
                to={ROUTES.OFFERS}
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-600"
              >
                Offers
                <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[9px] font-bold text-white">
                  HOT
                </span>
              </Link>

              <Link
                to={ROUTES.ORDERS}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-600"
              >
                My Orders
              </Link>

              <Link
                to={ROUTES.WISHLIST}
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-600"
              >
                <div className="flex items-center gap-3">
                  <Heart size={18} className={wishlistCount > 0 ? "fill-red-500 text-red-500" : ""} />
                  <span>Wishlist</span>
                </div>
                {wishlistCount > 0 && (
                  <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-600">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                to={ROUTES.CART}
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-600"
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag size={18} className={cartCount > 0 ? "text-green-600" : ""} />
                  <span>Cart</span>
                </div>
                {cartCount > 0 && (
                  <span className="rounded-full bg-green-600 px-2.5 py-0.5 text-xs font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile User */}
              <div className="mt-3 flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <User size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-gray-800">
                      {user?.username || "Guest User"}
                    </p>

                    <p className="truncate text-xs text-gray-400">
                      {user?.email || "Not logged in"}
                    </p>
                  </div>
                </div>

                {user && (
                  <button
                    onClick={handleLogout}
                    className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                    title="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
