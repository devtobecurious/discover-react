import { useTasks } from "./TaskContextProvider"


export const TaskList = () => {
    const state = useTasks()
    const divs = state.items.map(item => <div key={item.id}>{item.text}</div> )

    return (
        <>
        {divs}
        </>
    )
}