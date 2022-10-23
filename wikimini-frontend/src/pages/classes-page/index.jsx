import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainContainer from '../../components/main-container';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ClassesPage = () => {
  const navigate = useNavigate();
  const teacherClasses = useSelector((state) => state.teacher.classes);

  return (
    <MainContainer>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
        height="400px"
      >
        <Typography variant="h4" mb={5}>WELCOME BARBRA STREISAND!</Typography>
        <Typography variant="h5" mb={5}>CLASSES</Typography>
        <Button variant="contained" onClick={() => navigate('/add-class')}>ADD CLASS</Button>
        <Box sx={{ width: '800px', mt: 5 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{
              xs: 1, sm: 2, md: 3,
            }}
          >
            {teacherClasses.map((item) => (
              <Grid key={item.id} item xs={6}>
                <Item>
                  <Button fullWidth onClick={() => navigate('/dashboard')}>
                    {item.classTitle}
                  </Button>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </MainContainer>
  );
};

export default ClassesPage;
