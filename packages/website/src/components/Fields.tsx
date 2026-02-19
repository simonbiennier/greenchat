import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { clsx } from "clsx"
import { useId } from "react"

const formClasses
  = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-lime-500 focus:bg-white focus:outline-hidden focus:ring-lime-500 sm:text-sm"

export function SelectField({
  className,
  label,
  ...props
}: Omit<ComponentPropsWithoutRef<"select">, "id"> & { label: string }) {
  const id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, "pr-8")} />
    </div>
  )
}

export function TextField({
  className,
  label,
  type = "text",
  ...props
}: Omit<ComponentPropsWithoutRef<"input">, "id"> & { label: string }) {
  const id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

function Label({ children, id }: { children: ReactNode, id: string }) {
  return (
    <label
      className="mb-3 block text-sm font-medium text-gray-700"
      htmlFor={id}
    >
      {children}
    </label>
  )
}
