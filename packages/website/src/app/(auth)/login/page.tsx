import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { TextField } from "@/components/Fields"
import { Logo } from "@/components/Logo"
import { SlimLayout } from "@/components/SlimLayout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sign In",
}

export default function Login() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link aria-label="Home" href="/">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Don't have an account?
        {" "}
        <Link
          className="font-medium text-lime-600 hover:underline"
          href="/register"
        >
          Sign up
        </Link>
        {" "}
        for a free trial.
      </p>
      <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
        <TextField
          autoComplete="email"
          label="Email address"
          name="email"
          required
          type="email"
        />
        <TextField
          autoComplete="current-password"
          label="Password"
          name="password"
          required
          type="password"
        />
        <div>
          <Button className="w-full" color="lime" type="submit" variant="solid">
            <span>
              Sign in
              {" "}
              <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
