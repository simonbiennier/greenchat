import { Container } from "@/components/Container"
import backgroundImage from "@/images/background-faqs.jpg"
import Image from "next/image"

const faqs = [
  [
    {
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      question: "Question?",
    },
    {
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      question: "Question?",
    },
    {
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      question: "Question?",
    },
  ],
  [
    {
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      question: "Question?",
    },
    {
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      question: "Question?",
    },
    {
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      question: "Question?",
    },
  ],
  [
    {
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      question: "Question?",
    },
    {
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      question: "Question?",
    },
    {
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      question: "Question?",
    },
  ],
]

export function Faqs() {
  return (
    <section
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
      id="faq"
    >
      {/* <Image
        alt=""
        className="absolute top-0 left-1/2 max-w-none -translate-y-1/4 translate-x-[-30%] opacity-50"
        height={946}
        src={backgroundImage}
        style={{ filter: "hue-rotate(-140deg)" }}
        unoptimized
        width={1558}
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
            id="faq-title"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can't find it here, ask us.
          </p>
        </div>
        <ul
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
          role="list"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="flex flex-col gap-y-8" role="list">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
