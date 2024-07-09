import { Success, Failure } from "@/types";

/**
 * Try catch using fetch.
 * Fetches the url based on params.
 * Handles errors and returns a Success or Failure.
 * @param url - The url to fetch
 * @param params - The parameters to pass to fetch
 * @returns A promise that resolves to either a Success or Failure
 * @example
 * const response = await fetcher<Project[]>(url, {
 *  method: "GET",
 * headers: {
 * "Content-Type": "application/json",
 * },
 * cache: "no-cache",
 * });
 * if ("error" in response) {
 * setError(response.error.message);
 * return;
 * }
 * const projects = response.data;
 * setProjects(projects);
 * 
  */
export default async function fetcher<T>(url: string, params: Object): Promise<Success<T> | Failure> {
    try {
        const response = await fetch(url, params);
        if (!response.ok) {
            const ret: Failure = { error: Error(response.statusText) };
            return ret;
        }
        const data = await response.json();
        if (!data) {
            const ret: Failure = { error: Error("Failed to parse response.") };
            return ret;
        }
        const ret: Success<T> = { data };
        return ret;

    } catch (error) {
        const ret: Failure = { error: Error(`${error}`)};
        return ret;
    }
}