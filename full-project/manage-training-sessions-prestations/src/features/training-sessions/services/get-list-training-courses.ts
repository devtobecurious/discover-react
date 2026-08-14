import type { TrainingCourse } from "../models/training-course";

export const getListTrainingCourses = async () => {
    const url = import.meta.env.BASE_URL + "training-courses.json";
    const response = await fetch(url);
    const data = await response.json();

    return data as TrainingCourse[];
}