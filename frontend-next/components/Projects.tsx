'use server';   

import { fetcher } from "@/utils";
import { Card, CardsCarousel } from "@/components";
import Image from 'next/image';
import { cache } from "react";

interface ProjectData {
    title: string,
    description: string,
    imageUrl: string,
    linkUrl: string,
}

async function fetchAbout(): Promise<ProjectData[] | undefined> {
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
    return data;
}

export default async function Projects() {
    const projects = await fetchAbout();

    if (!projects) {
        return <div></div>;
    }

    const header = (project: ProjectData) => (
        <div className='text-center py-1'>
            <h1 className='text-lg'>{project.title}</h1>
            <h2 className='text-base'>{project.description}</h2>
        </div>
    )

    const body = (project: ProjectData) => {
        return (
            project.imageUrl 
                ? <Image src={project.imageUrl} alt={project.title} width={275} height={250} />
                : undefined
        )
    }
        
    return (
        <div id="Projects" className='border-2 min-w-screen min-h-screen'>
            <CardsCarousel cards={projects.map((project: ProjectData, index: number) => (
                <Card 
                    classNames={{ wrapper: "min-w-[300px] min-h-[200px]" }}
                    key={index}
                    header={header(project)}
                    body={body(project)}
                />
            ))} />
        </div>
    )
}