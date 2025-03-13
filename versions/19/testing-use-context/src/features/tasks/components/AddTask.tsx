import { useState } from "react"
import { useTasksDispatch } from "./TaskContextProvider"

export const AddTask = () => {
    const [text, setText] = useState('')
    const dispatch = useTasksDispatch()

    const onClickToAdd = () => {
        if(! dispatch) {
            return;
        }
        dispatch(
            { 
                item: {
                    id: 0,
                    state: 'draft',
                    text
                },
                type: 'add'
            }
        )
        setText('')
    }

    return (
        <>
            <input type="text" value={text} onChange={ e => setText(e.target.value)}></input><button onClick={onClickToAdd}>Add</button>
        </>
    )
}