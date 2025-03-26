import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import backgroundImage from "@/images/background-call-to-action.jpg"
import Image from "next/image"

export function CallToAction() {
  return (
    <section
      className="relative overflow-hidden bg-lime-600 py-32"
      id="get-started-today"
    >
      <Image
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        height={1244}
        src={backgroundImage}
        style={{ filter: "hue-rotate(-130deg) brightness(1.1) contrast(0.5)" }}
        unoptimized
        width={2347}
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Download today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It's time to take responsibility and raise awareness.
          </p>
          <Button className="mt-10" color="white" href="#">
            Download
          </Button>
        </div>
      </Container>
    </section>
  )
}
