'use server';

import { fetcher } from "@/utils";

interface SkillData {
    name: string,
    projects: number[],
    experiences: number[],
    imageUrl: string | null
}

async function fetchSkills(): Promise<SkillData[] | undefined> {
    const url = `${process.env.NEXT_PUBLIC_DJANGO_API_DOMAIN}/api/skills`;
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
    const data: SkillData[] = response.data as SkillData[];
    return data;
}

export default async function Skills() {
    const skills = await fetchSkills();

    return (
        <div>
            <h1>Skills: </h1>
            {skills?.map((skill, index) => (
                <div key={index}>
                    <h1>{skill.name}</h1>
                </div>
            ))}
        </div>
    )
}