'use client';

import { Navbar, About, Projects } from "@/components";

export default function Home(): JSX.Element {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <About />
      <Projects />
    </div>
  )
}
