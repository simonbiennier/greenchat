import type { ComponentPropsWithoutRef } from "react"

import { clsx } from "clsx"
import Image from "next/image"
import logo from "@/images/logo.png"

export function Logo(props: ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className={clsx("flex gap-2 justify-center items-center", props.className)}>
      <Image alt="GreenChat" className="h-10 w-auto" src={logo} />
      <h1 className="text-2xl font-semibold text-green">
        GreenChat
      </h1>
    </div>
  )
}
