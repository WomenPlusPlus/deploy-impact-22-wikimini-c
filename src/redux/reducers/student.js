/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addStudentService } from '../../services/students';

export const addStudentToClass = createAsyncThunk(
  'teacher/addStudentToClass',
  (student, { rejectWithValue }) => addStudentService(student)
    .then((res) => {
      console.log(res);
      if (res.data.error) {
        return rejectWithValue(res.data.error);
      }

      return res;
    })
    .catch((error) => error.message),
);

const initialState = {
  status: '',
  message: '',
};

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {},
  extraReducers: {
    [addStudentToClass.pending]: (state) => {
      state.status = 'loading';
    },
    [addStudentToClass.fulfilled]: (state) => {
      state.status = 'success';
    },
    [addStudentToClass.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default studentSlice.reducer;
