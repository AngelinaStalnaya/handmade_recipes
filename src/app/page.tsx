'use client';

import DynamicMaterialFormComp from "@/components/forms/DynamicMaterialForm";



export default function Home() {
  return (
    <section className='flex flex-col gap-3 '>
      Home page
      <div className='flex gap-3'>
        <DynamicMaterialFormComp/>
      </div>
    </section>
  )
}









