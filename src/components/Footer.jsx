
import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  MessageCircle,
  Send,
  Play,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between lg:px-8">

          <div>
            <h2 className="text-2xl font-bold text-white">
              Stay in the loop
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-400">
              Subscribe to our newsletter and get updates about new
              products, exclusive offers and special discounts.
            </p>
          </div>

          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-indigo-500"
            />

            <button className="flex items-center gap-2 rounded-r-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
              Subscribe
              <ArrowRight size={17} />
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">

        {/* Brand */}
        <div className="lg:col-span-2">

          <Link to="/">
            <h2 className="text-2xl font-extrabold text-white">
              Shop<span className="text-indigo-500">Vault</span>
            </h2>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
            Your one-stop destination for quality products, modern
            designs and an effortless online shopping experience.
          </p>

          {/* Contact */}
          <div className="mt-6 space-y-3">

            <div className="flex items-center gap-3 text-sm">
              <MapPin size={17} className="text-indigo-500" />
              <span>Surat, Gujarat, India</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone size={17} className="text-indigo-500" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Mail size={17} className="text-indigo-500" />
              <span>support@shopvault.com</span>
            </div>

          </div>

          {/* Social / Community */}
          <div className="mt-6 flex gap-3">

            <a
              href="#"
              aria-label="Website"
              className="rounded-full bg-gray-900 p-2.5 transition hover:bg-indigo-600"
            >
              <Globe size={18} />
            </a>

            <a
              href="#"
              aria-label="Messages"
              className="rounded-full bg-gray-900 p-2.5 transition hover:bg-indigo-600"
            >
              <MessageCircle size={18} />
            </a>

            <a
              href="#"
              aria-label="Send"
              className="rounded-full bg-gray-900 p-2.5 transition hover:bg-indigo-600"
            >
              <Send size={18} />
            </a>

            <a
              href="#"
              aria-label="Videos"
              className="rounded-full bg-gray-900 p-2.5 transition hover:bg-indigo-600"
            >
              <Play size={18} />
            </a>

          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold text-white">
            Shop
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm">

            <Link to="/shop" className="transition hover:text-white">
              All Products
            </Link>

            <Link
              to="/categories/electronics"
              className="transition hover:text-white"
            >
              Electronics
            </Link>

            <Link
              to="/categories/clothing"
              className="transition hover:text-white"
            >
              Clothing
            </Link>

            <Link
              to="/categories/jewellery"
              className="transition hover:text-white"
            >
              Jewellery
            </Link>

            <Link
              to="/categories"
              className="transition hover:text-white"
            >
              Categories
            </Link>

          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-white">
            Customer Service
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm">

            <Link
              to="/contact"
              className="transition hover:text-white"
            >
              Contact Us
            </Link>

            <Link
              to="/shipping"
              className="transition hover:text-white"
            >
              Shipping & Delivery
            </Link>

            <Link
              to="/returns"
              className="transition hover:text-white"
            >
              Returns & Refunds
            </Link>

            <Link
              to="/faq"
              className="transition hover:text-white"
            >
              FAQ
            </Link>

            <Link
              to="/track-order"
              className="transition hover:text-white"
            >
              Track Order
            </Link>

          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white">
            Company
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm">

            <Link
              to="/about"
              className="transition hover:text-white"
            >
              About Us
            </Link>

            <Link
              to="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/careers"
              className="transition hover:text-white"
            >
              Careers
            </Link>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between lg:px-8">

          <p>
            © 2026 ShopVault. All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link
              to="/privacy"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              to="/cookies"
              className="transition hover:text-white"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
