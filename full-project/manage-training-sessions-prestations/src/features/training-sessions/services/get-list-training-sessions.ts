import type { TrainingSession } from "../models/training-session";

export const getListTrainingSessions = async () => {
    const url = import.meta.env.BASE_URL + "training-sessions.json";
    const response = await fetch(url);
    const data = await response.json();

    return data as TrainingSession[];
}