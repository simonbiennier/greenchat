import { CallToAction } from "@/components/CallToAction"
import { Faqs } from "@/components/Faqs"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
// import { Pricing } from "@/components/Pricing"
import { PrimaryFeatures } from "@/components/PrimaryFeatures"
import { SecondaryFeatures } from "@/components/SecondaryFeatures"
import Head from "next/head"
// import { Testimonials } from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="TT5Yn-TEiPFBQDhAqDA2NlcGY0GlBro-e50C1FF3H7E" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
