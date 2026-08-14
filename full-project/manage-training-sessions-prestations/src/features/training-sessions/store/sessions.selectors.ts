import type { RootState } from "@/chore/store";

export const selectAll = (state: RootState) => state.trainingSessionReducer.items
export const selectCount = (state: RootState) => state.trainingSessionReducer.items.length
export const isLoading = (state: RootState) => state.trainingSessionReducer.loading