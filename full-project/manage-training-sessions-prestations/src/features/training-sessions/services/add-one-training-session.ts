import type { CreateTrainingSession, TrainingSession } from "../models/training-session";

export const addOneTrainingCourse = async (item: CreateTrainingSession): Promise<TrainingSession> => {
    return new Promise(resolve => {
        resolve({
            beginDate: item.beginDate,
            endDate: item.endDate,
            trainingCourseId: item.trainingCourseId,
            type: item.type,
            id: Math.random() * 1000
        })
    })
}