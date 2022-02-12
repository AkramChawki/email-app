import { EmailType } from "../types";

export async function fetchData(): Promise<EmailType[]> {
    const result = await fetch(`/data.json`)
    return await result.json();
}