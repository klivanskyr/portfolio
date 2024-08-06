'use client';

import { Navbar, About, Projects, Skills } from "@/components";

export default function Home(): JSX.Element {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Experience /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </div>
  )
}
