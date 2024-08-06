'use client';

import { useEffect, useState } from "react";

import { fetcher } from "@/utils";

interface SkillData {
    name: string,
    projects: number[],
    experiences: number[],
    imageUrl: string | null
}

export default function Skills() {
    const [skills, setSkills] = useState<SkillData[]>([]);

    const fetchSkills = async () => {
        const url = `${process.env.NEXT_PUBLIC_DJANGO_API_DOMAIN}/api/skills`;
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
        const data: SkillData[] = response.data as SkillData[];
        
        setSkills(data);
    }

    useEffect(() => {
        fetchSkills();
    }, []);


    return (
        <div>
            <h1>Skills: </h1>
            {skills.map((skill, index) => (
                <div key={index}>
                    <h1>{skill.name}</h1>
                </div>
            ))}
        </div>
    )
}