import { Task } from "../models"

export type TaskListProps = {
    items: Task[]
}

export const TaskList = ({items}: TaskListProps) => {
    const divs = items.map(item => <div key={item.id}>{item.text}</div> )

    return (
        <>
        {divs}
        </>
    )
}