export type TrainingSessionType = 'final' | 'presta';

export interface TrainingSession {
    id: number;
    trainingCourseId: number;
    beginDate: Date;
    endDate: Date;
    type: TrainingSessionType
}

export type CreateTrainingSession = Omit<TrainingSession, 'id'>;