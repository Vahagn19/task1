import { createSlice } from "@reduxjs/toolkit";



const initialState = [
  { key: "Sunday", value: [{ id: 1, data: [] }], id: 1 },
  { key: "Monday", value: [{ id: 1, data: [] }], id: 2 },
  { key: "Thusday", value: [{ id: 1, data: [] }], id: 3 },
  { key: "Wednesday", value: [{ id: 1, data: [] }], id: 4 },
  { key: "Thursday", value: [{ id: 1, data: [] }], id: 5 },
  { key: "Friday", value: [{ id: 1, data: [] }], id: 6 },
];

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    updateTimeField: (state, action) => {
      const { newTime, dayKey, id } = action.payload;
   
      console.log(newTime);
      state = state.map((item) => {
        if (item.key === dayKey) {
          const updateId = item.value.findIndex((el) => el.id === id);
          item.value[updateId].data = [...newTime];
        }
        return item;
      });
    },

    addTimeField: (state, action) => {
      const { key } = action.payload;

      state = state.map((item) => {
        if (item.key === key) {
          const length = item.value.length;
          const id = length ? item.value[length - 1].id + 1 : 1;
          item.value = [...item.value, { id, data: [] }];
        }
        return item
      });
    },

    deleteTimeField: (state, action) => {
      const { dayKey, id } = action.payload;

      state = state.map((item) => {
        if (item.key === dayKey) {
          const removeId = item.value.findIndex((el) => el.id === id);
          item.value = [
            ...item.value.slice(0, removeId),
            ...item.value.slice(removeId + 1),
          ];
        }
        return item;
      });
    },
  },
});

export const { updateTimeField, addTimeField, deleteTimeField } =
  scheduleSlice.actions;
export default scheduleSlice.reducer;
