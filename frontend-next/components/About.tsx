'use client';

import { useEffect, useState } from 'react';
import { Skeleton } from '@mantine/core';

import { ImageTextLayout1 } from '@/components';
import { fetcher } from '@/utils';


interface AboutData {
    firstName: string;
    lastName: string;
    title: string;
    description: string;
    imageUrl: string;
}

export default function About(): JSX.Element {
    const [about, setAbout] = useState<AboutData>({ firstName: '', lastName: '', title: '', description: '', imageUrl: '' });
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAbout = async () => {
        const url = `${process.env.NEXT_PUBLIC_DJANGO_API_DOMAIN}/api/abouts`;
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
        fetchAbout().then(() => setLoading(false));
    }, []);

    
    console.log(loading);
    return (
        <div className='min-w-screen min-h-screen'>
            <ImageTextLayout1 imageUrl={about.imageUrl} rows={[
                    <div className='flex flex-row my-0.5' key='name'>
                        <Skeleton className='mx-0.5' visible={loading}>
                            {about.firstName}
                        </Skeleton>
                        <Skeleton className='mx-0.5' visible={loading}>
                            {about.lastName}
                        </Skeleton>
                    </div>,
                    <Skeleton className='my-0.5' key='title'>
                        {about.title}
                    </Skeleton>,
                    <Skeleton className='my-0.5' key='description'>
                        {about.description}
                    </Skeleton>,
                ]} />
        </div>
        
    )
}