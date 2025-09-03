"use client";
import { motion } from "framer-motion";
import { CustomBentoGrid } from "@/components/ui/bento";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20">
        <CustomHeroSection />
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover what makes us different and why thousands of customers
              trust us
            </p>
          </div>
          <CustomFeatureCards />
        </div>
      </section>

      {/* Custom Bento Grid Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything we do is designed to provide you with the best shopping
              experience
            </p>
          </div>
          <CustomBentoGrid />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Our Story
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded with a vision to revolutionize online shopping, we've
              grown from a small startup to a trusted e-commerce platform
              serving thousands of customers worldwide. Our journey has been
              driven by innovation, quality, and an unwavering commitment to
              customer satisfaction.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Today, we continue to push boundaries, embrace new technologies,
              and create experiences that not only meet but exceed expectations.
              Join us on this exciting journey as we shape the future of
              e-commerce together.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Custom Hero Section Component
function CustomHeroSection() {
  const words =
    "We are a team of passionate individuals dedicated to bringing you the best products and services. Our journey started with a simple idea: to make quality accessible to everyone.";

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-6xl mx-auto px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-4xl lg:text-7xl font-bold text-slate-900 dark:text-white"
        >
          Welcome to{" "}
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            <img src={logo.src} alt="Logo" className="w-48 h-auto inline-block" />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            {words}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button
            size="lg"
            className="bg-slate-800 hover:bg-orange-600 text-white px-8 py-4"
          >
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4">
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      {/* <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" /> */}
    </div>
  );
}

// Custom Feature Cards Component
function CustomFeatureCards() {
  const features = [
    {
      title: "Premium Quality",
      description:
        "We source only the finest materials and products to ensure excellence in every purchase.",
    },
    {
      title: "Fast Delivery",
      description:
        "Lightning-fast shipping to get your orders delivered when you need them most.",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to help you with any questions or concerns.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="mt-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
