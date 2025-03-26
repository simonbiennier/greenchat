import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { SelectField, TextField } from "@/components/Fields"
import { Logo } from "@/components/Logo"
import { SlimLayout } from "@/components/SlimLayout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sign Up",
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link aria-label="Home" href="/">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get started for free
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Already registered?
        {" "}
        <Link
          className="font-medium text-lime-600 hover:underline"
          href="/login"
        >
          Sign in
        </Link>
        {" "}
        to your account.
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          autoComplete="given-name"
          label="First name"
          name="first_name"
          required
          type="text"
        />
        <TextField
          autoComplete="family-name"
          label="Last name"
          name="last_name"
          required
          type="text"
        />
        <TextField
          autoComplete="email"
          className="col-span-full"
          label="Email address"
          name="email"
          required
          type="email"
        />
        <TextField
          autoComplete="new-password"
          className="col-span-full"
          label="Password"
          name="password"
          required
          type="password"
        />
        <SelectField
          className="col-span-full"
          label="How did you hear about us?"
          name="referral_source"
        >
          <option>AltaVista search</option>
          <option>Super Bowl commercial</option>
          <option>Our route 34 city bus ad</option>
          <option>The “Never Use This” podcast</option>
        </SelectField>
        <div className="col-span-full">
          <Button className="w-full" color="lime" type="submit" variant="solid">
            <span>
              Sign up
              {" "}
              <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
