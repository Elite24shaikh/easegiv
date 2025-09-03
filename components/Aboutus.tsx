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
} from "lucide-react";
import bulk from "@/assets/bulk.png"

export default function AboutUsSection() {
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

          {/* Services Grid - Simple Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Gift,
                title: "Curated Gift Collections",
                desc: "Premium selections for every corporate occasion",
              },
              {
                icon: Palette,
                title: "Full Customization Suite",
                desc: "Logo branding, custom packaging, and personalization",
              },
              {
                icon: Package,
                title: "Bulk Order Excellence",
                desc: "Starting from 100+ units with enterprise discounts",
              },
              {
                icon: Building,
                title: "Industry Specialization",
                desc: "Tailored solutions for Pharma, IT, Events, HR sectors",
              },
              {
                icon: Leaf,
                title: "Sustainable Options",
                desc: "Eco-conscious and wellness gifts for modern values",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border-3 rounded-2xl border-black p-8 hover:bg-orange-500 hover:text-white transition-all hover:shadow-lg duration-300 group"
              >
                <service.icon className="w-16 h-16 text-orange-500 group-hover:text-white mb-6 group-hover:scale-110 transition-all duration-300" />
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-md font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div> */}


            {/* BENTO GRID */}

          <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
             
              <h2 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-black sm:text-5xl">
                Our Unique Gift Propositions
              </h2>
               <p className="text-center text-base/7 font-semibold text-[#FE7A0E] mt-4 ">
                Explore our curated corporate gifting services- thoughtfully tailored to
                <br /> make every moment memorable and every gift truly impactful.
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
                        Discover premium bulk corporate gifts for employees- a hassle free way 
                        to cherish, honor, and strengthen your employee relationships.
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
                       Boost brand recognition and recall with the perfect branded gifts. 
                       Elevate your company gifting strategy with personalized business gifts.
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
                        We don’t just deliver gifts — we deliver experiences that help build relationships,
                         enhance brand value, and create emotional connections.
                      </p>
                    </div>
                    <div className="relative min-h-120 w-full grow">
                      <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                        {/* <div className="flex bg-gray-900 outline outline-white/5">
                          <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                            <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                              NotificationSetting.jsx
                            </div>
                            <div className="border-r border-gray-600/10 px-4 py-2">
                              App.jsx
                            </div>
                          </div>
                        </div> */}
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

          {/* Our Promise - Individual Cards */}
          <div>
            <div className="text-center mb-12">
              <h4 className="text-5xl font-bold text-black mb-4">
                Our Promise
              </h4>
              <div className="w-20 h-1 bg-white mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: "EFFORTLESS",
                  desc: "Ease of ordering and execution",
                  detail: "Streamlined process from concept to delivery",
                },
                {
                  icon: Trophy,
                  title: "PREMIUM",
                  desc: "Quality products from trusted manufacturers",
                  detail: "Handpicked suppliers with proven excellence",
                },
                {
                  icon: Rocket,
                  title: "RELIABLE",
                  desc: "Timely delivery, even at scale",
                  detail: "Advanced logistics for enterprise volumes",
                },
                {
                  icon: Gem,
                  title: "BESPOKE",
                  desc: "Tailored experiences for your brand",
                  detail: "Custom solutions that reflect your identity",
                },
              ].map((promise, index) => (
                <div
                  key={index}
                  className="bg-white border-2 rounded-2xl border-neutral-800 border-dashed p-8 hover:bg-orange-500 hover:text-white transition-all duration-300 group text-center"
                >
                  <promise.icon className="w-12 h-12 text-orange-400 group-hover:text-black mx-auto mb-6 group-hover:scale-125 transition-all duration-300" />
                  <h5 className="text-xl font-bold text-orange-400 group-hover:text-black mb-3 tracking-wide">
                    {promise.title}
                  </h5>
                  <p className="text-lg font-bold mb-3">{promise.desc}</p>
                  <p className="text-sm text-gray-400 group-hover:text-gray-800 font-medium leading-relaxed">
                    {promise.detail}
                  </p>
                </div>
              ))}
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
