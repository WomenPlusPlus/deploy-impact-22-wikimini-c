import React from 'react';
import {
  Box, Typography, TextField, Chip, Tooltip,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './register.css';
import CornerPictures from '../../components/corner-pictures';
import ProfileIcons from './profile-icons';
import FilledFullWidthSubmitButton from '../../components/filled-full-width-submit-button';

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
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginTop={2}
      >
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
          <Box dislay="flex" flexDirection="column" width="100%">
            <ProfileIcons />
            <Box width="100%" display="flex" justifyContent="space-around">
              {/* {accountTypes.map((type) => (
            <Chip key={type} label={type}
            onClick={handleAccountType}
            color={account.accountType === type ? 'primary' : 'default'} />
          ))} */}
              <Tooltip title="Choose">
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
              </Tooltip>
              <Tooltip title="Choose">
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
              </Tooltip>
              <Tooltip title="Choose">
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
              </Tooltip>
            </Box>
          </Box>
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
          <FilledFullWidthSubmitButton
            disabled={!dirty || !isValid}
          >
            Register
          </FilledFullWidthSubmitButton>
        </Box>
      </Box>
      <CornerPictures />
    </div>
  );
};

export default RegisterPage;
