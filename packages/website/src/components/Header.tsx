"use client"

import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { Logo } from "@/components/Logo"
import { NavLink } from "@/components/NavLink"
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react"
import { clsx } from "clsx"
import Link from "next/link"

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link aria-label="Home" href="#">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <Button color="slate" href="https://github.com/simonbiennier/greenchat" variant="outline">
                GitHub
            </Button>
            </div>
            <Button color="slate" href="#">
                Download
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeLinecap="round"
      strokeWidth={2}
    >
      <path
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0",
        )}
        d="M0 1H14M0 7H14M0 13H14"
      />
      <path
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0",
        )}
        d="M2 2L12 12M12 2L2 12"
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        aria-label="Toggle Navigation"
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
        transition
      />
      <PopoverPanel
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 ring-1 shadow-xl ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
        transition
      >
        <MobileNavLink href="#features">Features</MobileNavLink>
        <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
        <MobileNavLink href="#faq">FAQ</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

function MobileNavLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <PopoverButton as={Link} className="block w-full p-2" href={href}>
      {children}
    </PopoverButton>
  )
}
