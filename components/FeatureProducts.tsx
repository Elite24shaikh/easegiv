"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import bgImage from "@/assets/hhd.png";
import PulloverHoodie from "@/assets/for weboste/Images/Apparels/jackets/Pullover Hoodie/pullover hoodie.png";
import CBag from "@/assets/for weboste/Images/ecofriendly multipurpose bags/Cotton bag.png";
import Pen from "@/assets/for weboste/Images/pens/Crystal pen with keychain combo.png";
import Pb from "@/assets/for weboste/Images/Powerbanks/Digital display powerbank.png";
import laptop from "@/assets/for weboste/Images/Laptop Backpacks/Harrison trolley laptop bag.jpeg";
import zipperh from "@/assets/for weboste/Images/Apparels/jackets/Zipper hoodie/white zipper hoodie.png";
import dryfit from "@/assets/for weboste/Images/Apparels/Apparels/Tshirt/Dry Fit  Sports T-Shirt/Dry Fit Half Sleeve Tshirt.jpg";
import cpham from "@/assets/for weboste/Images/Corporate Hamper/Corporate Hamper/4 in 1 combo Gift set Blue - pen,  Keychain,  Diary and  Vacuum flask.jpg";
import festivegift from "@/assets/for weboste/Images/Festive Collection/Festive Collection/Eco-Friendly Gifts/Plantable Recycled Paper Pens with Free Reusable Box.jpg";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function FeatureProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "Powerbank Diary",
      href: "lixtanetwork.com",
      image: bgImage,
    },
    {
      id: 2,
      name: "Hoodie",
      href: "https://example.com/hoodie",
      image: PulloverHoodie,
    },
    {
      id: 3,
      name: "Cotton Bags",
      href: "https://example.com/cotton-bags",
      image: CBag,
    },
    {
      id: 4,
      name: "Pens",
      href: "https://lixtanetwork.com",
      image: Pen,
    },
    {
      id: 5,
      name: "Powerbank Diary",
      href: "https://example.com/powerbank-diary-2",
      image: Pb,
    },
    {
      id: 6,
      name: "Printed Mug",
      href: "https://example.com/printed-mug",
      image: laptop,
    },
    {
      id: 7,
      name: "white zipper hoodie",
      href: "https://example.com/white-zipper-hoodie",
      image: zipperh,
    },
    {
      id: 8,
      name: "Corporate Hamper",
      href: "https://example.com/corporate-hamper",
      image: cpham,
    },
    {
      id: 9,
      name: "dryfit",
      href: "https://example.com/dryfit",
      image: dryfit,
    },
    {
      id: 10,
      name: "festive gift",
      href: "https://example.com/festive-gift",
      image: festivegift,
    },
  ];

  type Product = {
    id: number;
    name: string;
    href: string;
    image: typeof bgImage;
  };
  
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (hoveredProduct) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hoveredProduct]);

  const handleProductClick = (href: string) => {
    if (href) {
      // Check if it's an external link
      if (href.startsWith('http://') || href.startsWith('https://')) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        // For internal links, you can use Next.js router
        window.location.href = href;
      }
    }
  };

  return (
    <section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold text-gray-900 text-center"
      >
        Featured Products
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 p-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative cursor-pointer"
            onMouseEnter={() => setHoveredProduct(product)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => handleProductClick(product.href)}
          >
            <img
              alt={product.name}
              src={product.image.src}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover
                       transition-transform duration-300 ease-in-out
                       group-hover:scale-110 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-xl text-gray-700">
                  <span className="hover:underline">
                    {product.name}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {hoveredProduct && (
        <div
          className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2
                     bg-orange-500 text-white p-4 rounded-xl shadow-lg transition-opacity duration-200"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        >
          <div className="text-center">
            <p className="text-md opacity-90 mt-1">View Product</p>
          </div>
        </div>
      )}
    </section>
  );
}