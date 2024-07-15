import { useTheme } from 'next-themes';
import { ActionIcon } from '@mantine/core';

import { SunIcon, MoonIcon } from '@/assets';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <ActionIcon variant='outline' aria-label='ThemeSwitcher'>
            {theme === 'dark'
                ?   <SunIcon className='w-[20px] h-[20px]' onClick={() => setTheme('light')} />
                :   <MoonIcon className='w-[20px] h-[20px]' onClick={() => setTheme('dark')} />
            }
        </ActionIcon>
    );
};
