'use client';
import RegistrationFormComp from "@/components/forms/RegistrationForm";
import SignInFormComp from "@/components/forms/SignInForm";


export default function Home() {
  return (
    <section className='flex flex-col gap-3 '>
      Home page
      <div className='flex gap-3'>
      <RegistrationFormComp />
      <SignInFormComp />
      </div>
    </section>
  )
}









