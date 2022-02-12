import { __URL__ } from "../Constants";
import { EmailType } from "../types";

export async function fetchData(): Promise<EmailType[]> {
    const result = await fetch(`${__URL__}/data.json`)
    return await result.json();
}