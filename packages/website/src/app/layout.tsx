import type { Metadata } from "next"
import { clsx } from "clsx"
import { Inter, Lexend } from "next/font/google"
import "@/styles/tailwind.css"

export const metadata: Metadata = {
  description:
    "GreenChat is a plugin that estimates the CO2 emissions of ChatGPT conversations to raise awareness about the environmental impact of AI.",
  title: {
    default: "GreenChat",
    template: "%s - GreenChat",
  },
}

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
})

const lexend = Lexend({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-lexend",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={clsx(
        "h-full scroll-smooth bg-white antialiased",
        inter.variable,
        lexend.variable,
      )}
      lang="en"
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
