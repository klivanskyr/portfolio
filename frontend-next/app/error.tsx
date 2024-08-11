'use client';

import { Navbar } from "@/components";

export default function ErrorPage() {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-4xl'>404</h1>
                <h2 className='text-2xl'>Page Not Found</h2>
            </div>
        </div>
    )
}