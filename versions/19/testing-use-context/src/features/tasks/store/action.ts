import { Task } from "../models"

export type Action = {
    type: 'add' | 'update' | 'remove'
}

export type AddAction = {
    item: Task
} & Action

