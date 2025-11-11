import type { SVGProps } from "react"

declare module "*.svg" {
  export const ReactComponent: SVGProps<SVGSVGElement>
  const src: string
}

declare module "*.json" {
  const content: string
  export default content
}
