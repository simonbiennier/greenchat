import type { Metadata } from "next"
import { clsx } from "clsx"
import { Inter, Lexend } from "next/font/google"
import "@/styles/tailwind.css"

export const metadata: Metadata = {
  description:
    "GreenChat is a browser extension that estimates CO2 emissions of ChatGPT conversations to raise awareness about the environmental impact of AI.",
  title: {
    default: "GreenChat",
    template: "%s - GreenChat",
  },
  verification: {
    google: "TT5Yn-TEiPFBQDhAqDA2NlcGY0GlBro-e50C1FF3H7E"
  }
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
