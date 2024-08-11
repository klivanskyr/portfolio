'use client';

import { useState } from "react";

import { TextInput, Textarea, Button } from "@mantine/core";

type ContactType = 'email' | 'phone';

export default function Contact() {
    const [contactType, setContactType] = useState<ContactType>('email');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }

    return (
        <div id='Contact' className="min-w-screen max-w-screen flex flex-row justify-center items-center">
            <div className="shadow-large flex flex-col justify-center items-center gap-6 m-4 w-fit p-8 rounded-lg">
                <h1 className="text-3xl">Contact Me</h1>
                <div className="flex flex-row justify-center items-center gap-2">
                    <Button classNames={{ inner: 'font-light' }} variant="filled" color={contactType === "email" ? 'green' : 'gray'} size="md" radius="md" onClick={() => setContactType("email")}>Email</Button>
                    <Button classNames={{ inner: 'font-light' }} variant="filled" color={contactType === "phone" ? 'green' : 'gray'} size="md" radius="md" onClick={() => setContactType("phone")}>Phone</Button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center w-fit gap-4 min-w-[600px]">
                    <TextInput className='rounded-md' type="text" placeholder="Name" />
                    {contactType === 'email' 
                        ? <TextInput className='rounded-md' type="email" placeholder="Email" />
                        : <TextInput className='rounded-md' type="tel" placeholder="Phone" />}
                    <TextInput className='rounded-md' type="text" placeholder="Subject" />
                    <Textarea className='rounded-md' placeholder="Message" />
                    <div className="flex flex-row gap-4 px-2">
                        <button 
                            className='py-1 px-2 min-w-[80px] w-full rounded-lg border-2 border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition-colors'
                            type="submit">Submit</button>
                        <button 
                            className='py-1 px-2 min-w-[80px] w-full rounded-lg border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white transition-colors'
                            type="reset">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}