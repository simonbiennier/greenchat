"use client"

import type { ImageProps } from "next/image"
import { Container } from "@/components/Container"
import screenshotContacts from "@/images/screenshots/contacts.png"
import screenshotInventory from "@/images/screenshots/inventory.png"
import screenshotProfitLoss from "@/images/screenshots/profit-loss.png"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import { clsx } from "clsx"
import Image from "next/image"
import { useId } from "react"

interface Feature {
  description: string
  icon: React.ComponentType
  image: ImageProps["src"]
  name: React.ReactNode
  summary: string
}

const features: Array<Feature> = [
  {
    description:
      "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
    icon: function ReportingIcon() {
      const id = useId()
      return (
        <>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id={id}
              x1="11.5"
              x2={36}
              y1={18}
              y2="15.5"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </>
      )
    },
    image: screenshotProfitLoss,
    name: "Reporting",
    summary: "Stay on top of things with always up-to-date reporting features.",
  },
  {
    description:
      "We don't offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
    icon: function InventoryIcon() {
      return (
        <>
          <path
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
            opacity=".5"
          />
          <path
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
            opacity=".3"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
    image: screenshotInventory,
    name: "Inventory",
    summary:
      "Never lose track of what's in stock with accurate inventory tracking.",
  },
  {
    description:
      "This also isn't actually a feature, it's just some friendly advice. We definitely recommend that you do this, you'll feel really organized and professional.",
    icon: function ContactsIcon() {
      return (
        <>
          <path
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
            opacity=".5"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
    image: screenshotContacts,
    name: "Contacts",
    summary:
      "Organize all of your contacts, service providers, and invoices in one place.",
  },
]

export function SecondaryFeatures() {
  return (
    <section
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
      id="secondary-features"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Here's how we calculate it.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Estimating ChatGPT's carbon footprint is challenging due to OpenAI's closed-source policy. However, studies suggest energy consumption per query ranges from
            <strong> 0.3 to 3 watt-hours</strong>
            . According to
            {" "}
            <a className="text-lime-600" href="https://www.sciencedirect.com/science/article/pii/S2542435123003653" rel="noopener noreferrer" target="_blank">Alex De Vries</a>
            , a typical query uses around 3 watt-hours, while
            {" "}
            <a className="text-lime-600" href="https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use" rel="noopener noreferrer" target="_blank">Josh You</a>
            {" "}
            argues that shorter queries use just 0.3 watt-hours, similar to a Google search.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            The carbon emissions depend on data center energy sources. The U.S. average carbon intensity is
            {" "}
            <a className="text-lime-600" href="https://arxiv.org/abs/2104.10350" rel="noopener noreferrer" target="_blank">0.429 kg CO₂e/kWh</a>
            ,
            meaning emissions per query range between
            {" "}
            {" "}
            <strong>
              0.1287g and 1.287g CO
              <sub>2</sub>
              e
            </strong>
            . Per token, estimates vary from
            {" "}
            <strong>
              0.2145 mg to 0.2574 mg CO
              <sub>2</sub>
              e
            </strong>
            , based on token length assumptions by De Vries and You.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Water usage is another factor. According to
            {" "}
            <a className="text-lime-600" href="https://airatwork.com/wp-content/uploads/The-Green-Grid-White-Paper-35-WUE-Usage-Guidelines.pdf" rel="noopener noreferrer" target="_blank">The Green Grid</a>
            , U.S. data centers have an average water usage efficiency (WUE) of 1.8 L/kWh. Based on energy estimates, water consumption per token ranges from
            {" "}
            {" "}
            <strong>0.0001 to 0.0009 mL</strong>
            .
          </p>
        </div>
        {/* <FeaturesMobile />
        <FeaturesDesktop /> */}
      </Container>
    </section>
  )
}

function Features({
  className,
  feature,
  isActive,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && "opacity-75 hover:opacity-100")}
      {...props}
    >
      <div
        className={clsx(
          "w-9 rounded-lg",
          isActive ? "bg-lime-600" : "bg-slate-500",
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          "mt-6 text-sm font-medium",
          isActive ? "text-lime-600" : "text-slate-600",
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function _FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Features
                className="relative"
                feature={{
                  ...feature,
                  name: (
                    <Tab className="data-selected:not-data-focus:outline-hidden">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                key={feature.summary}
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  aria-hidden={featureIndex !== selectedIndex}
                  className={clsx(
                    "px-5 transition duration-500 ease-in-out data-selected:not-data-focus:outline-hidden",
                    featureIndex !== selectedIndex && "opacity-60",
                  )}
                  key={feature.summary}
                  static
                  style={{ transform: `translateX(-${String(selectedIndex * 100)}%)` }}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white ring-1 shadow-lg shadow-slate-900/5 ring-slate-500/10">
                    <Image
                      alt=""
                      className="w-full"
                      sizes="52.75rem"
                      src={feature.image}
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-slate-900/10 ring-inset" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

function _FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map(feature => (
        <div key={feature.summary}>
          <Features className="mx-auto max-w-2xl" feature={feature} isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 top-8 bottom-0 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white ring-1 shadow-lg shadow-slate-900/5 ring-slate-500/10">
              <Image
                alt=""
                className="w-full"
                sizes="52.75rem"
                src={feature.image}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
