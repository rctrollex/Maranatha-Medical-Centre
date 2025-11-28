import Hero from "@/components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import CTA from "@/components/CTA"
import Contact from "@/components/Contact"
import WhyUs from "@/components/WhyUs"
export default function Home(){
  return(
    <div className="min-h-screen w-full relative">
      <Hero/>
      <About/>
      <WhyUs/>
      <Services/>
      <CTA/>
      <Contact/>
    </div>
  )
}