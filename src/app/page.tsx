'use client';

import UserComp from "@/components/UI/User";


export default function Home() {
  return (
    <section className='flex flex-col gap-3 '>
      Home page
      <div className='flex gap-3'>
       <UserComp/>
        
      </div>
    </section>
  )
}









