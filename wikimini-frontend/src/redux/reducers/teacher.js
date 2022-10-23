import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//  The total number of classes is temporary because this data will be fetched from the backend
//  It is just a way to add a new class to this hash
//   totalClasses: 1,
//   1: {
//     id: 1,
//     teacherId: 1,
//     classTitle: '',
//     students: [
//       {
//         id: 1,
//         name: '',
//         username: '',
//       },
//     ],
//     start: Date.now(),
//     end: Date.now(),
//     token: '',
//   },
// }

const initialState = {
  classes: [],
};

// SLICE (STATE OF TEACHERS)
export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    createClass: (state, action) => {
      const nextId = state.classes.length + 1;
      state.classes.push({ ...action.payload, id: nextId });
    },
    addStudent: (state, action) => {
      const { classId, student } = action.payload;

      state.classes.find((c) => c.id === classId).students.push(student);
    },
    // removeStudent: (state, action) => {
    //   const { studentId, classId } = action.payload;

    //   /* eslint no-param-reassign: "error" */
    //   state.classes[classId].students = state.classes[classId].students.filter(
    //     (student) => student.id !== studentId,
    //   );
    // },
  },
});

export const { createClass, removeStudent, addStudent } = teacherSlice.actions;
export default teacherSlice.reducer;

// REDUCERS => ACTIONS THAT WILL CHANGE THE STATE
