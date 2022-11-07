import React from 'react';
import {
  Box, Typography, TextField, Button, CardMedia,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import StyledSubmitButton from '../../components/submit-button';
import StyledOutlinedRegisterButton from '../../components/outlined-register-button';
import './login.css';

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
    <div className="login-container">

      <Box display="flex" width="100%" justifyContent="center" alignItems="center" flexDirection="column" marginTop={2}>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
            width: 420,
          }}
          onSubmit={handleSubmit}
        >
          <Typography component="h1" variant="h4">LOGIN</Typography>
          <TextField
            style={{
              backgroundColor: 'white',
            }}
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
          />

          <TextField
            style={{
              backgroundColor: 'white',
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
          <Box marginTop={-4} width="100%" display="flex" textAlign="left"><Typography variant="subtitle2">Forgot your password?</Typography></Box>
          <StyledSubmitButton
            disabled={!dirty || !isValid}
          >
            Log In
          </StyledSubmitButton>
          <Button
            sx={(theme) => ({
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            })}
            onClick={() => navigate('/classes')}
          >
            If loggedin click here.
          </Button>
        </Box>
        <Box width="420px" textAlign="center">
          <Typography mb={1}>Don&apos;t have an account yet?</Typography>
          <StyledOutlinedRegisterButton>
            Register
          </StyledOutlinedRegisterButton>
        </Box>
      </Box>
      <Box height="200px" width="134px" left={0} bottom={-5} position="absolute">
        <CardMedia
          component="img"
          image="Tree.png"
          alt="tree"
        />
      </Box>
      <Box height="180px" width="114px" left={40} bottom={0} position="absolute">
        <CardMedia
          component="img"
          image="Tree.png"
          alt="tree"
        />
      </Box>
      <Box height="171px" width="145px" right={0} bottom={0} position="absolute">
        <CardMedia
          height="171px"
          component="img"
          image="woman-sitting.png"
          alt="woman sitting"
        />
      </Box>
      <Box height="65px" width="90px" right={70} bottom={10} position="absolute">
        <CardMedia
          height="65px"
          component="img"
          image="backpack.png"
          alt="backpack"
        />
      </Box>

      {/* <Box
        bottom={0}
        height={80}
        width="100%"
        border="2px solid red"
      >
        <Box position="relative" width="100%">
          <Box height="171px" width="145px" right={0} bottom={3} position="absolute">
            <CardMedia
              height="171px"
              component="img"
              image="woman-sitting.png"
              alt="woman sitting"
            />
          </Box>
        </Box>

      </Box> */}
    </div>
  );
};

export default LoginPage;
