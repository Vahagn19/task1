import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "../slices/scheduleSlice";
import userSlice from "../slices/userSlice";

 export const store = configureStore({
    reducer: {
        schedule: scheduleSlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})


