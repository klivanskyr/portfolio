'use client';

import { useEffect, useState } from 'react';

import fetcher from '@/utils/fetcher';

export default function About() {
    const [about, setAbout] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchAbout = async () => {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/about`;
        const params = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-cache',
        };

        const response = await fetcher(url, params);
        if ('error' in response) {
            console.error(response.error.message);
            return;
        }
        setAbout(response.data as string);
    }

    useEffect(() => {
        setLoading(true);
        fetchAbout();
        setLoading(false);
    }, []);

    return (
        <div>
            <h1>About</h1>
            <h2>{about || 'blank'}</h2>
        </div>
    )
}