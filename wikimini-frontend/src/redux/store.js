import { configureStore } from '@reduxjs/toolkit';
import teacherReducer from './reducers/teacher';

export const store = configureStore({
  reducer: {
    teacher: teacherReducer,
  },
});
