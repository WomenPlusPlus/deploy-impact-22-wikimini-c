import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Typography,
  TextField,
  Modal,
  Button,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import ModalButton from '../../components/modal-button';
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

const AddClassModal = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const teacherState = useSelector((state) => state.teacher);
  const { class_id: classId } = teacherState.currentClass;

  const closeModal = () => {
    setModalOpen(false);
  };

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

  useEffect(() => {
    if (teacherState.status === 'Created') {
      clearStatus();
      navigate(`/class/${classId}/dashboard`);
    }
  }, [clearStatus, navigate, teacherState, dispatch, classId]);

  return (
    <Box>
      <ModalButton openModal={() => setModalOpen(true)}>ADD CLASS</ModalButton>
      <Modal open={modalOpen} onClose={closeModal}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        >
          <Box
            display="flex"
            flexDirection="column"
            height="430px"
            width="330px"
            p={4}
            gap={3}
            justifyContent="center"
            alignItems="center"
            borderRadius="20px"
            sx={(theme) => ({
              background: theme.palette.primary.light,
            })}
          >
            {teacherState.status === 'Failed' && (
            <TransitionAlert severity="error" message={teacherState.message} handleChange={clearStatus} />
            )}
            {' '}
            <Typography variant="h6">ADD NEW CLASS </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                width: '100%',
              }}
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
                sx={(theme) => ({
                  background: theme.palette.secondary.main,
                  color: theme.palette.common.white,
                  width: '170px',
                  size: 'large',
                  py: 1.5,
                  border: '2px solid theme.palette.secondary.main',
                  ':hover': {
                    bgcolor: theme.palette.common.white,
                    color: theme.palette.secondary.main,
                    border: '2px solid #EB5757',
                  },
                })}
                type="submit"
                variant="contained"
                size="large"
                disabled={!dirty || !isValid || teacherState.status === 'Loading' || teacherState.status === 'Created'}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddClassModal;
