/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  TextField, Box, Typography, Button,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import MainContainer from '../../components/main-container';

const initialValues = {
  email: '',
  emailConfirmation: '',
  password: '',
  passwordConfirmation: '',
  firstName: '',
  surname: '',
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Required')
    .email('Incorrect email format'),
  password: yup.string()
    .required('Required')
    .min(8, 'At least 8 characters')
    .matches(/[a-z]/, 'At least one upper-case letter')
    .matches(/[A-Z]/, 'At least one lower-case letter')
    .matches(/\d/, 'At least one number')
    .matches(/\W/, 'At least one special symbol'),
  passwordConfirmation: yup.string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  firstName: yup.string()
    .required('Required')
    .min(2, 'At least 2 characters')
    .matches(/^[a-ząčęėįšųūž ]+$/i, 'Only letters and spaces'),
  surname: yup.string()
    .required('Required')
    .min(2, 'At least 2 characters')
    .matches(/^[a-ząčęėįšųūž ]+$/i, 'Only letters and spaces'),
});

const RegisterPage = () => {
  const onSubmit = (values) => {
    console.log('Values entered');
    console.table(values);
  };

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <MainContainer>
      <Box widrth="100%" display="flex" flexDirection="column" alignItems="center">
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            width: '400px',
            height: '100%',
            border: '1px solid black',
            p: 4,
          }}
          onSubmit={handleSubmit}
          disabled={!dirty || !isValid}
        >
          <Typography variant="h5" mb={3}>Registration</Typography>
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="filled"
            fullWidth
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            name="emailConfirmation"
            label="Repeat email"
            type="email"
            variant="filled"
            fullWidth
            value={values.emailConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.emailConfirmation && Boolean(errors.emailConfirmation)}
            helperText={touched.emailConfirmation && errors.emailConfirmation}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            name="passwordConfirmation"
            label="Repeat password"
            type="password"
            variant="filled"
            fullWidth
            value={values.passwordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
            helperText={touched.passwordConfirmation && errors.passwordConfirmation}
          />
          <TextField
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
          />
          <TextField
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
          />
          <Button
            type="submit"
            disabled={!dirty || !isValid}
            variant="contained"
            size="large"
            sx={(theme) => ({
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            })}
          >
            Register
          </Button>
        </Box>
      </Box>
    </MainContainer>
  );
};

export default RegisterPage;
