
import React, { useState } from "react";
import {
  Tag,
  MapPin,
  ArrowRight,
  Copy,
  Check,
  Percent,
  Gift,
  Flame,
  ShoppingBag,
  Star,
  UtensilsCrossed,
} from "lucide-react";

const offers = [
  {
    id: 1,
    title: "50% OFF",
    subtitle: "On your first order",
    description:
      "Get flat 50% off on your first FoodFlick order. Delicious food at an amazing price.",
    code: "FIRST50",
    discount: "50% OFF",
    maxDiscount: "Up to ₹150",
    minOrder: "Minimum order ₹299",
    color: "from-green-600 to-emerald-500",
    icon: Gift,
  },
  {
    id: 2,
    title: "₹100 OFF",
    subtitle: "On orders above ₹399",
    description:
      "Save ₹100 on every order of ₹399 or more from selected top-rated restaurants.",
    code: "TASTY100",
    discount: "₹100 OFF",
    maxDiscount: "Flat ₹100",
    minOrder: "Minimum order ₹399",
    color: "from-blue-600 to-cyan-500",
    icon: Percent,
  },
  {
    id: 3,
    title: "FREE DELIVERY",
    subtitle: "For next 7 days",
    description:
      "Order from any restaurant without delivery charges. Valid for the next 7 days.",
    code: "FREEDEL",
    discount: "Free Delivery",
    maxDiscount: "No Delivery Fee",
    minOrder: "Minimum order ₹199",
    color: "from-orange-500 to-amber-500",
    icon: Flame,
  },
  {
    id: 4,
    title: "40% OFF",
    subtitle: "Weekend Special Deal",
    description:
      "Enjoy your weekend with great food and up to 40% discount on all your favorites.",
    code: "WEEKEND40",
    discount: "40% OFF",
    maxDiscount: "Up to ₹120",
    minOrder: "Minimum order ₹349",
    color: "from-purple-600 to-indigo-500",
    icon: UtensilsCrossed,
  },
  {
    id: 5,
    title: "BUY 1 GET 1",
    subtitle: "On selected pizzas & burgers",
    description:
      "Order your favorite burger or pizza and get another one absolutely free.",
    code: "BOGOFOOD",
    discount: "BOGO Deal",
    maxDiscount: "Free Item",
    minOrder: "Selected Items",
    color: "from-rose-500 to-pink-500",
    icon: ShoppingBag,
  },
  {
    id: 6,
    title: "25% CASHBACK",
    subtitle: "Pay with UPI or Card",
    description:
      "Get up to 25% cashback on your wallet when you pay using UPI or Credit Card.",
    code: "CASHBACK25",
    discount: "25% Cashback",
    maxDiscount: "Up to ₹75",
    minOrder: "Minimum order ₹249",
    color: "from-teal-600 to-emerald-500",
    icon: Star,
  },
];

const restaurants = [
  {
    name: "The Food Factory",
    cuisine: "North Indian • Chinese",
    rating: 4.8,
    offer: "50% OFF up to ₹100",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pizza Corner",
    cuisine: "Pizza • Fast Food",
    rating: 4.6,
    offer: "Buy 1 Get 1 Free",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Biryani Palace",
    cuisine: "Biryani • Mughlai",
    rating: 4.9,
    offer: "Flat ₹125 OFF",
    image:
      "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?a=1&b=1&s=612x612&w=0&k=20&c=a8j_p9BkWtsSX7WkcqeetigH8PYWXGayIGto9GiehNY=",
  },
];

const Offer = () => {
  const [copiedCode, setCopiedCode] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);

    setTimeout(() => {
      setCopiedCode("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-emerald-500">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-green-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Tag size={17} />
                Exclusive FoodFlick Deals
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Delicious Food.
                <span className="block text-green-200">
                  Amazing Offers.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-green-50 sm:text-lg">
                Save more on every order with exclusive FoodFlick offers,
                special discounts, and coupon codes for your favorite dishes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#offers"
                  className="rounded-xl bg-white px-6 py-3.5 font-bold text-green-700 shadow-lg transition hover:bg-green-50"
                >
                  Explore Offers
                </a>

                <a
                  href="#restaurants"
                  className="rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Restaurant Deals
                </a>
              </div>
            </div>

            {/* Hero Deal Card */}
            <div className="relative">
              <div className="relative mx-auto max-w-md rounded-3xl bg-white p-6 shadow-2xl">
                <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                        Limited Time Offer
                      </p>
                      <h3 className="mt-1 text-3xl font-black">
                        FLAT 50% OFF
                      </h3>
                      <p className="mt-1 text-sm text-white/90">
                        On your first 3 food orders
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/20 p-3">
                      <Gift size={32} />
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Use Coupon Code</span>
                    <span className="font-extrabold text-green-700">
                      FOODFLICK50
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Min Order Value</span>
                    <span className="font-bold text-gray-900">₹249</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Valid Till</span>
                    <span className="font-bold text-gray-900">
                      Sunday, Midnight
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy("FOODFLICK50")}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-bold text-white transition hover:bg-green-700"
                >
                  {copiedCode === "FOODFLICK50" ? (
                    <>
                      <Check size={18} />
                      Code Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copy Code: FOODFLICK50
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OFFER SECTION ================= */}
      <section id="offers" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            <Tag size={16} />
            Today's Best Deals
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Grab Your Favourite Offers
          </h2>

          <p className="mt-4 text-gray-600">
            Choose an offer, copy the coupon code, and enjoy delicious food
            for less.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => {
            const Icon = offer.icon;

            return (
              <div
                key={offer.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`relative bg-gradient-to-r ${offer.color} p-6 text-white`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-4xl font-black">{offer.title}</p>
                      <p className="mt-1 font-medium text-white/90">
                        {offer.subtitle}
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                      <Icon size={28} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="min-h-[48px] text-sm leading-6 text-gray-600">
                    {offer.description}
                  </p>

                  <div className="mt-5 space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Maximum discount</span>
                      <span className="font-bold text-gray-900">
                        {offer.maxDiscount}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Order value</span>
                      <span className="font-bold text-gray-900">
                        {offer.minOrder}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-dashed border-green-300 bg-green-50 p-3">
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">Coupon Code</p>
                      <p className="font-black tracking-wider text-green-700">
                        {offer.code}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy(offer.code)}
                      className="rounded-lg bg-green-600 px-3 py-2 text-sm font-bold text-white transition hover:bg-green-700"
                    >
                      {copiedCode === offer.code ? (
                        <span className="flex items-center gap-1">
                          <Check size={15} />
                          Copied
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Copy size={15} />
                          Copy
                        </span>
                      )}
                    </button>
                  </div>

                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 font-bold text-white transition hover:bg-green-600">
                    Order Now
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= RESTAURANT OFFERS ================= */}
      <section
        id="restaurants"
        className="border-y border-gray-200 bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                <Flame size={16} />
                Trending Deals
              </span>

              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Offers From Top Restaurants
              </h2>

              <p className="mt-3 max-w-xl text-gray-600">
                Discover restaurants near you with exclusive FoodFlick
                discounts.
              </p>
            </div>

            <button className="flex items-center gap-2 font-bold text-green-600 transition hover:text-green-700">
              View All
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.name}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute left-4 top-4 rounded-lg bg-green-600 px-3 py-1.5 text-sm font-bold text-white shadow-lg">
                    {restaurant.offer}
                  </div>

                  <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-lg bg-white px-2.5 py-1.5 text-sm font-bold shadow-lg">
                    <Star size={15} className="fill-yellow-400 text-yellow-400" />
                    {restaurant.rating}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold">{restaurant.name}</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {restaurant.cuisine}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={16} className="text-green-600" />
                    Available near you
                  </div>

                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-green-600 py-3 font-bold text-green-600 transition hover:bg-green-600 hover:text-white">
                    Order Now
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <span className="font-bold text-green-600">HOW IT WORKS</span>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Save Money in 3 Simple Steps
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-black text-green-700">
              01
            </div>

            <h3 className="mt-5 text-xl font-bold">Choose an Offer</h3>

            <p className="mt-3 leading-6 text-gray-600">
              Browse our latest discounts and select the offer that works for
              your order.
            </p>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-black text-green-700">
              02
            </div>

            <h3 className="mt-5 text-xl font-bold">Copy Coupon Code</h3>

            <p className="mt-3 leading-6 text-gray-600">
              Copy the coupon code and apply it during checkout before placing
              your order.
            </p>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-black text-green-700">
              03
            </div>

            <h3 className="mt-5 text-xl font-bold">Enjoy Your Savings</h3>

            <p className="mt-3 leading-6 text-gray-600">
              Place your order and enjoy delicious food with your exclusive
              FoodFlick discount.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 to-emerald-500 px-8 py-12 text-center text-white shadow-xl sm:px-12">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
              <ShoppingBag size={30} />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Hungry for More Savings?
            </h2>

            <p className="mt-4 text-green-50">
              Explore restaurants, discover delicious meals, and unlock
              exclusive FoodFlick offers today.
            </p>

            <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-green-700 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              Start Ordering
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
