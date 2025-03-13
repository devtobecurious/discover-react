import { PropsWithChildren, useContext } from "react"
import { TasksContext, TasksDispatchContext } from "../store/context"
import { useTasksReducer } from "../store"

export type Context = PropsWithChildren

export const TaskContextProvider = ({children}: Context) => {
    const [taskState, dispatch] = useTasksReducer()

    return (
        <TasksContext.Provider value={taskState}>
            <TasksDispatchContext value={dispatch}>
                {children}
            </TasksDispatchContext>
        </TasksContext.Provider>
    )
}

export const useTasks = () => useContext(TasksContext)
export const useTasksDispatch = () => useContext(TasksDispatchContext)