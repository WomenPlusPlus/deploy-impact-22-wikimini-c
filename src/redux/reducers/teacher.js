import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  classes: [],
};

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    createClass: (state, action) => {
      const nextId = state.classes.length + 1;
      state.classes.push({ ...action.payload, id: nextId });
    },
  },
});

export const { createClass } = teacherSlice.actions;
export default teacherSlice.reducer;
