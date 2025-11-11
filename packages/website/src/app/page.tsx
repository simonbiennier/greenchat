// import { CallToAction } from "@/components/CallToAction"
import { Faqs } from "@/components/Faqs"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
// import { Pricing } from "@/components/Pricing"
// import { PrimaryFeatures } from "@/components/PrimaryFeatures"
import { HowItsCalculated } from "@/components/SecondaryFeatures"
// import { Testimonials } from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        <HowItsCalculated />
        {/* <CallToAction /> */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
