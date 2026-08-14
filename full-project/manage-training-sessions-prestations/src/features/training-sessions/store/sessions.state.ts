import type { TrainingSession } from "../models/training-session";

export interface SessionsState {
    items: TrainingSession[],
    loading ?: boolean
}

export const initialState: SessionsState = {
    items: []
}