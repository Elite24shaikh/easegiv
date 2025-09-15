import React, { useState } from 'react';

// Custom CSS for floating animation
const customStyles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;

// Inject custom styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = customStyles;
  document.head.appendChild(styleElement);
}
import {
  CheckCircle,
  Gift,
  MapPin,
  Truck,
  Zap,
  Palette,
  Package,
  Building,
  Leaf,
  Trophy,
  Rocket,
  Gem,
  RotateCcw,
  Eye,
  Smartphone,
  Layers,
  Play,
  X
} from "lucide-react";

// Mock image imports - replace with your actual imports
const bulk = { src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400" };
const image1 = { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400" };
const image2 = { src: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400" };

export default function AboutUsSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const features = [
    {
      name: "BESPOKE",
      description:
        "Tailored experiences for your brand. Custom solutions that reflect your identity.",
    },
    {
      name: "EFFORTLESS ",
      description:
        "Ease of ordering and execution. Streamlined process from concept to delivery.",
    },
    {
      name: "RELIABLE",
      description:
        "Timely delivery, even at scale. Advanced logistics for enterprise volumes.",
    },
    {
      name: "PREMIUM",
      description:
        "Quality products from trusted manufacturers. Handpicked suppliers with proven excellence.",
    },
  ];

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-black text-white px-6 py-2 rounded-full text-lg font-semibold mb-6">
            About Us
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-8 leading-tight">
            Making Corporate Gifting
            <br />
            <span className="">Effortless & Impactful</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            At EaseGiv, we believe that every gift is a reflection of a brand.
            Whether it's welcoming new employees, celebrating milestones, or
            thanking clients, the right gift speaks volumes. Our mission is to
            simplify corporate gifting with curated, customizable, and
            high-quality solutions that leave a lasting impression —
            effortlessly.
          </p>
        </div>

        {/* Who We Are - Clean Box */}
        <div className="border-2 border-grey rounded-2xl text-black p-16 mb-20 relative ">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-5xl font-bold text-black mb-8">Who We Are</h3>
            <div className="w-24 h-1 bg-orange-500  mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              We're a specialized B2B gifting partner that combines creativity,
              logistics, and technology to deliver branded gifts that are both
              thoughtful and strategic. From startups to large enterprises, we
              serve organizations across industries with bulk gifting solutions
              that are premium, purposeful, and on time.
            </p>
          </div>
        </div>

        {/* NEW 3D MAGIC SECTION */}
        <div className="mb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
                <span className="text-orange-300 text-sm font-semibold tracking-wide uppercase">
                  Revolutionary Experience of 3D View
                </span>
              </div>
              <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Experience 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                  {" "}3D Magic
                </span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover the future of e-commerce with our immersive 3D product visualization.
                <span className="text-orange-400 font-semibold"> See, interact, and fall in love</span> with products before you buy.
              </p>
            </div>

            {/* Premium Video Card */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative group">
                {/* Main Video Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-white/20">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">3D Product Demo</h4>
                        <p className="text-gray-300 text-sm">Interactive Experience • 2:34</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-semibold border border-orange-500/30">
                        Premium
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold border border-blue-500/30">
                        4K Quality
                      </span>
                    </div>
                  </div>

                  {/* Video Frame Container */}
                  <div 
                    className="relative cursor-pointer group/video rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
                    onClick={openVideo}
                  >
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black aspect-video">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                      </div>

                      {/* Floating 3D Elements */}
                        {/* <div className="absolute inset-0 overflow-hidden">
                          <div className="absolute top-12 left-12 w-20 h-20 bg-gradient-to-r from-blue-400/60 to-cyan-400/60 rounded-2xl backdrop-blur-sm animate-float shadow-xl"></div>
                          <div className="absolute top-16 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/60 to-pink-400/60 rounded-full backdrop-blur-sm animate-float delay-300 shadow-xl"></div>
                          <div className="absolute bottom-20 left-20 w-18 h-18 bg-gradient-to-r from-green-400/60 to-emerald-400/60 rounded-2xl backdrop-blur-sm animate-float delay-700 shadow-xl"></div>
                          <div className="absolute bottom-16 right-16 w-14 h-14 bg-gradient-to-r from-orange-400/60 to-red-400/60 rounded-full backdrop-blur-sm animate-float delay-1000 shadow-xl"></div>
                        </div> */}

                      {/* Center Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative group/play">
                          {/* Outer Ring */}
                          <div className="absolute inset-0 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 group-hover/video:scale-110 transition-all duration-300"></div>
                          
                          {/* Inner Ring */}
                          <div className="absolute inset-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl group-hover/video:shadow-orange-500/50 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse opacity-75"></div>
                          </div>
                          
                          {/* Play Icon */}
                          <div className="relative w-24 h-24 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1 drop-shadow-lg group-hover/video:scale-110 transition-transform duration-300" fill="currentColor" />
                          </div>
                        </div>
                      </div>

                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-blue-500/20 group-hover/video:opacity-80 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-colors duration-300"></div>

                      {/* Bottom Info Bar */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-white font-bold text-lg mb-1">Revolutionary 3D Experience</h5>
                            <p className="text-gray-300 text-sm">See products come to life in stunning 3D detail</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-green-400 text-xs font-semibold">HD</span>
                            </div>
                            <div className="w-px h-4 bg-white/30"></div>
                            <span className="text-white text-sm font-medium">2:34</span>
                          </div>
                        </div>
                      </div>

                      {/* Corner Decorations */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-xl"></div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <RotateCcw className="w-4 h-4" />
                        <span className="text-sm">360° Interactive</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">AR Preview</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Layers className="w-4 h-4" />
                        <span className="text-sm">Real-time 3D</span>
                      </div>
                    </div>
                    <button 
                      onClick={openVideo}
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Watch Demo
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: RotateCcw,
                  title: "360° Product View",
                  desc: "Rotate, zoom, and explore every detail of products in stunning 3D",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Eye,
                  title: "AR Preview",
                  desc: "See how products look in your real environment before purchasing",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: Palette,
                  title: "Real-time Customization",
                  desc: "Change colors, materials, and textures instantly with live preview",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: Smartphone,
                  title: "Mobile Optimized",
                  desc: "Seamless 3D experience across all devices and screen sizes",
                  gradient: "from-orange-500 to-red-500"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className={`w-16 h-16 mb-4 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3 group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                <Layers className="w-5 h-5 text-orange-400" />
                <span className="text-white font-semibold">
                  Experience the future of product visualization
                </span>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white hover:text-red-400 transition-all duration-300 backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full">
                <iframe
                  className="w-full h-full"
                  src="https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1"
                  title="3D Product Demo"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Revolutionary 3D Shopping Experience
                  </h3>
                  <p className="text-gray-300 text-sm max-w-2xl">
                    Experience the future of e-commerce with our cutting-edge 3D technology. 
                    Interact with products like never before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* What We Offer - Clean Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-6xl font-bold text-black mb-6">
              What We Offer
            </h3>
            <div className="w-24 h-1 bg-orange-500  mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 font-light">
              Comprehensive solutions for modern businesses
            </p>
          </div>

          {/* BENTO GRID */}
          <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
              <h2 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-black sm:text-5xl">
                Our Unique Gift Propositions
              </h2>
              <p className="text-center text-base/7 font-semibold text-[#FE7A0E] mt-4 ">
                Explore our curated corporate gifting services- thoughtfully
                tailored to
                <br /> make every moment memorable and every gift truly
                impactful.
              </p>
              <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg bg-gray-500 lg:rounded-l-4xl" />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                      <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                        Bulk Gifting
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                        Discover premium bulk corporate gifts for employees- a
                        hassle free way to cherish, honor, and strengthen your
                        employee relationships.
                      </p>
                    </div>
                    <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                      <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                        <img
                          alt=""
                          src={bulk.src}
                          className="size-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
                </div>
                <div className="relative max-lg:row-start-1">
                  <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                        Sustainable Corporate Gifts
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                        Make a lasting impression with our eco-friendly
                        corporate gifts- thoughtful, sustainable, and impactful.
                      </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                      <img
                        alt=""
                        src={bulk.src}
                        className="w-full max-lg:max-w-xs border rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
                </div>
                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                  <div className="absolute inset-px rounded-lg bg-[#FE7A0E]" />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                        Brand Recognition
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                        Boost brand recognition and recall with the perfect
                        branded gifts. Elevate your company gifting strategy
                        with personalized business gifts.
                      </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center px-4 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                      <img
                        alt=""
                        src={bulk.src}
                        className="w-full h-48 object-cover max-lg:max-w-xs"
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
                </div>
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg bg-gray-700 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                      <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                        Timely Delivery even at scale
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                        We don't just deliver gifts — we deliver experiences
                        that help build relationships, enhance brand value, and
                        create emotional connections.
                      </p>
                    </div>
                    <div className="relative min-h-120 w-full grow">
                      <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                        <div className="px-6 pt-6 pb-14">
                          {/* Your code example */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <h2 className="text-3xl text-center items-center justify-center font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Promises
            </h2>
            <p className="mt-4 text-amber-600 text-center items-center justify-center text-md">
              We are committed to delivering excellence in every aspect of our
              products and services.
              <br />
              Our focus is on quality, reliability, and customer satisfaction.
            </p>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  src={image1.src}
                  className="rounded-lg bg-gray-100 aspect-square object-cover"
                />
                <img
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  src={image2.src}
                  className="rounded-lg bg-gray-100 aspect-square object-cover"
                />
                <img
                  alt="Side of walnut card tray with card groove and recessed card area."
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  className="rounded-lg bg-gray-100 aspect-square object-cover"
                />
                <img
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  className="rounded-lg bg-gray-100 aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* More Than Just Products - Striking Box */}
        <div className=" border-8 rounded-xl text-black p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-transparent"></div>
          <div className="relative z-10 text-center">
            <div className="text-8xl mb-6">📦</div>
            <h3 className="text-2xl font-medium mb-6">
              More Than Just Products
            </h3>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-xl text-gray-900 leading-relaxed max-w-3xl mx-auto font-light">
              We don't just deliver gifts — we deliver experiences that help
              build relationships, enhance brand value, and create emotional
              connections. With our seamless platform and dedicated support
              team, corporate gifting has never been this easy.
            </p>
          </div>
        </div>

        {/* Location & Final CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 bg-gray-50 border-2 border-black px-8 py-6 mb-8">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-orange-500 mr-2" />
              <span className="text-lg font-bold text-black">
                Based in Mumbai
              </span>
            </div>
            <div className="w-px h-8 bg-black"></div>
            <div className="flex items-center">
              <Truck className="w-6 h-6 text-orange-500 mr-2" />
              <span className="text-lg font-bold text-black">
                Shipping PAN India
              </span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-black font-light mb-2">
              Let EaseGiv be your go-to partner for all things corporate gifting
            </p>
            <p className="text-xl text-orange-500 font-bold">
              because thoughtful giving builds stronger business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}