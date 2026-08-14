import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CreateTrainingSession } from "../models/training-session";
import { initialState } from "./sessions.state";
import { fetchSessions } from "./sessions.thunks";

export const trainingSessionsSlice = createSlice({
    name: 'trainingSessions',
    initialState,
    reducers: {
        addOne: (state, action: PayloadAction<CreateTrainingSession>) => {
            state.items.push({
                beginDate: action.payload.beginDate,
                endDate: action.payload.endDate,
                trainingCourseId: action.payload.trainingCourseId,
                id: -1,
                type: action.payload.type
            })
        }
    },
    extraReducers: builder => {
        builder.addAsyncThunk(fetchSessions, {
            pending: (state) => {
                state.loading = true
            },
            fulfilled: (state, action) => {
                state.loading = false
                state.items = action.payload
            }
        })
    }
})

export const { addOne } =  trainingSessionsSlice.actions
export default trainingSessionsSlice.reducer