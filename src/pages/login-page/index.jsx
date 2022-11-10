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
          <Typography component="h1" variant="h4">LOGIN</Typography>
          <TextField
            style={{
              backgroundColor: 'white',
              borderRadius: '30px',
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
          <Box marginTop={-4} marginLeft={4} width="100%" display="flex" textAlign="left"><Typography variant="subtitle2">Forgot your password?</Typography></Box>
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
      <Box height="200px" width="134px" left={0} bottom={-18} position="absolute">
        <CardMedia
          component="img"
          image="Tree.png"
          alt="tree"
        />
      </Box>
      <Box height="180px" width="114px" left={35} bottom={-28} position="absolute">
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
    </div>
  );
};

export default LoginPage;
