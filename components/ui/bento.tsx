"use client";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Truck,
  Headphones,
  Shield,
  Star,
  Users,
  Gift,
} from "lucide-react";

export function CustomBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
      {bentoItems.map((item, i) => (
        <BentoCard key={i} {...item} />
      ))}
    </div>
  );
}

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  gradient?: string;
}

const BentoCard = ({
  title,
  description,
  icon,
  className = "",
  gradient = "",
}: BentoCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className={`group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm p-6 hover:bg-gray-800/50 transition-all duration-300 ${className}`}
  >
    {/* Background Gradient */}
    <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 ${gradient}`} />
    
    {/* Content */}
    <div className="relative z-10 flex flex-col h-full">
      {/* Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white/20 transition-all duration-300">
          {icon}
        </div>
      </div>
      
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-end">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
    
    {/* Hover Effect Border */}
    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-all duration-300" />
  </motion.div>
);

const bentoItems = [
  {
    title: "Premium Quality Products",
    description: "Explore our curated collection of high-quality products sourced from trusted manufacturers.",
    icon: <Star className="h-6 w-6" />,
    className: "md:col-span-1 min-h-[280px]",
    gradient: "bg-gradient-to-br from-yellow-500/20 to-orange-600/20"
  },
  {
    title: "Lightning Fast Delivery",
    description: "Experience the speed of our delivery network with same-day and next-day shipping options.",
    icon: <Truck className="h-6 w-6" />,
    className: "md:col-span-1 min-h-[280px]",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-600/20"
  },
  {
    title: "24/7 Customer Support",
    description: "Our dedicated support team is always here to help you with any questions or concerns.",
    icon: <Headphones className="h-6 w-6" />,
    className: "md:col-span-1 min-h-[280px]",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20"
  },
  {
    title: "Secure Shopping Experience",
    description: "Shop with confidence knowing that your personal information and payments are protected with industry-leading security measures.",
    icon: <Shield className="h-6 w-6" />,
    className: "md:col-span-2 min-h-[320px]",
    gradient: "bg-gradient-to-br from-red-500/20 to-pink-600/20"
  },
  {
    title: "Exclusive Member Benefits",
    description: "Join our community and unlock special discounts, early access to sales, and exclusive member-only products.",
    icon: <Gift className="h-6 w-6" />,
    className: "md:col-span-1 min-h-[320px]",
    gradient: "bg-gradient-to-br from-purple-500/20 to-indigo-600/20"
  },
  {
    title: "Trusted by Thousands",
    description: "Join over 50,000+ satisfied customers who trust us for their shopping needs.",
    icon: <Users className="h-6 w-6" />,
    className: "md:col-span-1 min-h-[240px]",
    gradient: "bg-gradient-to-br from-teal-500/20 to-cyan-600/20"
  },
  {
    title: "Easy Returns & Exchanges",
    description: "Not satisfied? No problem! We offer hassle-free returns and exchanges within 30 days of purchase.",
    icon: <ShoppingCart className="h-6 w-6" />,
    className: "md:col-span-2 min-h-[240px]",
    gradient: "bg-gradient-to-br from-violet-500/20 to-purple-600/20"
  },
];