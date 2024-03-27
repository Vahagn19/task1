import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = [
  { key: "Sunday", value: [], id: "1" },
  { key: "Monday", value: [], id: "2" },
  { key: "Thusday", value: [], id: "3" },
  { key: "Wednesday", value: [], id: "4" },
  { key: "Thursday", value: [], id: "5" },
  { key: "Friday", value: [], id: "6" },
];

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setValue: (state, action) => {
      const { newTime, key } = action.payload;

      state.forEach((item, index) => {
        if (key === item.key) {
          state[index].value.push(newTime);
        }
      });
    },
    addTimeField: (state, action) => {
      const { key } = action.payload;
      console.log(key);
      state.forEach((item, index) => {
        if (key === item.key) {
          state[index].value.push([]);
        }
      });
    },
 
  },
});

export const { setValue, addTimeField } = scheduleSlice.actions;
export default scheduleSlice.reducer;
