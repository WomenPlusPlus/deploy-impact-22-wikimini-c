/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createClassService } from '../../services/teacher';

const initialState = {
  allClasses: [],
  status: '',
};

export const createClass = createAsyncThunk(
  'teacher/createClass',
  async (classData) => {
    const res = await createClassService(classData);
    console.log(res);
  },
);

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {},
  extraReducers: {
    [createClass.fulfilled]: (state) => {
      state.status = 'Created';
    },
    [createClass.rejected]: (state) => {
      state.status = 'Failed to create user';
    },
    [createClass.pending]: (state) => {
      state.status = 'Loading';
    },
  },
});

export default teacherSlice.reducer;
