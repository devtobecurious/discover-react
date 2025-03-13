import { ActionDispatch, createContext } from "react";
import { initialTaskListValue, TasksState } from ".";
import { Action, AddAction } from "./action";

export const TasksContext = createContext<TasksState>(initialTaskListValue)

type DispatchContextType = ActionDispatch<[Action | AddAction]> | null
export const TasksDispatchContext = createContext<DispatchContextType>(null)