/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addStudentService,
  listStudentsService,
  giveTaskToStudentService,
} from '../../services/students';

export const addStudentToClass = createAsyncThunk(
  'student/addStudentToClass',
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
  'student/listStudentsInClass',
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

export const giveTask = createAsyncThunk(
  'student/giveTask',
  (taskData, { rejectWithValue }) => giveTaskToStudentService(taskData)
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
  data: {
    students: [],
  },
};

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    resetToInitialState: (state) => {
      state.status = '';
      state.message = '';
    },
  },
  extraReducers: {
    [addStudentToClass.pending]: (state) => {
      state.status = 'loading';
    },
    [addStudentToClass.fulfilled]: (state) => {
      state.status = 'success add student';
    },
    [addStudentToClass.rejected]: (state) => {
      state.status = 'failed to add student';
      state.message = 'Failed to add student to this class';
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
    [giveTask.pending]: (state) => {
      state.status = 'loading';
    },
    [giveTask.fulfilled]: (state) => {
      state.status = 'task given';
    },
    [giveTask.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default studentSlice.reducer;
export const { resetToInitialState } = studentSlice.actions;
