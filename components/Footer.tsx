import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                <Image
                  src={logo}
                  alt="Logo"
                  className="w-28 h-8 rounded-t-lg"
                />
              </Link>
            </div>
            <p className="text-gray-400">
              Your trusted partner for custom B2B gifting solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/t-shirts" className="hover:text-white">
                  Apparels
                </Link>
              </li>
              {/* <li>
                <Link href="/mugs" className="hover:text-white">
                  Mugs
                </Link>
              </li> */}
              {/* <li>
                <Link href="/business-cards" className="hover:text-white">
                  Business Cards
                </Link>
              </li> */}
              <li>
                <Link href="/banners" className="hover:text-white">
                  Tech Gifts
                </Link>
              </li>
              <li>
                <Link href="/drinkwares" className="hover:text-white">
                  Gift Boxes & Hampers
                </Link>
              </li>
              <li>
                <Link href="/drinkwares" className="hover:text-white">
                  Combos
                </Link>
              </li>
              {/* <li>
                <Link href="/drinkwares" className="hover:text-white">
                  Wallets
                </Link>
              </li> */}
              {/* <li>
                <Link href="/drinkwares" className="hover:text-white">
                  Tech Gifts
                </Link>
              </li> */}
              <li>
                <Link href="/drinkwares" className="hover:text-white">
                  All Small Categories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Festive Hampers Non- Branded
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Executive office Combos non branded
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Combo Stationery Kits
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Mix Combos non branded
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Keychains
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Wristbands
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Magnets
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Penstand
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Paper weights
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Stationery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Stationery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Diaries
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white">
                   T-shirts
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Jackets
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Formal Shirts
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Joggers
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Caps/headgears
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                 Mugs
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Bottles
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Mobile Accessories
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                 Speakers
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Earphones (boAt, JBL, Realme, Philips, Noise)
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Data Storage 
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Smart Gadgets
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Mobile Holders
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Power Banks
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Wellness combo
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Festive Copper Harmony combo
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Wellness Luxury combo
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Ecofriendly Delight combo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@easegiv.com</li>
              <li>+91-7769988314</li>
              <li>Mon-Fri 9AM-6PM IST</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-center">
            &copy; 2025 EaseGiv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
