import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Button,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import MainContainer from '../../components/main-container';
import AddStudentModal from './add-student-modal';
import { createClass, changeStatus } from '../../redux/reducers/teacher';
import TransitionAlert from '../../components/transition-alert';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

const students = [
  { studentName: 'Student1' },
  { studentName: 'Student2' },
  { studentName: 'Student3' },
  { studentName: 'Student4' },
  { studentName: 'Student5' },
  { studentName: 'Student6' },
  { studentName: 'Student7' },
  { studentName: 'Student8' },
  { studentName: 'Student9' },
  { studentName: 'Student10' },
];

const initialValues = {
  classTitle: '',
};

const validationSchema = yup.object({
  classTitle: yup.string()
    .required('Required')
    .min(2, 'At least 2 characters'),
});

const AddClassPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const teacherState = useSelector((state) => state.teacher);
  const { classId, setClassId } = useState();

  const onSubmit = (values) => {
    dispatch(createClass({ ...values, students: [] }));
  };

  const clearStatus = useCallback(() => {
    dispatch(changeStatus({ status: '', message: '' }));
  }, [dispatch]);

  const {
    dirty, values, errors, touched, isValid, handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // redirect to classes page
  // TODO: after the class page is created, update this route
  useEffect(() => {
    if (teacherState.status === 'Created') {
      clearStatus();
      
      navigate('/classes');
    }
  }, [clearStatus, navigate, teacherState.status]);

  return (
    <MainContainer>
      {teacherState.status === 'Failed' && (
        <TransitionAlert severity="error" message={teacherState.message} handleChange={clearStatus} />
      )}
      <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Box width="600px" height="100%" border="1px solid black" p={6} display="flex" flexDirection="column" gap={3}>
          <Typography>ADD CLASS NAME</Typography>
          <Box textAlign="center">
            <Box
              component="form"
              onSubmit={handleSubmit}
            >
              <TextField
                name="classTitle"
                label="Class title"
                type="text"
                variant="outlined"
                fullWidth
                value={values.classTitle}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.classTitle && Boolean(errors.classTitle)}
                helperText={touched.classTitle && errors.classTitle}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={!dirty || !isValid || teacherState.status === 'Loading'}
              >
                Save class
              </Button>
            </Box>

          </Box>
          <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            {classId && (
              <>
                <Box width="100%" border="1px solid black" borderRadius={1}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 290,
                      overflow: 'hidden',
                      overflowY: 'scroll',
                      gap: 2,
                    }}
                  >
                    <List sx={style} component="nav">
                      {students.map(({ studentName }) => (
                        <div key={studentName}>
                          <ListItem button>
                            <ListItemText key={studentName} primary={studentName} />
                            <IconButton aria-label="delete">
                              <DeleteOutlineIcon />
                            </IconButton>
                          </ListItem>
                          <Divider variant="middle" />
                        </div>
                      ))}
                    </List>
                  </Box>
                </Box>
                <AddStudentModal classId={classId} />
              </>
            )}

          </Box>
        </Box>
      </Box>
    </MainContainer>
  );
};

export default AddClassPage;
