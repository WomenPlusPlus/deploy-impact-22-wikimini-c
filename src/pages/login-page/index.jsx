import React from 'react';
import {
  Box, Typography, TextField, Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import MainContainer from '../../components/main-container';

const initialValues = {
  email: '',
  password: '',
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
});

const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log('Values entered');
    console.table(values);
  };

  const {
    dirty, values, errors, touched, isValid, handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <MainContainer>
      <Box display="flex" width="100%" justifyContent="center">
        <Box height="500px" width="500px" border="2px solid black">Some image</Box>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            height: 500,
            width: 350,
            px: 5,
            py: 3,
          }}
          onSubmit={handleSubmit}
        >
          <Typography component="h1" variant="h4">Login</Typography>
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
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={!dirty || !isValid}
          >
            Login
          </Button>
          <Button
            sx={(theme) => ({
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            })}
            onClick={() => navigate('/classes')}
          >
            If logged-in, teacher will see classes. Click here.
          </Button>
          <Typography>Don&apos;t have an account yet?</Typography>
          <Button
            sx={(theme) => ({
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            })}
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </Box>
      </Box>
    </MainContainer>
  );
};

export default LoginPage;
