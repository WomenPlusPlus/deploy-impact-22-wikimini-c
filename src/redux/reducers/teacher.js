/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createClassService } from '../../services/teacher';
import { getClassesService, createTaskService } from '../../services/classes';

const initialState = {
  allClasses: [],
  currentClass: {},
  currentTask: {},
  status: '',
  message: '',
};

export const createClass = createAsyncThunk(
  'teacher/createClass',
  (classData, { rejectWithValue }) => createClassService(classData)
    .then((res) => {
      if (res.data.error) {
        return rejectWithValue(res.data.error);
      }

      console.log(res);

      return res.data.createclass.created_class;
    })
    .catch((error) => rejectWithValue(error.message)),
);

export const getClasses = createAsyncThunk('teacher/getClasses', () => getClassesService()
  .then((res) => res.query.allclasses.map((c) => {
    const { id, name: classTitle, teacherid } = c;
    console.log(classTitle);

    return { id, classTitle, teacherid };
  }))
  .catch((error) => console.log(error.message)));

export const createTask = createAsyncThunk(
  'teacher/createTask',
  (taskData, { rejectWithValue }) => createTaskService(taskData)
    .then((res) => {
      console.log(res);

      if (res.data.error) {
        return rejectWithValue(res.data.error);
      }

      return res.data.createtask.created_task;
    })
    .catch((error) => rejectWithValue(error.message)),
);

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
  extraReducers: {
    [createClass.fulfilled]: (state, action) => {
      state.status = 'Created';
      state.message = 'Class created successfully';
      state.currentClass = action.payload;
    },
    [createClass.rejected]: (state) => {
      state.status = 'Failed';
      state.message = 'Failed to create class';
    },
    [createClass.pending]: (state) => {
      state.status = 'Loading';
    },
    [getClasses.fulfilled]: (state, action) => {
      state.allClasses = action.payload;
      state.status = 'Loaded';
      state.message = 'Classes loaded successfully';
    },
    [getClasses.rejected]: (state) => {
      state.status = 'Failed';
      state.message = 'Failed to load class';
    },
    [getClasses.pending]: (state) => {
      state.status = 'Loading';
    },
    [createTask.fulfilled]: (state, action) => {
      state.status = 'Task created';
      state.currentTask = action.payload;
    },
    [createTask.rejected]: (state) => {
      state.status = 'Failed';
      state.message = 'Failed to create a task';
    },
    [createTask.pending]: (state) => {
      state.status = 'Loading';
    },
  },
});

export default teacherSlice.reducer;
export const { changeStatus } = teacherSlice.actions;
