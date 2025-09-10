"use client"

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

// import penstand from "@/assets/for weboste/Images/all small categories/all small categories/Penstand/Penstand with world map.png";
// import ecopen from "@/assets/for weboste/Images/all small categories/all small categories/Penstand/Eco-Friendly Pen Stands/Cork Multi penstand with phone holder.png";
// import clockpen from "@/assets/for weboste/Images/all small categories/all small categories/Penstand/Multi-functional Pen Stands/RMX 14 Wooden Digital Clock with Pen stand.png";
// import cbtotebag from "@/assets/for weboste/Images/ecofriendly multipurpose bags/Black Cotton Tote bag.png";
import designer from "@/assets/for weboste/Images/Festive Collection/Festive Collection/Decor & Accessories/Designer lotus Wall hanging set.png";
import cphamper1 from "@/assets/for weboste/Images/Corporate Hamper/Corporate Hamper/Bambo gift set of 5 - Mug with lid, bottle, diary, pen, 2 in 1 keychain.jpg";
import cphamper2 from "@/assets/for weboste/Images/Corporate Hamper/Corporate Hamper/4 in 1 USB Set - Black colour Diary, Pen, Mug & 32 Gb USB Pendrive.jpg";
import cphamper3 from "@/assets/for weboste/Images/Corporate Hamper/Corporate Hamper/6 in 1 Gift set - Wooden Bottle, Mug, Pen, Keychain, Card Holder, wooden cover Notebook.jpg";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function PopularProducts() {
  const popularProducts = [
    // {
    //   id: 1,
    //   name: "Penstand With Map",
    //   image: penstand
    // },
    // {
    //   id: 2,
    //   name: "Eco Friendly Cork Multi Penstand",
    //   image: ecopen
    // },
    // {
    //   id: 3,
    //   name: "RMX 14 Wooden Digital Clock with Pen stand",
    //   image: clockpen
    // },
    // {
    //   id: 4,
    //   name: "Eco-friendly Cotton Black Tote Bag",
    //   image: cbtotebag
    // },
    {
      id: 5,
      name: "Designer Lotus Wall Hanging Set",
      image: designer,
    },
    {
      id: 6,
      name: "Bamboo Gift Set of 5",
      href: "",
      image: cphamper1,
    },
    {
      id: 7,
      name: "4 in 1 USB Set - Black colour Diary, Pen, Mug & 32 Gb USB Pendrive",
      href: "",
      image: cphamper2,
    },
    {
      id: 8,
      name: "6 in 1 Gift set - Wooden Bottle, Mug, Pen, Keychain, Card Holder, wooden cover Notebook",
      href: "",
      image: cphamper3,
    },
  ];

  type Product = {
    id: number;
    name: string;
    image: typeof designer; // or StaticImageData if imported from 'next/image'
    href?: string;
  }; //ADDED WITH AI (CUZ HAVING ISSUE IN RECOGNIZING TYPE OF PRODUCT "HOVEREDPRODUCT")

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

  return (
    <section className="py-16">
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      > */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold text-gray-900 text-center mb-12"
      >
        Most Popular Products
      </motion.h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {popularProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-300 bg-gray-100"
            >
              <CardContent className="p-0 ">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg "
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <Button className="mt-2">View Product</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 p-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        {popularProducts.map((product) => (
          <div
            key={product.id}
            className="group relative cursor-none"
            onMouseEnter={() => setHoveredProduct(product)}
            onMouseLeave={() => setHoveredProduct(null)}
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
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
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
      {/* </motion.div> */}
    </section>
  );
}
