import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "../slices/scheduleSlice";
 export const store = configureStore({
    reducer: {
        schedule: scheduleSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})

