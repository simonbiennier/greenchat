"use client"

import { Container } from "@/components/Container"
import backgroundImage from "@/images/background-features.jpg"
import screenshotBanner from "@/images/screenshots/banner.png"
import screenshotPopup from "@/images/screenshots/popup.png"
import screenshotReporting from "@/images/screenshots/reporting.png"
import screenshotVatReturns from "@/images/screenshots/vat-returns.png"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import { clsx } from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"

const features = [
  {
    description:
      "Seamlessly integrated with ChatGPT's UI ",
    image: screenshotBanner,
    title: "Seemless integration",
  },
  {
    description:
      "Showing you extra information about your chat footprint.",
    image: screenshotPopup,
    title: "Popup",
  }
]

export function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] = useState<"horizontal" | "vertical">(
    "horizontal",
  )

  useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px)")

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal")
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener("change", onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange)
    }
  }, [])

  return (
    <section
      aria-label="Features"
      className="relative overflow-hidden bg-lime-600 pt-20 pb-28 sm:py-32"
      id="features"
    >
      <Image
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        height={1636}
        src={backgroundImage}
        style={{ filter: "hue-rotate(-130deg) brightness(1.1) contrast(0.5)" }}
        unoptimized
        width={2245}
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Seamless integration
          </h2>
          <p className="mt-6 text-lg tracking-tight text-lime-100">
            within ChatGPT's UI, showing you extra information about your chat footprint.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-lime-900/20 w-auto">
          <Image
            alt=""
            className="w-full mx-auto"
            priority
            sizes="(min-width: 1024px) 80rem, (min-width: 640px) 100vw, 40rem"
            src={screenshotBanner}
          />
        </div>
    </Container>
    </section>
  )
}