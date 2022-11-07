import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  TextField,
  Modal,
  Button,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ModalButton from '../../components/modal-button';
import { addStudentToClass } from '../../redux/reducers/student';

const initialValues = {
  // firstName: '',
  // surname: '',
  username: '',
  // password: '',
  classId: 1,
};

const validationSchema = yup.object({
  // firstName: yup.string()
  //   .required('Required')
  //   .min(2, 'At least 2 characters')
  //   .matches(/^[a-ząčęėįšųūž ]+$/i, 'Only letters and spaces'),
  // surname: yup.string()
  //   .required('Required')
  //   .min(2, 'At least 2 characters')
  //   .matches(/^[a-ząčęėįšųūž ]+$/i, 'Only letters and spaces'),
  username: yup.string()
    .required('Required')
    .min(2, 'At least 2 characters'),
  // .matches(/^[0-9a-ząčęėįšųūž ]+$/i, 'Only letters and spaces'),
  // password: yup.string()
  //   .required('Required')
  //   .min(8, 'At least 8 characters')
  //   .matches(/[a-z]/, 'At least one upper-case letter')
  //   .matches(/[A-Z]/, 'At least one lower-case letter')
  //   .matches(/\d/, 'At least one number')
  //   .matches(/\W/, 'At least one special symbol'),
});

const AddStudentModal = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const dispatch = useDispatch();

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSubmit = (values) => {
    console.log('Values entered');
    console.table(values);
    dispatch(addStudentToClass(values));
  };

  const {
    dirty, values, errors, touched, isValid, handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <ModalButton openModal={() => setModalOpen(true)}>ADD A STUDENT</ModalButton>
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
            height="600px"
            width="500px"
            backgroundColor="white"
            p={7}
            gap={3}
            justifyContent="center"
            alignItems="center"
          >
            {' '}
            <Typography mb={3}>ADD A STUDENT</Typography>
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
              {/* <TextField
                name="firstName"
                label="Name"
                type="text"
                variant="filled"
                fullWidth
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              /> */}
              {/* <TextField
                name="surname"
                label="Surname"
                type="text"
                variant="filled"
                fullWidth
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.surname && Boolean(errors.surname)}
                helperText={touched.surname && errors.surname}
              /> */}
              <TextField
                name="username"
                label="Username"
                type="text"
                variant="filled"
                fullWidth
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
              {/* <TextField
                name="password"
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              /> */}
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={!dirty || !isValid}
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
