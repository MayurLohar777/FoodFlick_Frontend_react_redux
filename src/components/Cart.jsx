import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Tag,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Bike,
  Sparkles,
  MapPin,
  Receipt,
  X,
} from "lucide-react";
import {
  selectCartItems,
  selectCartTotalPrice,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../features/CartFeatures/cartSlice";
import ROUTES from "../router/routespaths";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartTotalPrice);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");
  const [deliveryInstruction, setDeliveryInstruction] = useState("Avoid ringing bell");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  // Delivery fee logic: Free delivery above ₹499 or with promo
  const deliveryFee = subtotal > 499 || appliedCoupon?.code === "FREEDEL" ? 0 : 35;
  const platformFee = items.length > 0 ? 12 : 0;
  const tax = Math.round(subtotal * 0.05);

  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === "percentage") {
      discount = Math.min(Math.round((subtotal * appliedCoupon.value) / 100), appliedCoupon.maxDiscount || 120);
    } else if (appliedCoupon.type === "fixed") {
      discount = appliedCoupon.value;
    }
  }

  const grandTotal = Math.max(0, subtotal + deliveryFee + platformFee + tax - discount);

  const handleApplyCoupon = (codeToApply) => {
    const code = (codeToApply || couponCode).trim().toUpperCase();
    setCouponError("");

    if (!code) return;

    if (code === "FLICK50") {
      if (subtotal < 199) {
        setCouponError("Minimum order ₹199 required for FLICK50");
        return;
      }
      setAppliedCoupon({
        code: "FLICK50",
        type: "percentage",
        value: 50,
        maxDiscount: 100,
        label: "50% OFF up to ₹100",
      });
      setCouponCode("");
    } else if (code === "FREEDEL") {
      setAppliedCoupon({
        code: "FREEDEL",
        type: "fixed",
        value: 0,
        label: "Free Delivery Applied",
      });
      setCouponCode("");
    } else if (code === "TASTY100") {
      if (subtotal < 399) {
        setCouponError("Minimum order ₹399 required for TASTY100");
        return;
      }
      setAppliedCoupon({
        code: "TASTY100",
        type: "fixed",
        value: 100,
        label: "Flat ₹100 OFF",
      });
      setCouponCode("");
    } else {
      setCouponError("Invalid coupon code. Try FLICK50 or FREEDEL");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponError("");
  };

  const handlePlaceOrder = () => {
    const newOrderId = "FF-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);
    setIsOrderPlaced(true);
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-50/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="flex flex-col justify-between gap-4 border-b border-gray-200/80 pb-6 sm:flex-row sm:items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
              <Bike size={14} />
              <span>Fast 30 Min Delivery</span>
            </div>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Checkout & Cart
            </h1>
          </div>

          {items.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-600 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 size={14} />
              Empty Cart
            </button>
          )}
        </div>

        {items.length > 0 ? (
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* Left: Cart Items List */}
            <div className="space-y-4 lg:col-span-7 xl:col-span-8">
              <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-sm">
                <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
                  <h2 className="text-base font-bold text-gray-900">
                    Order Items ({items.reduce((s, i) => s + (i.quantity || 1), 0)})
                  </h2>
                </div>

                <div className="divide-y divide-gray-100">
                  {items.map((item) => {
                    const itemTotal = (Number(item.price) || 0) * (item.quantity || 1);
                    return (
                      <div
                        key={item.id}
                        className="flex flex-col gap-4 p-5 transition hover:bg-gray-50/40 sm:flex-row sm:items-center sm:justify-between"
                      >
                        {/* Item Info */}
                        <div className="flex items-center gap-4">
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-16 w-16 rounded-2xl object-cover ring-1 ring-gray-100 sm:h-20 sm:w-20"
                            />
                          )}
                          <div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`flex h-3.5 w-3.5 items-center justify-center rounded-sm border ${
                                  item.type === "Veg"
                                    ? "border-green-600"
                                    : "border-red-600"
                                }`}
                              >
                                <span
                                  className={`h-1.5 w-1.5 rounded-full ${
                                    item.type === "Veg"
                                      ? "bg-green-600"
                                      : "bg-red-600"
                                  }`}
                                />
                              </span>
                              <h3 className="text-sm font-extrabold text-gray-900 sm:text-base">
                                {item.name}
                              </h3>
                            </div>
                            <p className="mt-0.5 text-xs text-gray-400">
                              {item.restaurant || "FoodFlick Kitchen"}
                            </p>
                            <p className="mt-1 text-xs font-bold text-gray-600">
                              ₹{item.price} each
                            </p>
                          </div>
                        </div>

                        {/* Quantity and Actions */}
                        <div className="flex items-center justify-between gap-6 sm:justify-end">
                          <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 p-1">
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    id: item.id,
                                    quantity: (item.quantity || 1) - 1,
                                  })
                                )
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-gray-600 shadow-sm transition hover:bg-green-50 hover:text-green-600"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-xs font-extrabold text-gray-800">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    id: item.id,
                                    quantity: (item.quantity || 1) + 1,
                                  })
                                )
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-gray-600 shadow-sm transition hover:bg-green-50 hover:text-green-600"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <span className="w-16 text-right text-sm font-black text-gray-900 sm:text-base">
                            ₹{itemTotal}
                          </span>

                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            title="Remove"
                            className="rounded-lg p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Delivery Address & Note */}
              <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      Delivering to: <span className="text-green-600 font-extrabold">Home</span>
                    </h3>
                    <p className="text-xs text-gray-500">
                      104, Sunrise Residency, SG Highway, Ahmedabad · 380054
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Delivery Instructions
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "Avoid ringing bell",
                      "Leave at the door",
                      "Call upon arrival",
                      "Handover to security",
                    ].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setDeliveryInstruction(opt)}
                        className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                          deliveryInstruction === opt
                            ? "border-green-600 bg-green-50 text-green-700 border"
                            : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bill Details & Promo Card */}
            <div className="space-y-5 lg:col-span-5 xl:col-span-4">
              {/* Promo Code Box */}
              <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                  <Tag size={16} className="text-green-600" />
                  <span>Coupons & Offers</span>
                </div>

                {appliedCoupon ? (
                  <div className="mt-3 flex items-center justify-between rounded-2xl bg-green-50 border border-green-200 p-3.5">
                    <div>
                      <span className="font-extrabold text-xs text-green-800">
                        {appliedCoupon.code} applied!
                      </span>
                      <p className="text-[11px] text-green-600">{appliedCoupon.label}</p>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="rounded-lg p-1 text-green-700 hover:bg-green-100"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mt-3 flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold uppercase outline-none focus:border-green-500 focus:bg-white"
                      />
                      <button
                        onClick={() => handleApplyCoupon()}
                        className="rounded-xl bg-gray-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-600"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && (
                      <p className="mt-2 text-xs font-semibold text-red-500">
                        {couponError}
                      </p>
                    )}

                    {/* Quick suggestion pills */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        onClick={() => handleApplyCoupon("FLICK50")}
                        className="rounded-lg border border-dashed border-green-300 bg-green-50/60 px-2.5 py-1 text-[11px] font-bold text-green-700 hover:bg-green-100"
                      >
                        FLICK50 (50% OFF)
                      </button>
                      <button
                        onClick={() => handleApplyCoupon("FREEDEL")}
                        className="rounded-lg border border-dashed border-blue-300 bg-blue-50/60 px-2.5 py-1 text-[11px] font-bold text-blue-700 hover:bg-blue-100"
                      >
                        FREEDEL (Free Delivery)
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Bill Details */}
              <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-gray-100 pb-3 text-sm font-bold text-gray-900">
                  <Receipt size={16} className="text-gray-400" />
                  <span>Bill Summary</span>
                </div>

                <div className="mt-4 space-y-2.5 text-xs">
                  <div className="flex justify-between text-gray-600">
                    <span>Item Total</span>
                    <span className="font-semibold text-gray-900">₹{subtotal}</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span className="flex items-center gap-1">
                      Delivery Fee
                      {deliveryFee === 0 && (
                        <span className="text-[10px] font-bold text-green-600">FREE</span>
                      )}
                    </span>
                    <span className="font-semibold text-gray-900">
                      {deliveryFee === 0 ? <span className="line-through text-gray-400 mr-1">₹35</span> : null}
                      ₹{deliveryFee}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Platform & Packaging Fee</span>
                    <span className="font-semibold text-gray-900">₹{platformFee}</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Government Taxes (GST 5%)</span>
                    <span className="font-semibold text-gray-900">₹{tax}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between font-bold text-green-600">
                      <span>Promo Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}

                  <div className="border-t border-gray-200/80 pt-3 flex justify-between items-baseline">
                    <div>
                      <p className="text-sm font-black text-gray-900">To Pay</p>
                      <p className="text-[10px] text-gray-400">Inclusive of all taxes</p>
                    </div>
                    <span className="text-2xl font-black text-green-600">
                      ₹{grandTotal}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={handlePlaceOrder}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-600 py-4 text-sm font-extrabold text-white shadow-lg shadow-green-200 transition duration-300 hover:bg-green-700 active:scale-[0.99]"
                >
                  <span>Pay ₹{grandTotal} · Place Order</span>
                  <ArrowRight size={18} />
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-gray-400">
                  <ShieldCheck size={14} className="text-green-600" />
                  <span>100% Safe & Secure UPI / Card Payment</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="mt-12 rounded-3xl border border-dashed border-gray-200 bg-white p-14 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-50 text-green-600">
              <ShoppingBag size={42} />
            </div>
            <h3 className="mt-6 text-2xl font-black text-gray-900">
              Your cart is empty
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              Good food is always cooking! Explore delicious meals from top restaurants and add them to your cart.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to={ROUTES.MENU}
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-green-700"
              >
                <Sparkles size={16} />
                Explore Menu
              </Link>
              <Link
                to={ROUTES.RESTAURANTS}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
              >
                Browse Restaurants
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Order Success Modal */}
      {isOrderPlaced && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 size={44} />
            </div>

            <h2 className="mt-5 text-2xl font-black text-gray-900">
              Order Confirmed! 🎉
            </h2>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-400">
              Order ID: <span className="text-gray-800">{orderId}</span>
            </p>
            <p className="mt-2 text-sm text-gray-600">
              The restaurant is preparing your food. Our delivery partner will pick it up shortly!
            </p>

            <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-green-50 p-3 text-xs font-bold text-green-700">
              <Clock size={16} />
              <span>Estimated Delivery: 25 - 35 mins</span>
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <button
                onClick={() => navigate(ROUTES.ORDERS)}
                className="w-full rounded-xl bg-green-600 py-3 text-sm font-bold text-white transition hover:bg-green-700"
              >
                Track in My Orders
              </button>
              <button
                onClick={() => setIsOrderPlaced(false)}
                className="w-full rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

