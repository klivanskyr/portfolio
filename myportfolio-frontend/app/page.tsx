'use client';

import { useEffect, useState } from "react";

import { Project } from "@/types";

export default function Home(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("http://localhost:8000/projects");
      if (!response.ok) {
        console.log("Failed to fetch projects. Error: ", response.statusText);
        return;
      }
      const projects = await response.json();
      if (!projects) {
        console.log("Failed to parse projects from response.");
        return;
      }
      setProjects(projects);
    };

    fetchProjects();
  }, []);

  console.log(projects);
  
  return (
    <div>
      <h1>My Portfolio</h1>
    </div>
  );
}
