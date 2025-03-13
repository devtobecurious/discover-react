import { AddTask } from "../components/AddTask"
import { TaskList } from "../components/TaskList"
import { Task } from "../models"
import { useTasksReducer } from "../store"
import { LayoutListPage } from "./LayoutListPage"

export const TaskListPage = () => {
    const [taskState, dispatch] = useTasksReducer()

    const addOneTask = (item: Task) => {
        dispatch({ 
            type: 'add',
            item
        })
    }

    return (
        <>
            <LayoutListPage>
                <AddTask addOne={addOneTask}></AddTask>
                <TaskList items={taskState.items}></TaskList>
            </LayoutListPage>
        </>
    )
}