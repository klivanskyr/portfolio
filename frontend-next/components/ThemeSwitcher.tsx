import { useTheme } from 'next-themes';
import { ActionIcon } from '@mantine/core';

import { SunIcon, MoonIcon } from '@/assets';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const className = 'rounded-full p-1 ';

    return (
        <ActionIcon variant='outline' aria-label='ThemeSwitcher'>
            {theme === 'dark'
                ?   <SunIcon className={`${className} h-[27px] w-[27px]`} onClick={() => setTheme('light')} />
                :   <MoonIcon className={`${className} h-[27px] w-[27px]`} onClick={() => setTheme('dark')} />
            }
        </ActionIcon>
    );
};
