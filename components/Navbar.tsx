import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { ShoppingCart, User, Menu, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          🔥 <span className="font-bold">BULK ORDERS ONLY</span> - Minimum 25
          pieces per order
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Categories Dropdown */}
            <div className="md:flex items-center space-x-4 hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 hover:text-gray-900"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="font-medium ">Categories</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[800px] p-0 bg-white shadow-xl border border-gray-200"
                  align="start"
                >
                  <div className="flex">
                    {/* Left Categories */}
                    <div className="w-64 bg-gray-50 border-r border-gray-200">
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 mb-3">
                          Shop by Category
                        </h3>
                        <div className="space-y-2">
                          <div className="hover:bg-white hover:shadow-sm p-2 rounded cursor-pointer group">
                            <span className="text-sm font-medium group-hover:text-blue-600">
                              Apparels
                            </span>
                          </div>
                          <div className="hover:bg-white hover:shadow-sm p-2 rounded cursor-pointer group">
                            <span className="text-sm font-medium group-hover:text-blue-600">
                              Tech Gifts
                            </span>
                          </div>
                          <div className="hover:bg-white hover:shadow-sm p-2 rounded cursor-pointer group">
                            <span className="text-sm font-medium group-hover:text-blue-600">
                              Gift Boxes & Hampers
                            </span>
                          </div>
                          <div className="hover:bg-white hover:shadow-sm p-2 rounded cursor-pointer group">
                            <span className="text-sm font-medium group-hover:text-blue-600">
                              Gift Boxes & Hampers
                            </span>
                          </div>
                          <div className="hover:bg-white hover:shadow-sm p-2 rounded cursor-pointer group">
                            <span className="text-sm font-medium group-hover:text-blue-600">
                              Health & Beauty
                            </span>
                          </div>
                          <div className="hover:bg-white hover:shadow-sm p-2 rounded cursor-pointer group">
                            <span className="text-sm font-medium group-hover:text-blue-600">
                              Books & Media
                            </span>
                          </div>
                          <div className="hover:bg-white hover:shadow-sm p-2 rounded cursor-pointer group">
                            <span className="text-sm font-medium group-hover:text-blue-600">
                              Travel & Luggage
                            </span>
                          </div>
                          <div className="hover:bg-white hover:shadow-sm p-2 rounded cursor-pointer group">
                            <span className="text-sm font-medium group-hover:text-blue-600">
                              Automotive
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Subcategories */}
                    <div className="flex-1 p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {/* Electronics Column */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Electronics
                          </h4>
                          <div className="space-y-2">
                            <Link
                              href="/category/mobiles"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Mobiles & Accessories
                            </Link>
                            <Link
                              href="/category/laptops"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Laptops & Computers
                            </Link>
                            <Link
                              href="/category/headphones"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Headphones
                            </Link>
                            <Link
                              href="/category/cameras"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Cameras
                            </Link>
                            <Link
                              href="/category/gaming"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Gaming
                            </Link>
                            <Link
                              href="/category/wearables"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Smart Watches
                            </Link>
                          </div>
                        </div>

                        {/* Fashion Column */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Fashion
                          </h4>
                          <div className="space-y-2">
                            <Link
                              href="/category/mens-clothing"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Men's Clothing
                            </Link>
                            <Link
                              href="/category/womens-clothing"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Women's Clothing
                            </Link>
                            <Link
                              href="/category/kids-clothing"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Kids' Clothing
                            </Link>
                            <Link
                              href="/category/footwear"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Footwear
                            </Link>
                            <Link
                              href="/category/bags"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Bags & Luggage
                            </Link>
                            <Link
                              href="/category/jewelry"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Jewelry
                            </Link>
                          </div>
                        </div>

                        {/* Home & Kitchen Column */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Home & Kitchen
                          </h4>
                          <div className="space-y-2">
                            <Link
                              href="/category/furniture"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Furniture
                            </Link>
                            <Link
                              href="/category/kitchen"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Kitchen Appliances
                            </Link>
                            <Link
                              href="/category/home-decor"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Home Decor
                            </Link>
                            <Link
                              href="/category/bedding"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Bedding & Bath
                            </Link>
                            <Link
                              href="/category/storage"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Storage & Organization
                            </Link>
                            <Link
                              href="/category/cleaning"
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:underline"
                            >
                              Cleaning Supplies
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Banner/Featured Section */}
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                          <div>
                            <h5 className="font-semibold text-gray-800">
                              Special Offers
                            </h5>
                            <p className="text-sm text-gray-600">
                              Up to 50% off on selected items
                            </p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            Shop Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

           
            </div>
               {/* Logo */}
              <div className="flex items-center ml-4">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                  <Image
                    src={logo}
                    alt="Logo"
                    className="w-28 h-8 rounded-t-lg"
                  />
                </Link>
              </div>

            {/* Center Section - Search Bar (Hidden on mobile) */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for products, categories..."
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
              </div>
            </div>

            {/* Right Section - Auth & Cart */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Sign In Button (Hidden on mobile) */}
              <Button
                variant="ghost"
                className="hidden md:block text-gray-700 hover:text-gray-900"
              >
                Sign In
              </Button>

              {/* Sign Up Button (Hidden on mobile) */}
              <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                Sign Up
              </Button>

              {/* Cart Icon with Badge */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <ShoppingCart className="h-5 md:h-6 w-5 md:w-6" />
                </Button>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center font-medium text-[10px] md:text-xs">
                  0
                </span>
              </div>

              {/* Mobile Menu Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    {/* Mobile Logo */}
                    <div className="flex items-center mb-6">
                      <Image
                        src={logo}
                        alt="Logo"
                        className="w-24 h-6 rounded-t-lg"
                      />
                    </div>

                    {/* Mobile Categories */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex items-center space-x-1 justify-start"
                        >
                          <Menu className="h-4 w-4" />
                          <span>Categories</span>
                          <ChevronDown className="h-4 w-4 ml-auto" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuItem>Electronics</DropdownMenuItem>
                        <DropdownMenuItem>Fashion</DropdownMenuItem>
                        <DropdownMenuItem>Home & Kitchen</DropdownMenuItem>
                        <DropdownMenuItem>Books</DropdownMenuItem>
                        <DropdownMenuItem>Sports</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Mobile Search */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        type="text"
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg"
                      />
                    </div>

                    {/* Mobile Auth Buttons */}
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-center"
                      >
                        Sign In
                      </Button>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Sign Up
                      </Button>
                    </div>

                    {/* Mobile Links */}
                    <div className="space-y-4 pt-4 border-t">
                      <Link
                        href="/about"
                        className="block text-md font-medium text-gray-700"
                      >
                        About Us
                      </Link>
                      {/* <Link
                        href="/why-us"
                        className="block text-lg font-medium text-gray-700"
                      >
                        Why Us
                      </Link> */}
                      <Link
                        href="/products"
                        className="block text-md font-medium text-gray-700"
                      >
                        Products
                      </Link>
                      <Link
                        href="/contact"
                        className="mr-8 block text-md font-medium text-gray-700"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Links (Hidden on mobile) */}
        <div className="hidden md:block bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-8 h-12">
              <Link
                href="/about"
                className="text-md md:text-lg lg:text-xl text-gray-600 hover:text-gray-900 font-medium"
              >
                About Us
              </Link>
              {/* <Link
                href="/why-us"
                className="text-sm text-gray-600 hover:text-gray-900 font-medium"
              >
                Why Us
              </Link> */}
              <Link
                href="/products"
                className="text-md md:text-lg lg:text-xl text-gray-600 hover:text-gray-900 font-medium"
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="text-md md:text-lg lg:text-xl text-gray-600 hover:text-gray-900 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile menu is now part of the right section above */}
      </nav>
    </div>
  );
}
