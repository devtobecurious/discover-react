import { useEffect, useState } from "react"
import { getListTeachers } from "../services/get-list-teachers"
import type { Teacher } from "../models/teacher"

export const ListTeachers = () => {
    const [list, setlist] = useState<Teacher[]>([])

    useEffect(() => {
        getListTeachers().then(items => setlist([...items]))
    }, [])

    return (
        <>
            <h1>Enseignants</h1>
            <div>{ list.map(item => <div role="listitem" key={item.id}>{item.firstName}</div>) }</div>
        </>
    )
}