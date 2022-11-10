import React from 'react';
import {
  Box, Typography, TextField, CardMedia, Chip,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import StyledSubmitButton from '../../components/submit-button';
import './register.css';

// const accountTypes = [
//   'Student',
//   'Teacher',
//   'Parent',
// ];

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
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
  passwordConfirmation: yup.string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});

const RegisterPage = () => {
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
    <div className="register-container">
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
          <Typography component="h1" variant="h4">REGISTER</Typography>
          <Box width="100%" display="flex" justifyContent="space-between">
            {/* {accountTypes.map((type) => (
            <Chip key={type} label={type}
            onClick={handleAccountType}
            color={account.accountType === type ? 'primary' : 'default'} />
          ))} */}
            <Chip
              style={{
                backgroundColor: 'white',
                border: '2px solid #EB5757',
                borderRadius: '10px',
                color: '#EB5757',
              }}
              label="STUDENT"
              variant="filled"
            />
            <Chip
              style={{
                backgroundColor: 'white',
                border: '2px solid #EB5757',
                borderRadius: '10px',
                color: '#EB5757',
              }}
              label="TEACHER"
              variant="filled"
            />
            <Chip
              style={{
                backgroundColor: 'white',
                border: '2px solid #EB5757',
                borderRadius: '10px',
                color: '#EB5757',
              }}
              label="PARENT"
              variant="filled"
            />
          </Box>
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
            label="Your username"
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
            name="passwordConfirmation"
            label="Repeat password"
            type="password"
            variant="outlined"
            fullWidth
            value={values.passwordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
          />
          <StyledSubmitButton
            disabled={!dirty || !isValid}
          >
            Register
          </StyledSubmitButton>
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

export default RegisterPage;
