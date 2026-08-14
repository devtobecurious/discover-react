import type { TrainingSession } from "../models/training-session"

export type OneSession = {
    item: TrainingSession
}

export const OneSession = ({item}: OneSession) => {
    return (
        <>
            <div>
                {item.beginDate.toString()} | {item.endDate.toString()} - {item.type}
            </div>
        </>
    )
}