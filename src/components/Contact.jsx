
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const contactCards = [
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Need help with an order or account? Our support team is ready to help.",
      value: "Available 24/7",
      link: "#contact-form",
    },
    {
      icon: Mail,
      title: "Email Us",
      description:
        "Send us your questions, feedback, or business enquiries.",
      value: "support@foodflick.com",
      link: "mailto:support@foodflick.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description:
        "Speak directly with our customer support team for assistance.",
      value: "+91 1800 123 4567",
      link: "tel:+9118001234567",
    },
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "Once your order is confirmed, you can track its status from the Orders section of your account.",
    },
    {
      question: "Can I contact a restaurant directly?",
      answer:
        "Restaurant and order information is available through your order details and support options.",
    },
    {
      question: "How can I become a delivery partner?",
      answer:
        "Contact our team through the form above and select the delivery partner enquiry option.",
    },
    {
      question: "How can restaurants join FoodFlick?",
      answer:
        "Restaurants can contact our business team to learn about onboarding and restaurant management options.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-green-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:py-20 lg:px-8 lg:py-24">

          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            <Sparkles size={16} />
            We're here to help
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl">

            Let's talk about

            <span className="block text-green-600">
              FoodFlick.
            </span>

          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question, feedback, or need help with your order?
            Reach out to us and our team will be happy to help.
          </p>

        </div>

      </section>


      {/* =====================================================
          CONTACT CARDS
      ====================================================== */}

      <section className="bg-white py-16">

        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">

          {contactCards.map((card) => {

            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.link}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {card.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-green-600">
                  {card.value}
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>

              </a>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM + INFO
      ====================================================== */}

      <section
        id="contact-form"
        className="bg-gray-50 py-20"
      >

        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5 lg:px-8">

          {/* LEFT INFO */}

          <div className="lg:col-span-2">

            <p className="text-sm font-bold uppercase tracking-wider text-green-600">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              We'd love to hear from you.
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              Whether you have a question about an order, want to share
              feedback, or are interested in partnering with FoodFlick,
              send us a message.
            </p>


            {/* Information */}

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Our Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Ahmedabad, Gujarat
                    <br />
                    India
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    support@foodflick.com
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Clock3 size={20} />
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Support Hours
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Monday - Sunday
                    <br />
                    24 hours
                  </p>
                </div>

              </div>

            </div>


            {/* Trust Card */}

            <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-5">

              <div className="flex gap-3">

                <ShieldCheck
                  size={22}
                  className="shrink-0 text-green-600"
                />

                <div>
                  <p className="font-bold text-gray-900">
                    Your privacy matters
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Your information is handled securely and used only
                    to help us respond to your enquiry.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT FORM */}

          <div className="lg:col-span-3">

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

              {submitted ? (

                <div className="flex min-h-[480px] flex-col items-center justify-center text-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 size={42} />
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-gray-900">
                    Message sent successfully!
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-gray-500">
                    Thank you for reaching out to FoodFlick. Our team
                    will review your message and get back to you soon.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      Send us a message
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Fill out the form and we'll get back to you.
                    </p>
                  </div>


                  {/* Name + Email */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      />
                    </div>


                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                      />
                    </div>

                  </div>


                  {/* Subject */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Subject
                    </label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                    >
                      <option value="">
                        Select an enquiry type
                      </option>

                      <option value="order">
                        Order Support
                      </option>

                      <option value="restaurant">
                        Restaurant Enquiry
                      </option>

                      <option value="delivery">
                        Delivery Partner
                      </option>

                      <option value="payment">
                        Payment Issue
                      </option>

                      <option value="feedback">
                        Feedback
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>

                  </div>


                  {/* Message */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={6}
                      required
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                    />

                  </div>


                  {/* Submit */}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-lg shadow-green-100 transition hover:bg-green-700"
                  >
                    Send Message
                    <Send size={18} />
                  </button>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-4xl px-5 lg:px-8">

          <div className="text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600">
              <MessageCircle size={25} />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-wider text-green-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How can we help?
            </h2>

          </div>


          <div className="mt-10 space-y-4">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-green-200"
              >

                <summary className="cursor-pointer list-none pr-5 font-bold text-gray-900 marker:hidden">
                  {faq.question}
                </summary>

                <p className="mt-3 border-t border-gray-100 pt-3 text-sm leading-7 text-gray-500">
                  {faq.answer}
                </p>

              </details>

            ))}

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
            Still have questions?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            Explore FoodFlick, discover restaurants, or reach out to
            our team whenever you need help.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/restaurants"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Explore Restaurants
              <ArrowRight size={18} />
            </Link>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-7 py-4 font-bold text-white transition hover:border-gray-500 hover:bg-gray-800"
            >
              Contact Support
              <MessageCircle size={18} />
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;
