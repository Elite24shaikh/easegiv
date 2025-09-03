import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
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

export default function FeatureProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "Powerbank Diary",
      image: "/images/Diaries/powerbank.jpg",
    },
    {
      id: 2,
      name: "Hoodie",
      image: PulloverHoodie,
    },
    {
      id: 3,
      name: "Cotton Bags",
      image: CBag,
    },
    {
      id: 4,
      name: "Pens",
      image: Pen,
    },
    {
      id: 5,
      name: "Powerbank Diary",
      image: Pb,
    },
    {
      id: 6,
      name: "Printed Mug",
      image: laptop,
    },
    {
      id: 7,
      name: "white zipper hoodie",
      image: zipperh,
    },
    {
      id: 8,
      name: "Corporate Hamper",
      image: cpham,
    },
    {
      id: 9,
      name: "dryfit",
      image: dryfit,
    },
    {
      id: 10,
      name: "festive gift",
      image: festivegift,
    },
    // {
    //   id: 11,
    //   name: "Cotton Bags",
    //   image: "/images/ecofriendly multipurpose bags/bag.jpeg",
    // },
    // {
    //   id: 12,
    //   name: "Rain and Cold Insulated Jacket",
    //   image:
    //     "images/Rain essentials/2 in 1 rain and cold innsulated jacket.jpg",
    // },
    // {
    //   id: 13,
    //   name: "Powerbank Diary",
    //   image: "/images/Diaries/powerbank.jpg",
    // },
    // {
    //   id: 14,
    //   name: "Printed Mug",
    //   image: "/images/Drinkware/Mugs/mugs.jpeg",
    // },
    // {
    //   id: 15,
    //   name: "Cotton Bags",
    //   image: "/images/ecofriendly multipurpose bags/bag.jpeg",
    // },
    // {
    //   id: 16,
    //   name: "Rain and Cold Insulated Jacket",
    //   image:
    //     "images/Rain essentials/2 in 1 rain and cold innsulated jacket.jpg",
    // },
    // {
    //   id: 17,
    //   name: "Powerbank Diary",
    //   image: "/images/Diaries/powerbank.jpg",
    // },
    // {
    //   id: 18,
    //   name: "Printed Mug",
    //   image: "/images/Drinkware/Mugs/mugs.jpeg",
    // },
    // {
    //   id: 19,
    //   name: "Cotton Bags",
    //   image: "/images/ecofriendly multipurpose bags/bag.jpeg",
    // },
    // {
    //   id: 20,
    //   name: "Rain and Cold Insulated Jacket",
    //   image:
    //     "images/Rain essentials/2 in 1 rain and cold innsulated jacket.jpg",
    // },
  ];

  return (
    <section className="py-16">
      <motion.div  initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          Featured Products
        </motion.h2>

        <motion.div  initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-200 bg-gray-100"
            >
              <CardContent className="pb-2">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                </div>
                <div className="mb-2">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <Button>View Product</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
