
import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Bike,
  Clock3,
  MapPin,
  Search,
  Star,
  ShieldCheck,
  UtensilsCrossed,
  ShoppingBag,
  Heart,
  ChefHat,
  Flame,
  ChevronRight,
} from "lucide-react";

const Home = () => {
  // =========================================================
  // FOOD CATEGORIES
  // =========================================================

  const categories = [
    {
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Burgers",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Biryani",
      image:
        "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?a=1&b=1&s=612x612&w=0&k=20&c=a8j_p9BkWtsSX7WkcqeetigH8PYWXGayIGto9GiehNY=",
    },
    {
      name: "Chinese",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Desserts",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Healthy",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // =========================================================
  // POPULAR FOODS
  // =========================================================

  const popularFoods = [
    {
      id: 1,
      name: "Margherita Pizza",
      restaurant: "La Pino's Kitchen",
      price: 299,
      rating: 4.8,
      time: "25-30 min",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Classic Cheese Burger",
      restaurant: "Burger House",
      price: 199,
      rating: 4.7,
      time: "20-25 min",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Chicken Biryani",
      restaurant: "Biryani Palace",
      price: 349,
      rating: 4.9,
      time: "30-35 min",
      image:
        "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?a=1&b=1&s=612x612&w=0&k=20&c=a8j_p9BkWtsSX7WkcqeetigH8PYWXGayIGto9GiehNY=",
    },
    {
      id: 4,
      name: "Veg Noodles",
      restaurant: "Dragon Bowl",
      price: 179,
      rating: 4.6,
      time: "20-25 min",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80",
    },
  ];

  // =========================================================
  // RESTAURANTS
  // =========================================================

  const restaurants = [
    {
      id: 1,
      name: "The Food Factory",
      cuisine: "North Indian • Chinese • Fast Food",
      rating: 4.8,
      time: "25-30 min",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Urban Tadka",
      cuisine: "Indian • Punjabi • Thali",
      rating: 4.7,
      time: "30-35 min",
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Pizza Corner",
      cuisine: "Pizza • Italian • Beverages",
      rating: 4.6,
      time: "20-25 min",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">

        {/* Decorative shapes */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-green-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

          {/* LEFT CONTENT */}

          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
              <Flame size={16} />
              India's favorite food delivery
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl">

              Delicious food,

              <span className="block text-green-600">
                delivered to you.
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Discover the best restaurants around you, order your
              favorite meals, and enjoy delicious food delivered
              straight to your doorstep.
            </p>


            {/* LOCATION SEARCH */}

            <div className="mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-gray-100 sm:flex-row">

              <div className="flex flex-1 items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">

                <MapPin
                  size={21}
                  className="shrink-0 text-green-600"
                />

                <input
                  type="text"
                  placeholder="Enter your delivery location"
                  className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                />

              </div>

              <Link
                to="/restaurants"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
              >
                <Search size={18} />
                Find Food
              </Link>

            </div>


            {/* STATS */}

            <div className="mt-10 flex flex-wrap gap-8">

              <div>
                <p className="text-2xl font-bold text-gray-900">
                  10K+
                </p>

                <p className="text-sm text-gray-500">
                  Restaurants
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">
                  50K+
                </p>

                <p className="text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">
                  4.8/5
                </p>

                <p className="text-sm text-gray-500">
                  Customer Rating
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT HERO IMAGE */}

          <div className="relative hidden lg:block">

            <div className="relative mx-auto h-[550px] w-full max-w-lg overflow-hidden rounded-[40px] shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85"
                alt="Delicious Food"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />


              {/* Floating Delivery Card */}

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                    <Bike className="text-green-600" />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Fast Delivery
                    </p>

                    <p className="text-sm text-gray-500">
                      Your food is on the way!
                    </p>
                  </div>

                  <span className="ml-auto rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                    25 min
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="border-b border-gray-100 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <Bike size={24} />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Fast Delivery
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Hot food at your doorstep
              </p>
            </div>

          </div>


          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <ShieldCheck size={24} />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Secure Payment
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Safe & trusted payments
              </p>
            </div>

          </div>


          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <ChefHat size={24} />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Quality Food
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                From trusted restaurants
              </p>
            </div>

          </div>


          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <Clock3 size={24} />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Live Tracking
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Track your order in real time
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="flex items-end justify-between">

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-green-600">
                Explore
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What are you craving?
              </h2>
            </div>

            <Link
              to="/categories"
              className="hidden items-center gap-2 font-semibold text-green-600 sm:flex"
            >
              View all
              <ArrowRight size={17} />
            </Link>

          </div>


          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">

            {categories.map((category) => (

              <Link
                key={category.name}
                to="/restaurants"
                className="group text-center"
              >

                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-md transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl sm:h-36 sm:w-36">

                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>

                <h3 className="mt-4 font-bold text-gray-800">
                  {category.name}
                </h3>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          POPULAR FOOD
      ====================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="flex items-end justify-between">

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-green-600">
                Customer favorites
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Popular near you
              </h2>
            </div>

            <Link
              to="/menu"
              className="hidden items-center gap-2 font-semibold text-green-600 sm:flex"
            >
              View all
              <ArrowRight size={17} />
            </Link>

          </div>


          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {popularFoods.map((food) => (

              <Link
                key={food.id}
                to={`/food/${food.id}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Image */}

                <div className="relative h-56 overflow-hidden bg-gray-100">

                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <button
                    type="button"
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-gray-600 shadow-md transition hover:text-red-500"
                  >
                    <Heart size={18} />
                  </button>

                </div>


                {/* Content */}

                <div className="p-5">

                  <div className="flex items-center gap-1">

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-sm font-semibold text-gray-700">
                      {food.rating}
                    </span>

                    <span className="text-xs text-gray-400">
                      • {food.time}
                    </span>

                  </div>


                  <h3 className="mt-2 line-clamp-1 text-lg font-bold text-gray-900">
                    {food.name}
                  </h3>


                  <p className="mt-1 text-sm text-gray-500">
                    {food.restaurant}
                  </p>


                  <div className="mt-4 flex items-center justify-between">

                    <p className="text-xl font-extrabold text-gray-900">
                      ₹{food.price}
                    </p>

                    <span className="rounded-lg bg-green-50 p-2 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                      <ShoppingBag size={18} />
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          RESTAURANTS
      ====================================================== */}

      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="flex items-end justify-between">

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-green-600">
                Top restaurants
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Restaurants you may like
              </h2>
            </div>

            <Link
              to="/restaurants"
              className="hidden items-center gap-2 font-semibold text-green-600 sm:flex"
            >
              Explore restaurants
              <ArrowRight size={17} />
            </Link>

          </div>


          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {restaurants.map((restaurant) => (

              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-sm font-bold text-gray-800 shadow">
                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {restaurant.rating}
                  </div>

                </div>


                <div className="p-5">

                  <h3 className="text-xl font-bold text-gray-900">
                    {restaurant.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {restaurant.cuisine}
                  </p>

                  <div className="mt-4 flex items-center justify-between">

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock3 size={16} />
                      {restaurant.time}
                    </div>

                    <ChevronRight
                      size={20}
                      className="text-green-600 transition group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OFFER BANNER
      ====================================================== */}

      <section className="px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 to-green-500">

          <div className="flex flex-col items-center justify-between gap-8 px-8 py-14 text-center md:flex-row md:px-14 md:text-left">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-green-100">
                <Flame size={16} />
                Limited Time Offer
              </div>

              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Get 50% OFF your first order
              </h2>

              <p className="mt-3 max-w-xl text-green-100">
                Sign up today and enjoy amazing food with an
                exclusive discount on your first FoodFlick order.
              </p>

            </div>


            <Link
              to="/restaurants"
              className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-green-700 shadow-lg transition hover:bg-gray-100"
            >
              Order Now
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-gray-900 py-20">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-white">
            <UtensilsCrossed size={30} />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            Hungry? Let's fix that.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Browse thousands of dishes from restaurants around you
            and get your favorite meal delivered to your doorstep.
          </p>

          <Link
            to="/restaurants"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-bold text-white transition hover:bg-green-700"
          >
            Explore Food
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;
