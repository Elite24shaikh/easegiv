// app/product/[id]/page.tsx (Next.js 13+ App Router example)
"use client";

import { useState } from "react";
import Image from "next/image";

const product = {
  id: 1,
  title: "Loose Fit Hoodie",
  price: 24.99,
  images: [
    "/hoodie1.png",
    "/hoodie2.png",
    "assets/for weboste/Images/Apparels/jackets/Pullover Hoodie/pullover hoodie.png",
    "assets/for weboste/Images/Apparels/jackets/Pullover Hoodie/pullover hoodie.png",
  ],
  description:
    "Loose-fit sweatshirt hoodie in medium weight cotton-blend fabric with a generous, but not oversized silhouette. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, and a kangaroo pocket. Wide ribbing at cuffs and hem. Soft, brushed inside.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  rating: 4.5,
  reviews: 50,
  shipping: {
    discount: "Disc 50%",
    package: "Regular Package",
    deliveryTime: "3-4 Working Days",
    estimation: "10 - 12 October 2024",
  },
};

const relatedProducts = [
  {
    id: 2,
    title: "Polo with Contrast Trims",
    price: 212,
    oldPrice: 242,
    discount: "-20%",
    rating: 4.0,
    image: "/polo1.png",
  },
  {
    id: 3,
    title: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "/tshirt1.png",
  },
  {
    id: 4,
    title: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/polo2.png",
  },
  {
    id: 5,
    title: "Striped Jacket",
    price: 120,
    oldPrice: 150,
    discount: "-30%",
    rating: 5.0,
    image: "/jacket1.png",
  },
];

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Product Images */}
        <div>
          <Image
            src={mainImage}
            alt={product.title}
            width={600}
            height={600}
            className="rounded-2xl shadow"
          />
          <div className="flex gap-4 mt-4">
            {product.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="preview"
                width={100}
                height={100}
                className={`cursor-pointer rounded-lg border ${
                  mainImage === img ? "border-black" : "border-gray-200"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">{product.title}</h2>
          <p className="text-xl font-medium">${product.price}</p>

          {/* Sizes */}
          <div className="space-y-2">
            <p className="font-medium">Select Size</p>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            Add to Cart
          </button>

          {/* Description */}
          <div>
            <h3 className="font-medium mb-2">Description & Fit</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>

          {/* Shipping */}
          <div>
            <h3 className="font-medium mb-2">Shipping</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>Discount: {product.shipping.discount}</li>
              <li>Package: {product.shipping.package}</li>
              <li>Delivery: {product.shipping.deliveryTime}</li>
              <li>Estimation: {product.shipping.estimation}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Rating & Reviews</h3>
        <p className="text-4xl font-bold">{product.rating} / 5</p>
        <p className="text-gray-600">({product.reviews} Reviews)</p>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">You might also like</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <div
              key={p.id}
              className="border rounded-xl p-4 hover:shadow-lg transition"
            >
              <Image
                src={p.image}
                alt={p.title}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <h4 className="font-medium mt-3">{p.title}</h4>
              <p className="text-sm text-gray-600">${p.price}</p>
              {p.discount && (
                <span className="text-red-500 text-sm">{p.discount}</span>
              )}
              <p className="text-yellow-500 text-sm">⭐ {p.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
