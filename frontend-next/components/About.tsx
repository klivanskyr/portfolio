'use client';

import { useEffect, useState } from 'react';

import fetcher from '@/utils/fetcher';

interface AboutData {
    firstName: string;
    lastName: string;
    title: string;
    description: string;
    imageUrl: string;
}

export default function About() {
    const [about, setAbout] = useState<AboutData>({ firstName: '', lastName: '', title: '', description: '', imageUrl: '' });
    const [loading, setLoading] = useState<boolean>(false);

    const fetchAbout = async () => {
        const url = `${process.env.NEXT_PUBLIC_DJANGO_API_DOMAIN}/api/about`;
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
        const data: AboutData[] = response.data as AboutData[];
    
        setAbout({ 
            firstName: data[0].firstName,
            lastName: data[0].lastName,
            title: data[0].title,
            description: data[0].description,
            imageUrl: data[0].imageUrl
        });
    }

    useEffect(() => {
        setLoading(true);
        fetchAbout();
        setLoading(false);
    }, []);

    return (
        <div id='about'>
            <h1>About</h1>
            <div>
                <h1>{about.firstName}</h1>
                <h1>{about.lastName}</h1>
                <h1>{about.title}</h1>
                <p>{about.description}</p>
                <img src={about.imageUrl} alt='profile' />
            </div>
        </div>
    )
}