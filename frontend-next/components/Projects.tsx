'use client';   

import { Select } from '@mantine/core';
import Image from 'next/image';
import { useEffect, useState } from "react";

import { fetcher } from "@/utils";
import { Card, CardsCarousel, Searchbar, Item, Filter, Pill } from "@/components";

interface ProjectData {
    title: string,
    description: string,
    skills: SkillsData[],
    imageUrl: string,
    linkUrl: string,
}

interface SkillsData {
    name: string,
    imageUrl: string,
}

export default function Projects() {
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [search, setSearch] = useState<string>('');
    const [selectFilter, setSelectFilter] = useState<string | null>(null);

    const fetchProjects = async () => {
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

        const data = response.data as ProjectData[];

        return data;
    }

    useEffect(() => {
        fetchProjects().then((data) => {
            if (!data) return;
            setProjects(data);
        });
    }, []);

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

    const footer = (project: ProjectData) => {
        if (project.skills.length === 0) return <></>;
        return (
            <div className="grid max-h-[50px] grid-cols-3 p-1 items-center overflow-y-scroll">
                {project.skills.map((skill: SkillsData, index: number) => (
                    <Pill className='max-w-fit min-w-[80px] px-4 m-1 text-center' key={index} text={skill.name} />
                ))}
            </div>
        )
    }

    const allSkills = projects.flatMap((project) => project.skills)
        .filter((skill, index, self) => self.findIndex((s) => s.name === skill.name) === index);

    return (
        <div id="Projects" className='min-w-screen py-4 flex flex-col justify-center items-center'>
            <div className='flex flex-row w-full justify-center items-center'>
                <Searchbar classNames={{ wrapper: 'w-1/2 border border-gray-300 rounded-md m-8', input: 'p-2 rounded-md border border-gray-300 dark:border-white w-full' }} search={search} setSearch={setSearch} />
                <Select variant='default' radius='md' size='md' classNames={{ option: 'p-1' }} placeholder='Select Skill' data={allSkills.map((skill: SkillsData) => skill.name)} value={selectFilter} onChange={setSelectFilter}/>
            </div>
            <Filter search={search} items={
                selectFilter 
                    ? projects.filter((project: ProjectData) => project.skills.some((skill: SkillsData) => skill.name.toLowerCase() === selectFilter.toLowerCase()))
                    : projects
                } filterFields={['title', "description"]}>
                {(filteredItems) => (
                    <CardsCarousel cards={
                        filteredItems.map((project: Item, index: number) => (
                            <Card 
                                classNames={{ wrapper: "min-w-[300px] max-w-[300px] min-h-[200px] max-h-[300px] w-full h-full" }}
                                key={index}
                                header={header(project as ProjectData)}
                                body={body(project as ProjectData)}
                                footer={footer(project as ProjectData)}
                            />
                        ))
                    } cardsToDisplay={3} />
                )}
            </Filter>
        </div>
    )
}