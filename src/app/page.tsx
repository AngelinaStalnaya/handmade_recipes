'use client';

import SelectComp from "@/components/UI/Select";

export const animals = [
  {key: "cat", label: "Cat"},
  {key: "dog", label: "Dog"},
];

export default function Home() {
  return (
    <section className='flex flex-col gap-3 '>
      Home page
      <div className='flex gap-3'>
       <SelectComp items={animals} label='Sex'/>

      </div>
    </section>
  )
}









