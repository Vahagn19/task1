import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "../slices/scheduleSlice";
import userSlice from "../slices/userSlice";
import { useDispatch } from "react-redux";


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

export const useAppDispatch = () => useDispatch();
