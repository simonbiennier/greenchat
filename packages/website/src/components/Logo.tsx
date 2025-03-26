import type { DetailedHTMLProps, HTMLAttributes } from "react"

import logo from "@/images/logo.png"
import { clsx } from "clsx"
import Image from "next/image"

export function Logo(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div {...props} className={clsx("flex gap-2 justify-center items-center", props.className)}>
      <Image alt="GreenChat" className="h-10 w-auto" src={logo} />
      <h1 className="text-2xl font-semibold text-green">
        GreenChat
      </h1>
    </div>
  )
}
