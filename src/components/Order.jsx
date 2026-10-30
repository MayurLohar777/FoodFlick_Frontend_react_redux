
import React, { useState } from "react";
import {
  Search,
  MapPin,
  Clock3,
  CheckCircle2,
  Package,
  Truck,
  XCircle,
  ChevronRight,
  RotateCcw,
  Star,
  ShoppingBag,
  Phone,
  Receipt,
  CalendarDays,
  UtensilsCrossed,
} from "lucide-react";

const ordersData = [
  {
    id: "FF-20261005-001",
    restaurant: "Spice Garden",
    restaurantType: "North Indian • Biryani",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    date: "5 Oct 2026",
    time: "12:35 PM",
    status: "On the way",
    statusType: "active",
    items: [
      {
        name: "Chicken Biryani",
        quantity: 1,
        price: 249,
      },
      {
        name: "Butter Naan",
        quantity: 2,
        price: 80,
      },
      {
        name: "Paneer Tikka",
        quantity: 1,
        price: 180,
      },
    ],
    subtotal: 509,
    deliveryFee: 30,
    discount: 50,
    total: 489,
    estimatedTime: "20–25 min",
    address: "Vesu, Surat, Gujarat",
    deliveryPartner: "Rahul",
  },

  {
    id: "FF-20261003-024",
    restaurant: "Pizza House",
    restaurantType: "Pizza • Italian",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    date: "3 Oct 2026",
    time: "8:15 PM",
    status: "Delivered",
    statusType: "delivered",
    items: [
      {
        name: "Farmhouse Pizza",
        quantity: 1,
        price: 299,
      },
      {
        name: "Garlic Bread",
        quantity: 1,
        price: 129,
      },
    ],
    subtotal: 428,
    deliveryFee: 30,
    discount: 75,
    total: 383,
    estimatedTime: "Delivered",
    address: "Vesu, Surat, Gujarat",
  },

  {
    id: "FF-20260929-018",
    restaurant: "Urban Tadka",
    restaurantType: "Indian • Chinese",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    date: "29 Sep 2026",
    time: "1:05 PM",
    status: "Delivered",
    statusType: "delivered",
    items: [
      {
        name: "Paneer Butter Masala",
        quantity: 1,
        price: 220,
      },
      {
        name: "Garlic Naan",
        quantity: 2,
        price: 90,
      },
      {
        name: "Jeera Rice",
        quantity: 1,
        price: 150,
      },
    ],
    subtotal: 460,
    deliveryFee: 30,
    discount: 100,
    total: 390,
    estimatedTime: "Delivered",
    address: "Citylight, Surat, Gujarat",
  },

  {
    id: "FF-20260922-011",
    restaurant: "Burger Point",
    restaurantType: "Burgers • Fast Food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    date: "22 Sep 2026",
    time: "7:45 PM",
    status: "Cancelled",
    statusType: "cancelled",
    items: [
      {
        name: "Classic Cheese Burger",
        quantity: 2,
        price: 199,
      },
    ],
    subtotal: 398,
    deliveryFee: 30,
    discount: 0,
    total: 428,
    estimatedTime: "Cancelled",
    address: "Adajan, Surat, Gujarat",
  },
];

const tabs = [
  {
    label: "All Orders",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Delivered",
    value: "delivered",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
];

const Order = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedOrder, setExpandedOrder] = useState(null);

  const filteredOrders = ordersData.filter((order) => {
    const matchesTab =
      activeTab === "all" || order.statusType === activeTab;

    const searchValue = searchTerm.toLowerCase();

    const matchesSearch =
      order.restaurant.toLowerCase().includes(searchValue) ||
      order.id.toLowerCase().includes(searchValue) ||
      order.items.some((item) =>
        item.name.toLowerCase().includes(searchValue)
      );

    return matchesTab && matchesSearch;
  });

  const toggleOrder = (id) => {
    setExpandedOrder(expandedOrder === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-600">
                <ShoppingBag size={17} />
                FoodFlick Orders
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                My Orders
              </h1>

              <p className="mt-2 text-gray-500">
                Track your current orders and view your previous orders.
              </p>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-bold text-white shadow-sm transition hover:bg-green-700">
              <UtensilsCrossed size={18} />
              Order Food
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* ===================================================
            ORDER STATISTICS
        ==================================================== */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Orders
                </p>

                <p className="mt-2 text-3xl font-black text-gray-900">
                  24
                </p>
              </div>

              <div className="rounded-xl bg-green-100 p-3 text-green-600">
                <ShoppingBag size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Active Orders
                </p>

                <p className="mt-2 text-3xl font-black text-gray-900">
                  1
                </p>
              </div>

              <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
                <Truck size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Delivered
                </p>

                <p className="mt-2 text-3xl font-black text-gray-900">
                  21
                </p>
              </div>

              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <CheckCircle2 size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Cancelled
                </p>

                <p className="mt-2 text-3xl font-black text-gray-900">
                  2
                </p>
              </div>

              <div className="rounded-xl bg-red-100 p-3 text-red-600">
                <XCircle size={22} />
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            SEARCH + TABS
        ==================================================== */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search restaurant, order or food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
              />
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto rounded-xl bg-gray-100 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                    activeTab === tab.value
                      ? "bg-white text-green-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================
            ORDERS
        ==================================================== */}
        <div className="mt-6 space-y-5">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => {
              const isExpanded = expandedOrder === order.id;

              return (
                <div
                  key={order.id}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  {/* =========================================
                      ORDER TOP
                  ========================================== */}
                  <div className="border-b border-gray-100 p-5 sm:p-6">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex gap-4">
                        <img
                          src={order.image}
                          alt={order.restaurant}
                          className="h-20 w-20 rounded-xl object-cover"
                        />

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="text-lg font-bold text-gray-900">
                              {order.restaurant}
                            </h2>

                            <span
                              className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                                order.statusType === "active"
                                  ? "bg-orange-100 text-orange-700"
                                  : order.statusType === "delivered"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>

                          <p className="mt-1 text-sm text-gray-500">
                            {order.restaurantType}
                          </p>

                          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <CalendarDays size={14} />
                              {order.date}
                            </span>

                            <span className="flex items-center gap-1">
                              <Clock3 size={14} />
                              {order.time}
                            </span>

                            <span>
                              Order #{order.id}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-6 lg:justify-end">
                        <div className="text-left lg:text-right">
                          <p className="text-xs text-gray-500">
                            Total Amount
                          </p>

                          <p className="mt-1 text-xl font-black text-gray-900">
                            ₹{order.total}
                          </p>
                        </div>

                        <button
                          onClick={() => toggleOrder(order.id)}
                          className="rounded-xl border border-gray-200 p-3 text-gray-500 transition hover:border-green-300 hover:bg-green-50 hover:text-green-600"
                        >
                          <ChevronRight
                            size={20}
                            className={`transition-transform ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* =========================================
                      ACTIVE ORDER TRACKING
                  ========================================== */}
                  {order.statusType === "active" && (
                    <div className="bg-green-50 px-5 py-5 sm:px-6">
                      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-green-700">
                            <Truck size={19} />

                            <span className="font-bold">
                              Your order is on the way
                            </span>
                          </div>

                          <p className="mt-1 text-sm text-gray-600">
                            Estimated delivery in{" "}
                            <span className="font-bold text-gray-900">
                              {order.estimatedTime}
                            </span>
                          </p>
                        </div>

                        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700">
                          <MapPin size={17} />
                          Track Order
                        </button>
                      </div>

                      {/* Progress */}
                      <div className="mt-6 hidden md:block">
                        <div className="relative">
                          <div className="absolute left-0 right-0 top-4 h-1 rounded-full bg-green-200" />

                          <div className="absolute left-0 top-4 h-1 w-3/4 rounded-full bg-green-600" />

                          <div className="relative flex justify-between">
                            <div className="flex flex-col items-start">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white">
                                <CheckCircle2 size={18} />
                              </div>

                              <span className="mt-2 text-xs font-bold text-green-700">
                                Confirmed
                              </span>
                            </div>

                            <div className="flex flex-col items-center">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white">
                                <Package size={18} />
                              </div>

                              <span className="mt-2 text-xs font-bold text-green-700">
                                Preparing
                              </span>
                            </div>

                            <div className="flex flex-col items-center">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white">
                                <Truck size={18} />
                              </div>

                              <span className="mt-2 text-xs font-bold text-green-700">
                                On the way
                              </span>
                            </div>

                            <div className="flex flex-col items-end">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-green-200 bg-white text-green-300">
                                <CheckCircle2 size={18} />
                              </div>

                              <span className="mt-2 text-xs font-medium text-gray-400">
                                Delivered
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* =========================================
                      EXPANDED ORDER DETAILS
                  ========================================== */}
                  {isExpanded && (
                    <div className="border-t border-gray-100 bg-gray-50 p-5 sm:p-6">
                      <div className="grid gap-6 lg:grid-cols-3">
                        {/* Items */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:col-span-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-900">
                              Order Items
                            </h3>

                            <span className="text-sm text-gray-500">
                              {order.items.length} items
                            </span>
                          </div>

                          <div className="mt-5 divide-y divide-gray-100">
                            {order.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-sm font-bold text-green-700">
                                    {item.quantity}x
                                  </div>

                                  <div>
                                    <p className="font-semibold text-gray-900">
                                      {item.name}
                                    </p>

                                    <p className="text-xs text-gray-400">
                                      ₹{item.price} each
                                    </p>
                                  </div>
                                </div>

                                <p className="font-bold text-gray-900">
                                  ₹{item.price * item.quantity}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bill */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-5">
                          <div className="flex items-center gap-2">
                            <Receipt
                              size={18}
                              className="text-green-600"
                            />

                            <h3 className="font-bold text-gray-900">
                              Bill Details
                            </h3>
                          </div>

                          <div className="mt-5 space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-500">
                                Subtotal
                              </span>

                              <span className="font-medium">
                                ₹{order.subtotal}
                              </span>
                            </div>

                            <div className="flex justify-between">
                              <span className="text-gray-500">
                                Delivery Fee
                              </span>

                              <span className="font-medium">
                                ₹{order.deliveryFee}
                              </span>
                            </div>

                            <div className="flex justify-between">
                              <span className="text-gray-500">
                                Discount
                              </span>

                              <span className="font-medium text-green-600">
                                -₹{order.discount}
                              </span>
                            </div>

                            <div className="border-t border-dashed border-gray-200 pt-3">
                              <div className="flex justify-between">
                                <span className="font-bold text-gray-900">
                                  Total
                                </span>

                                <span className="text-lg font-black text-gray-900">
                                  ₹{order.total}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom details */}
                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border border-gray-200 bg-white p-5">
                          <div className="flex items-start gap-3">
                            <div className="rounded-xl bg-green-100 p-2.5 text-green-600">
                              <MapPin size={18} />
                            </div>

                            <div>
                              <p className="text-sm font-bold text-gray-900">
                                Delivery Address
                              </p>

                              <p className="mt-1 text-sm text-gray-500">
                                {order.address}
                              </p>
                            </div>
                          </div>
                        </div>

                        {order.deliveryPartner && (
                          <div className="rounded-2xl border border-gray-200 bg-white p-5">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                                  {order.deliveryPartner.charAt(0)}
                                </div>

                                <div>
                                  <p className="text-sm text-gray-500">
                                    Delivery Partner
                                  </p>

                                  <p className="font-bold text-gray-900">
                                    {order.deliveryPartner}
                                  </p>
                                </div>
                              </div>

                              <button className="rounded-xl bg-green-50 p-3 text-green-600 transition hover:bg-green-100">
                                <Phone size={18} />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="mt-6 flex flex-wrap gap-3">
                        {order.statusType === "active" && (
                          <button className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700">
                            <MapPin size={17} />
                            Track Order
                          </button>
                        )}

                        {order.statusType === "delivered" && (
                          <>
                            <button className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700">
                              <RotateCcw size={17} />
                              Reorder
                            </button>

                            <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-green-300 hover:text-green-600">
                              <Star size={17} />
                              Rate Order
                            </button>
                          </>
                        )}

                        <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-green-300 hover:text-green-600">
                          <Receipt size={17} />
                          View Invoice
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            /* ===============================================
               EMPTY STATE
            ================================================ */
            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                <ShoppingBag size={28} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                No orders found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                We couldn't find any orders matching your search or selected
                category.
              </p>

              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveTab("all");
                }}
                className="mt-6 rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700"
              >
                View All Orders
              </button>
            </div>
          )}
        </div>

        {/* ===================================================
            NEED HELP
        ==================================================== */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-500 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-green-100">
                Need help with your order?
              </p>

              <h3 className="mt-1 text-2xl font-extrabold">
                We're here for you.
              </h3>

              <p className="mt-2 text-sm text-green-50">
                Contact FoodFlick support if you have any questions about your
                order.
              </p>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-green-700 transition hover:bg-green-50">
              Contact Support
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Order;
