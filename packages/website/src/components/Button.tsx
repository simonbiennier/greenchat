import { clsx } from "clsx"
import Link from "next/link"

const baseStyles = {
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-hidden",
  solid:
    "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
}

const variantStyles = {
  outline: {
    slate:
      "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-lime-600 focus-visible:ring-slate-300",
    white:
      "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white",
  },
  solid: {
    lime: "bg-lime-600 text-white hover:text-slate-100 hover:bg-lime-500 active:bg-lime-800 active:text-lime-100 focus-visible:outline-lime-600",
    slate:
      "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    white:
      "bg-white text-slate-900 hover:bg-lime-50 active:bg-lime-200 active:text-slate-600 focus-visible:outline-white",
  },
}

type ButtonProps = (
  | (Omit<ComponentPropsWithoutRef<"button">, "color"> & {
    href?: undefined
  })
  | Omit<ComponentPropsWithoutRef<typeof Link>, "color">
  ) &
  (
    | {
      color?: keyof typeof variantStyles.outline
      variant: "outline"
    }
    | {
      color?: keyof typeof variantStyles.solid
      variant?: "solid"
    }
)

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= "solid"
  props.color ??= "slate"

  className = clsx(
    baseStyles[props.variant],
    props.variant === "outline"
      ? variantStyles.outline[props.color]
      : props.variant === "solid"
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === "undefined"
    ? (
        <button className={className} {...props} />
      )
    : (
        <Link className={className} {...props} />
      )
}
