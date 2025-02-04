'use server';

import { Navbar, About, Projects, Skills, Contact } from "@/components";

export default async function Home() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <About />
      <Projects />
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Testimonials /> */}
      <Contact />
    </div>
  )
}
