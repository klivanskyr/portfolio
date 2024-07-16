import { NavLink } from "@mantine/core";
import { ThemeSwitcher } from "@/components";

export default function Navbar(): JSX.Element {

    const sections = ["About", "Projects", "Skills", "Experience", "Testimonials", "Contact"];

    return (
        <div className='flex flex-row w-full p-4 justify-between items-center shadow-md dark:border-b dark:border-slate-600'>
            <div>
                <NavLink href='#' label='Ryan Klivansky' />
            </div>
            <div className='flex flex-row'>
                {sections.map(section => (
                <NavLink className='mx-6 ' key={section} href={`#${section.toLowerCase()}`} label={section} />
                ))}
            </div>
            <div>
                <ThemeSwitcher />
            </div>
        </div>
    )
}