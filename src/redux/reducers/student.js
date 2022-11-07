/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addStudentService,
  listStudentsService,
} from '../../services/students';

export const addStudentToClass = createAsyncThunk(
  'teacher/addStudentToClass',
  (student, { rejectWithValue }) => addStudentService(student)
    .then((res) => {
      if (res.data.error) {
        return rejectWithValue(res.data.error);
      }

      return res;
    })
    .catch((error) => error.message),
);

export const listStudentsInClass = createAsyncThunk(
  'teacher/listStudentsInClass',
  (classId, { rejectWithValue }) => listStudentsService(classId)
    .then((res) => {
      console.log(res);
      if (res.data.error) {
        return rejectWithValue(res.data.error);
      }

      return res.data.query.studentsinclass;
    })
    .catch((error) => error.message),
);

const initialState = {
  status: '',
  message: '',
  data: {
    students: [],
  },
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
    [listStudentsInClass.pending]: (state) => {
      state.status = 'loading';
    },
    [listStudentsInClass.fulfilled]: (state, action) => {
      state.status = 'success';
      state.data.students = action.payload.map((student) => ({
        id: student.user_id,
        username: student.user_name,
      }));
    },
    [listStudentsInClass.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default studentSlice.reducer;
