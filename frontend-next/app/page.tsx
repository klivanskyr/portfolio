'use client';

import { useEffect, useState } from "react";

import { Project } from "@/types";
import fetcher from "@/utils/fetcher";

export default function Home(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches projects from the backend. And sets the projects state in Home.
   * @async
   * @function fetchProjects
   * @returns {Promise<void>}
   * 
   */
  const fetchProjects = async () => {
    const url = process.env.NEXT_PUBLIC_DOMAIN_NAME + '/api/projects' as string;
    const response = await fetcher<Project[]>(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });
    if ("error" in response) {
      setError(response.error.message);
      return;
    }

    const projects = response.data;

    setProjects(projects);
  };

  // Fetch projects on load
  useEffect(() => {
    fetchProjects();
  }, []);

  console.log(projects);
  
  return (
    <div>
      <h1>My Portfolio</h1>
      <button className="bg-white text-black rounded-md shadow-md p-2 m-2" onClick={() => fetchProjects()}>Load Projects</button>
    </div>
  );
}
