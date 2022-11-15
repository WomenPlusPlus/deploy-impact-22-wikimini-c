import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Typography, TextField, Button,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import MainContainer from '../../components/main-container';
import { createClass, changeStatus } from '../../redux/reducers/teacher';
import TransitionAlert from '../../components/transition-alert';

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
  const { class_id: classId } = teacherState.currentClass;

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
  useEffect(() => {
    if (teacherState.status === 'Created') {
      clearStatus();
      navigate(`/class/${classId}/dashboard`);
    }
  }, [clearStatus, navigate, teacherState, dispatch, classId]);

  return (
    <MainContainer>
      {teacherState.status === 'Failed' && (
        <TransitionAlert severity="error" message={teacherState.message} handleChange={clearStatus} />
      )}
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width="600px"
          height="100%"
          border="1px solid black"
          p={6}
          display="flex"
          flexDirection="column"
          gap={3}
        >
          <Box display="flex" gap={2}>
            <Typography>ADD CLASS NAME</Typography>
            <Button
              variant="contained"
              size="small"
              onClick={() => navigate('/classes')}
            >
              Back
            </Button>
          </Box>
          <Box textAlign="center">
            <Box
              component="form"
              onSubmit={handleSubmit}
            >
              <TextField
                style={{
                  backgroundColor: 'white',
                  borderRadius: '30px',
                  boxShadow: '0px 4px rgba(0, 0, 0, 0.25)',
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& > fieldset': {
                      border: 'none',
                    },
                  },
                }}
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
                disabled={!dirty || !isValid || teacherState.status === 'Loading' || teacherState.status === 'Created'}
              >
                Save class
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainContainer>
  );
};

export default AddClassPage;
