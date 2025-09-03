import FeatureProducts from "@/components/FeatureProducts"
import PopularProducts from "@/components/PopularProducts"
export default function ProductPage() {



  return (
    <div className="min-h-screen bg-white">
      
    <PopularProducts/>

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Map through related products and display them */}
       </div>
     </div>
     <FeatureProducts />
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Map through featured products and display them */}
       </div>
     </div>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <h2 className="text-2xl font-bold text-gray-800 mb-6">New Arrivals</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Map through new arrival products and display them */}
       </div>
     </div>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <h2 className="text-2xl font-bold text-gray-800 mb-6">Best Sellers</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Map through best selling products and display them */}
       </div>
     </div>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <h2 className="text-2xl font-bold text-gray-800 mb-6">Trending Products</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Map through trending products and display them */}

       </div>
     </div>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <h2 className="text-2xl font-bold text-gray-800 mb-6">Special Offers</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Map through special offer products and display them */}
       </div>
     </div>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Favorites</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Map through customer favorite products and display them */}
       </div>
     </div>
     

    </div>
  )
}
