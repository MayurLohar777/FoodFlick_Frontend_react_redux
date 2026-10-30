
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bike,
  Clock3,
  Heart,
  MapPin,
  ShieldCheck,
  Star,
  UtensilsCrossed,
  Users,
  ChefHat,
  ShoppingBag,
  Smartphone,
  Headphones,
  CheckCircle2,
  Target,
  Sparkles,
} from "lucide-react";

const About = () => {
  const roles = [
    {
      icon: Users,
      title: "For Customers",
      description:
        "Discover restaurants, explore menus, place orders, make secure payments, and track your food from preparation to delivery.",
    },
    {
      icon: ChefHat,
      title: "For Restaurants",
      description:
        "Manage restaurant details, menus, food items, prices, availability, and incoming orders from one centralized platform.",
    },
    {
      icon: Bike,
      title: "For Delivery Partners",
      description:
        "Receive delivery assignments, update delivery statuses, and keep customers informed throughout the delivery journey.",
    },
    {
      icon: ShieldCheck,
      title: "For Administrators",
      description:
        "Manage users, restaurants, orders, and important platform operations through a dedicated administration dashboard.",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      description:
        "Role-based authentication helps keep customer, restaurant, delivery, and admin accounts protected.",
    },
    {
      icon: ShoppingBag,
      title: "Easy Ordering",
      description:
        "Browse menus, select your favorite dishes, and place your order with a simple and intuitive experience.",
    },
    {
      icon: Bike,
      title: "Fast Delivery",
      description:
        "Connect customers with delivery partners and keep orders moving from restaurant to doorstep.",
    },
    {
      icon: MapPin,
      title: "Order Tracking",
      description:
        "Stay updated with order and delivery status throughout the complete food delivery journey.",
    },
    {
      icon: Headphones,
      title: "Better Experience",
      description:
        "A unified platform designed to make food ordering and management simple for everyone.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Enjoy a clean and responsive experience across desktop, tablet, and mobile devices.",
    },
  ];

  const stats = [
    {
      number: "4+",
      label: "User Roles",
    },
    {
      number: "10K+",
      label: "Restaurants",
    },
    {
      number: "50K+",
      label: "Happy Customers",
    },
    {
      number: "4.8",
      label: "Average Rating",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">

        {/* Decorative Background */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-green-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

          {/* LEFT */}

          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
              <Sparkles size={16} />
              About FoodFlick
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl">

              Food delivery,

              <span className="block text-green-600">
                made simpler.
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              FoodFlick is a modern food delivery management platform
              designed to connect customers, restaurants, delivery
              partners, and administrators in one seamless ecosystem.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/restaurants"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-200 transition hover:bg-green-700"
              >
                Explore Restaurants
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-bold text-gray-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                Contact Us
              </Link>

            </div>

          </div>


          {/* RIGHT */}

          <div className="relative">

            <div className="relative mx-auto max-w-lg overflow-hidden rounded-[35px] shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85"
                alt="FoodFlick restaurant food"
                className="h-[480px] w-full object-cover sm:h-[540px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


              {/* Floating Rating Card */}

              <div className="absolute left-5 right-5 top-5 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Star
                      size={22}
                      className="fill-green-600"
                    />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Loved by food lovers
                    </p>

                    <div className="mt-1 flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span className="text-sm font-semibold text-gray-700">
                        4.8/5 customer rating
                      </span>
                    </div>
                  </div>

                </div>

              </div>


              {/* Bottom Card */}

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Bike size={24} />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      From kitchen to doorstep
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Fast, simple and reliable delivery
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="border-b border-gray-100 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-100 px-5 py-10 lg:grid-cols-4 lg:px-8">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-4 text-center sm:px-8"
            >
              <p className="text-3xl font-extrabold text-green-600 sm:text-4xl">
                {stat.number}
              </p>

              <p className="mt-1 text-sm font-medium text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">

          {/* Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=85"
                alt="Restaurant"
                className="h-[480px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Heart
                    size={22}
                    className="fill-green-600"
                  />
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Made for food lovers
                  </p>

                  <p className="text-sm text-gray-500">
                    One order at a time
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Content */}

          <div>

            <p className="text-sm font-bold uppercase tracking-wider text-green-600">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Bringing the entire food delivery journey together.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              FoodFlick was designed to simplify the way people discover
              food and interact with restaurants. Instead of treating
              ordering, restaurant management, delivery, and administration
              as separate experiences, FoodFlick brings them together on
              one platform.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Customers can discover their favorite meals, restaurants can
              manage their businesses, delivery partners can handle assigned
              orders, and administrators can oversee the entire platform.
            </p>

            <div className="mt-7 space-y-4">

              {[
                "Simple and intuitive food ordering",
                "Role-based platform management",
                "Real-time order and delivery updates",
                "Secure and reliable user experience",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-green-600"
                  />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>
                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOUR USER ROLES
      ====================================================== */}

      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-wider text-green-600">
              One Platform
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Built for everyone involved
            </h2>

            <p className="mt-4 leading-7 text-gray-500">
              FoodFlick connects every important part of the food
              delivery ecosystem.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {roles.map((role) => {

              const Icon = role.icon;

              return (
                <div
                  key={role.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {role.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {role.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-wider text-green-600">
                Why FoodFlick
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Everything you need
              </h2>

            </div>

            <p className="max-w-lg text-sm leading-6 text-gray-500">
              Designed with modern technology and a user-first approach
              to provide a smooth food delivery experience.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-green-200 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ====================================================== */}

      <section className="bg-green-50 py-20">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-200">
            <Target size={30} />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-wider text-green-600">
            Our Mission
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Order easily. Manage efficiently. Deliver seamlessly.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Our goal is to create a simple, reliable, and connected food
            delivery ecosystem where customers get great food, restaurants
            grow their businesses, and delivery partners can work efficiently.
          </p>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-gray-900 py-20">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-white">
            <UtensilsCrossed size={30} />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            Ready to discover your next favorite meal?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            Explore restaurants, discover delicious food, and enjoy
            a seamless delivery experience with FoodFlick.
          </p>

          <Link
            to="/restaurants"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-bold text-white transition hover:bg-green-700"
          >
            Explore Restaurants
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default About;

