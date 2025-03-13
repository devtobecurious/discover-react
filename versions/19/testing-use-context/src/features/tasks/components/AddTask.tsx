import { useState } from "react"
import { Task } from "../models"

export type AddTaskProps = {
    addOne: (task: Task) => void
}

export const AddTask = ({addOne}: AddTaskProps) => {
    const [text, setText] = useState('')

    const onClickToAdd = () => {
        addOne({
            id: 0,
            state: 'draft',
            text
        })
        setText('')
    }

    return (
        <>
            <input type="text" value={text} onChange={ e => setText(e.target.value)}></input><button onClick={onClickToAdd}>Add</button>
        </>
    )
}