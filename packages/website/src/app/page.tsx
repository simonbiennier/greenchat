import { Faqs } from "@/components/Faqs"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { HowItsCalculated } from "@/components/SecondaryFeatures"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItsCalculated />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
