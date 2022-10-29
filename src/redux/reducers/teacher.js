/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createClassService } from '../../services/teacher';

const initialState = {
  allClasses: [],
  status: '',
  message: '',
};

export const createClass = createAsyncThunk(
  'teacher/createClass',
  (classData, { rejectWithValue }) => createClassService(classData)
    .then((res) => res)
    .catch((error) => rejectWithValue(error.message)),
);

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
  },
  extraReducers: {
    [createClass.fulfilled]: (state) => {
      state.status = 'Created';
      state.message = 'Class created successfully';
    },
    [createClass.rejected]: (state) => {
      state.status = 'Failed';
      state.message = 'Failed to create class';
    },
    [createClass.pending]: (state) => {
      state.status = 'Loading';
    },
  },
});

export default teacherSlice.reducer;
export const { changeStatus } = teacherSlice.actions;
