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
      image: cphamper1,
    },
    {
      id: 7,
      name: "4 in 1 USB Set - Black colour Diary, Pen, Mug & 32 Gb USB Pendrive",
      image: cphamper2,
    },
    {
      id: 8,
      name: "6 in 1 Gift set - Wooden Bottle, Mug, Pen, Keychain, Card Holder, wooden cover Notebook",
      image: cphamper3,
    },
  ];
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          Most Popular Products
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
        </div>
      </motion.div>
    </section>
  );
}
