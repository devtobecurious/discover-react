import { createAsyncThunk } from "@reduxjs/toolkit";
import { getListTrainingSessions } from "../services/get-list-training-sessions";

export const fetchSessions = createAsyncThunk(
    "trainingSessions/fetch",
    async () => {
        const data = await getListTrainingSessions()
        return data
    }
)