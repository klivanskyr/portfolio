'use client';

import { useState, useEffect } from 'react';

import { fetcher } from "@/utils";
import CardsCarousel from './CardsCarousel';

interface ProjectData {
    title: string,
    description: string,
    imageUrl: string,
    linkUrl: string,
}

export default function Projects(): JSX.Element {
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchAbout = async () => {
        const url = `${process.env.NEXT_PUBLIC_DJANGO_API_DOMAIN}/api/projects`;
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
        const data: ProjectData[] = response.data as ProjectData[];
    
        setProjects(data);
    }

    useEffect(() => {
        setLoading(true);
        fetchAbout().then(() => setLoading(false));
    }, []);


    function Carousel() {
        const data = projects.map((project) => ({
            image: project.imageUrl,
            title: project.title,
            description: project.description,
        }));

        return <CardsCarousel data={data} />
    }

    return (
        <div className='bg-slate-300 min-w-screem min-h-screen'>
            <Carousel />
        </div>
    )
}