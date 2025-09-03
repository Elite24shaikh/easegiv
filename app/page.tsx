"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FeatureProducts from "@/components/FeatureProducts"
import Faq from "@/components/Faq"
import PopularProducts from "@/components/PopularProducts"
import Propositions from "@/components/Propositions"
import Aboutus from "@/components/Aboutus"


export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">

      <Header/>
      
      <FeatureProducts />

      <PopularProducts/>

      <Propositions/>

      <Aboutus/>

      <Faq/>

      <Footer/>
    </div>
  )
}
