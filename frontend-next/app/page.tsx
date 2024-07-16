'use client';

import { Navbar, About } from "@/components";

export default function Home(): JSX.Element {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <About />
    </div>
  )
}
