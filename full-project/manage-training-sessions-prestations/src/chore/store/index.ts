import { configureStore, type Action, type ThunkAction } from "@reduxjs/toolkit";
import trainingSessionReducer from '@/features/training-sessions/store';

export const store = configureStore({
    reducer: {
        trainingSessionReducer
    }
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>