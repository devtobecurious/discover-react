import { useReducer } from "react";
import { Task } from "../models";
import { Action, AddAction } from "./action";

export interface TasksState  {
    items: Task[]
}

export const initialTaskListValue: TasksState = {
    items: []
}

export const reducer = (state: TasksState, action: Action | AddAction) => {
    switch(action.type) {        
        case 'add': {
            const item = (action as AddAction).item;
            return {
                items: [...state.items, item!]
            }
        } break;
    }
    
    return state
}

export const useTasksReducer = () => {
    return useReducer(
        reducer,
        initialTaskListValue
    )
}