'use server';

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

async function fetchAbout() {
    const url = `${process.env.NEXT_PUBLIC_DJANGO_API_DOMAIN}/api/abouts`;
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const response = await fetcher(url, params);
    if ('error' in response) {
        console.error(response.error.message);
        return;
    }
    const data: AboutData[] = response.data as AboutData[];
    return data[0];
}

export default async function About() {
    const about = await fetchAbout();

    if (!about) return <></>;
    return (
        <div id='About' className='min-w-screen'>
            <ImageTextLayout1 imageUrl={about.imageUrl} rows={[
                    <div className='flex flex-row my-0.5' key='name'>
                        <div className='mx-0.5'>{about.firstName}</div>
                        <div className='mx-0.5'>{about.lastName}</div>
                    </div>,
                    <div className='my-0.5' key='title'>{about.title}</div>,
                    <div className='my-0.5' key='description'>{about.description}</div>,
                ]} />
        </div>
        
    )
}