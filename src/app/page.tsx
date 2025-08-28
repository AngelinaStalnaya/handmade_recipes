'use client';

import LogInFormComp from "@/components/forms/LogInForm";
import RegistrationFormComp from "@/components/forms/RegistrationForm";
import ModalComp from "@/components/UI/Modal";


export default function Home() {
  return (
    <section className='flex flex-col gap-3 '>
      Home page
      <div className='flex gap-3'>

        <ModalComp modalBtnText="Register" modalHeader="Sign In" btnVariant='bordered'>{<RegistrationFormComp />}</ModalComp>
        <ModalComp modalBtnText="Log in" modalHeader="Log In" btnVariant='solid'>{<LogInFormComp />}</ModalComp>
      </div>
    </section>
  )
}









