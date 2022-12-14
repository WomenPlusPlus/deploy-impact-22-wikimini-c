import React from 'react';
import {
  Box, Typography, TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FilledFullWidthSubmitButton from '../../components/filled-full-width-submit-button';
import OutlinedControlledWidthButton from '../../components/outlined-controlled-width-button';
import './login.css';
import CornerPictures from '../../components/corner-pictures';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object({
  username: yup.string()
    .required('Required')
    .min(6, 'At least 6 characters'),
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
    <div className="login-container">
      <Box display="flex" width="100%" justifyContent="center" alignItems="center" flexDirection="column" marginTop={2}>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            width:
            {
              lg: 420,
              md: 420,
              sm: 400,
              xs: 300,
            },
          }}
          onSubmit={handleSubmit}
        >
          <Typography component="h2" variant="h4">LOGIN</Typography>
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
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
          />
          <Box
            marginTop={-3}
            marginLeft={4}
            width="100%"
            display="flex"
            textAlign="left"
          >
            <Typography variant="subtitle2">Forgot your password?</Typography>
          </Box>
          <FilledFullWidthSubmitButton
            disabled={!dirty || !isValid}
            onClick={() => navigate('/classes')}
          >
            Log In
          </FilledFullWidthSubmitButton>
        </Box>
        <Box width="420px" textAlign="center">
          <Typography mb={1} mt={3}>Don&apos;t have an account yet?</Typography>
          <OutlinedControlledWidthButton onClick={() => navigate('/register')}>
            Register
          </OutlinedControlledWidthButton>
        </Box>
      </Box>
      <CornerPictures />
    </div>
  );
};

export default LoginPage;
