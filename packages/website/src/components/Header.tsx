"use client"

import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { Logo } from "@/components/Logo"
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
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <Button color="slate" href="https://github.com/simonbiennier/greenchat" variant="outline" rel="noopener noreferrer" target="_blank">
                Source code
              </Button>
            </div>
            <Button color="slate" href="https://chromewebstore.google.com/detail/greenchat/ndpiijjfeonckaejbemcbhanmapdpopm" rel="noopener noreferrer" target="_blank">
              Download for ChatGPT
            </Button>
            {/* <Button color="slate" href="#" rel="noopener noreferrer" target="_blank">
              Download for Copilot
            </Button> */}
          </div>
        </nav>
      </Container>
    </header>
  )
}
