import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getClasses } from '../../redux/reducers/teacher';
import './classes.css';
import StyledButton from '../../components/button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ClassesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const teacherClasses = useSelector((state) => state.teacher.allClasses);
  console.log(teacherClasses);

  React.useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

  return (
    <div className="login-container">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
        height="100%"
      >
        <Typography variant="h4" mb={4}>WELCOME BARBRA STREISAND!</Typography>
        <Typography variant="h5" mb={4}>CLASSES</Typography>
        <Box>
          <Grid
            container
            mb={4}
            px={4}
            rowSpacing={2}
            columnSpacing={2}
          >
            {teacherClasses?.map((item) => (
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
        <StyledButton>CREATE NEW CLASS</StyledButton>
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

export default ClassesPage;
