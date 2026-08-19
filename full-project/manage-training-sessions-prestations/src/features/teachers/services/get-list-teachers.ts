import type { Teacher } from "../models/teacher";

export const getListTeachers = async (): Promise<Teacher[]> => {
    const res = await fetch('/api/teachers');
    return await res.json()
}