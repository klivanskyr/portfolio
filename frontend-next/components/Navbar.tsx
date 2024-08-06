'use client';

import { NavLink } from "@mantine/core";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ThemeSwitcher } from "@/components";
import { CloseIcon, MenuIcon } from "@/assets";

export default function Navbar(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sections = ["About", "Projects", "Skills", "Experience", "Testimonials", "Contact"];
    
    // Desktop Navbar
    if (windowWidth >= 1024) {
        return (
            <div className='flex flex-row w-full p-4 justify-between items-center shadow-md dark:border-b dark:border-slate-600'>
                <NavLink className='min-w-[100px]' href='#' label='Ryan Klivansky' />
                <div className="px-[60px] flex flex-row justify-evenly">
                    {sections.map(section => (
                        <NavLink className='mx-6' key={section} href={`#${section.toLowerCase()}`} label={section} />
                    ))}
                </div>
                <ThemeSwitcher />
            </div>
        )
    } 

    // Mobile Navbar
    return (
        <div className='flex flex-row w-full p-4 justify-between items-center shadow-md dark:border-b dark:border-slate-600'>
            <NavLink href='#' label='Ryan Klivansky' />

            <div onClick={() => setOpen(true)}>
                <MenuIcon className='w-[30px] h-[30px]' />
            </div>
            
            <motion.div
                className={`${!open ? 'hidden' : 'fixed top-0 right-0 bg-white dark:border-l dark:border-slate-500 shadow-xl p-2 w-3/5 h-full flex flex-col justify-between'}`} 
                initial={{ x: '200%'}}
                animate={{ x: open ? 0 : '200%' }}
                transition={{ duration: 0.5 }}
            >  
                <div className='flex flex-col justify-start h-full'>
                    <div className='w-full flex flex-row justify-end p-3'>
                        <CloseIcon className={`${open ? 'block' : 'hidden'} w-[20px] h-[20px] dark:bg-white dark:rounded-full dark:opacity-15 dark:p-1`} onClick={() => setOpen(false)}/>
                    </div>
                    <div className='h-3/5 my-[50px] flex flex-col justify-between'>
                        {sections.map(section => (
                            <NavLink className='ml-4' key={section} href={`#${section.toLowerCase()}`} label={section} />
                        ))}
                    </div>
                </div>

                <div className='w-full flex flex-row justify-end'>
                    <ThemeSwitcher />
                </div>
            </motion.div>
        </div>
    )
}