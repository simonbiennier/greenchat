import { Container } from "@/components/Container"
import backgroundImage from "@/images/background-faqs.jpg"
import Image from "next/image"

const faqs = [
  [
    {
      answer:
        "Well no, but if you move your company offshore you can probably ignore it.",
      question: "Does TaxPal handle VAT?",
    },
    {
      answer: "Absolutely, we are happy to take your money in all forms.",
      question: "Can I pay for my subscription via purchase order?",
    },
    {
      answer:
        "We only hire our customers, so subscribe for a minimum of 6 months and then let's talk.",
      question: "How do I apply for a job at TaxPal?",
    },
  ],
  [
    {
      answer:
        "TaxPal is just a software application, ultimately your books are your responsibility.",
      question: "What was that testimonial about tax fraud all about?",
    },
    {
      answer:
        "This is the power of excellent visual design. You just can't resist it, no matter how poorly it actually functions.",
      question:
        "TaxPal sounds horrible but why do I still feel compelled to purchase?",
    },
    {
      answer:
        "Honestly not sure at all. We haven't actually incorporated or anything, we just thought it sounded cool and made this website.",
      question:
        "I found other companies called TaxPal, are you sure you can use this name?",
    },
  ],
  [
    {
      answer:
        "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
      question: "How do you generate reports?",
    },
    {
      answer: "In life it's really better to never expect anything at all.",
      question: "Can we expect more inventory features?",
    },
    {
      answer:
        "Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.",
      question: "I lost my password, how do I get into my account?",
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
      <Image
        alt=""
        className="absolute top-0 left-1/2 max-w-none -translate-y-1/4 translate-x-[-30%] opacity-50"
        height={946}
        src={backgroundImage}
        style={{ filter: "hue-rotate(-140deg)" }}
        unoptimized
        width={1558}
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
            id="faq-title"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can't find what you're looking for, email our support team
            and if you're lucky someone will get back to you.
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
