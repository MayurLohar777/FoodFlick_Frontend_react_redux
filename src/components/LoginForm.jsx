
import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  UtensilsCrossed,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { LoginSchema } from "../validation/validation";
import { setCredentials } from "../features/AuthFeatures/authSlice";
import { getRegisterUsers } from "../services/authService";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: LoginSchema,

    onSubmit: (values, { resetForm, setFieldError }) => {
      const users = getRegisterUsers();

      const foundUser = users.find(
        (user) =>
          user.email?.toLowerCase().trim() ===
            values.email.toLowerCase().trim() &&
          user.password === values.password
      );

      if (!foundUser) {
        setFieldError("email", "Invalid email or password");
        return;
      }

      // Store the actual registered user in Redux
      
const sessionUser = {
  id: foundUser.id || Date.now(),
  username: foundUser.username || foundUser.name || "User",
  email: foundUser.email,
};

localStorage.setItem("auth_user", JSON.stringify(sessionUser));
dispatch(setCredentials(sessionUser));

resetForm();
navigate("/home");
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

        <div className="grid lg:grid-cols-2">

          {/* =====================================================
              LEFT SIDE - FOODFlick BRANDING
          ====================================================== */}
          <div className="hidden lg:flex relative bg-gradient-to-br from-green-700 via-green-600 to-green-500 p-12 text-white overflow-hidden">

            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full" />

            <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-white/10 rounded-full" />

            <div className="relative z-10 flex flex-col justify-between w-full">

              {/* Logo */}
              <div>
                <div className="flex items-center gap-3 mb-12">

                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                    <UtensilsCrossed className="w-6 h-6 text-green-700" />
                  </div>

                  <div>
                    <h1 className="text-2xl font-bold">
                      FoodFlick
                    </h1>

                    <p className="text-xs text-green-100">
                      Deliciousness Delivered
                    </p>
                  </div>

                </div>

                <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
                  Your favorite food,
                  <br />
                  just a flick away.
                </h2>

                <p className="text-green-50 text-lg leading-relaxed max-w-md">
                  Discover delicious meals from your favorite restaurants
                  and get them delivered straight to your doorstep.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mt-12">

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-200" />
                  <span className="text-green-50">
                    Thousands of delicious dishes
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-200" />
                  <span className="text-green-50">
                    Fast and reliable delivery
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-200" />
                  <span className="text-green-50">
                    Secure and easy ordering
                  </span>
                </div>

              </div>

            </div>
          </div>


          {/* =====================================================
              RIGHT SIDE - LOGIN FORM
          ====================================================== */}
          <div className="p-6 sm:p-10 lg:p-12">

            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center justify-center gap-3 mb-8">

              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-green-700" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  FoodFlick
                </h1>

                <p className="text-xs text-gray-500">
                  Deliciousness Delivered
                </p>
              </div>

            </div>


            {/* Heading */}
            <div className="mb-8">

              <p className="text-sm font-semibold text-green-600 mb-2">
                WELCOME BACK 👋
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Login to your account
              </h2>

              <p className="text-gray-500">
                Enter your details to continue ordering your favorite food.
              </p>

            </div>


            {/* Form */}
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-5"
            >

              {/* =================================================
                  EMAIL
              ================================================== */}
              <div>

                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <div
                  className={`relative ${
                    formik.touched.email && formik.errors.email
                      ? "mb-1"
                      : ""
                  }`}
                >

                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full h-14 pl-12 pr-4 rounded-xl border bg-gray-50 outline-none transition-all duration-200
                      ${
                        formik.touched.email && formik.errors.email
                          ? "border-red-400 focus:ring-4 focus:ring-red-100"
                          : "border-gray-200 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                      }
                    `}
                  />

                </div>

                {formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {formik.errors.email}
                  </p>
                )}

              </div>


              {/* =================================================
                  PASSWORD
              ================================================== */}
              <div>

                <div className="flex items-center justify-between mb-2">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
                  >
                    Forgot password?
                  </Link>

                </div>

                <div className="relative">

                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full h-14 pl-12 pr-12 rounded-xl border bg-gray-50 outline-none transition-all duration-200
                      ${
                        formik.touched.password &&
                        formik.errors.password
                          ? "border-red-400 focus:ring-4 focus:ring-red-100"
                          : "border-gray-200 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                      }
                    `}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                </div>

                {formik.touched.password &&
                  formik.errors.password && (
                    <p className="text-sm text-red-500 mt-1">
                      {formik.errors.password}
                    </p>
                  )}

              </div>


              {/* =================================================
                  REMEMBER ME
              ================================================== */}
              <div className="flex items-center gap-2">

                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 accent-green-600 cursor-pointer"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-500 cursor-pointer"
                >
                  Remember me
                </label>

              </div>


              {/* =================================================
                  LOGIN BUTTON
              ================================================== */}
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="group w-full h-14 rounded-xl bg-gradient-to-r from-green-700 to-green-500 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 hover:shadow-green-600/30 hover:from-green-800 hover:to-green-600 active:scale-[0.98] transition-all duration-200 disabled:opacity-60"
              >
                Login

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>


              {/* =================================================
                  DIVIDER
              ================================================== */}
              <div className="flex items-center gap-4 py-2">

                <div className="h-px bg-gray-200 flex-1" />

                <span className="text-xs font-medium text-gray-400">
                  OR
                </span>

                <div className="h-px bg-gray-200 flex-1" />

              </div>


              {/* =================================================
                  REGISTER
              ================================================== */}
              <p className="text-center text-sm text-gray-500">

                Don't have an account?{" "}

                <Link
                  to="/register"
                  className="font-bold text-green-600 hover:text-green-700 hover:underline"
                >
                  Create an account
                </Link>

              </p>

            </form>


            {/* Footer */}
            <p className="text-center text-xs text-gray-400 mt-8">
              © {new Date().getFullYear()} FoodFlick. All rights reserved.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LoginForm;
