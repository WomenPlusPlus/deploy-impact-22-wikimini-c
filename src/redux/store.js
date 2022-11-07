import { configureStore } from '@reduxjs/toolkit';
import teacherReducer from './reducers/teacher';
import studentReducer from './reducers/student';

export const store = configureStore({
  reducer: {
    teacher: teacherReducer,
    student: studentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});
