import { useTheme } from 'next-themes';
import { ActionIcon } from '@mantine/core';

import { SunIcon, MoonIcon } from '@/assets';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const className = 'w-[25px] h-[25px] rounded-full p-1 ';

    return (
        <ActionIcon variant='outline' aria-label='ThemeSwitcher'>
            {theme === 'dark'
                ?   <SunIcon className={className + 'bg-white'} onClick={() => setTheme('light')} />
                :   <MoonIcon className={className + ''} onClick={() => setTheme('dark')} />
            }
        </ActionIcon>
    );
};
