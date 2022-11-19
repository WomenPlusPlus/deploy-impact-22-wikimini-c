import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Typography, TextField, Modal, Button,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import ModalButton from '../../components/modal-button';
import { addStudentToClass, resetToInitialState } from '../../redux/reducers/student';
import TransitionAlert from '../../components/transition-alert';

const initialValues = {
  username: '',
};

const validationSchema = yup.object({
  username: yup.string()
    .required('Required')
    .min(2, 'At least 2 characters'),
});

const AddStudentModal = ({ classId }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const student = useSelector((state) => state.student);

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSubmit = (values) => {
    dispatch(addStudentToClass({ ...values, classId }));
  };

  const clearStatus = React.useCallback(() => {
    dispatch(resetToInitialState());
  }, [dispatch]);

  React.useEffect(() => {
    if (student.status === 'success add student') {
      window.location.reload(true);
    }
  }, [student, clearStatus, classId, navigate]);

  const {
    dirty, values, errors, touched, isValid, handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <ModalButton openModal={() => setModalOpen(true)}>ADD</ModalButton>
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
            {student.status === 'failed to add student' && (
              <TransitionAlert severity="error" message={student.message} handleChange={clearStatus} />
            )}
            {' '}
            <Typography variant="h6">ADD STUDENT</Typography>
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
                name="username"
                label="Username"
                type="text"
                variant="outlined"
                fullWidth
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
              />
              <Button
                sx={(theme) => ({
                  background: theme.palette.secondary.main,
                  color: theme.palette.common.white,
                  width: '170px',
                  size: 'large',
                  py: 1.5,
                  border: '2px solid',
                  borderColor: 'secondary.main',
                  ':hover': {
                    bgcolor: theme.palette.common.white,
                    color: theme.palette.secondary.main,
                    border: '2px solid',
                    borderColor: 'secondary.main',
                  },
                })}
                type="submit"
                variant="contained"
                size="large"
                disabled={!dirty || !isValid || student.status === 'loading'}
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

export default AddStudentModal;
