import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import {
  Typography, Button, Grid, Paper, Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getClasses } from '../../redux/reducers/teacher';
import './classes.css';
import StyledCreateClassButton from '../../components/create-class-button';
import CornerPictures from '../../components/corner-pictures';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 10,
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
    <div className="classes-container">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="90%"
        height="100%"
      >
        <Typography variant="h4" mb={4}>WELCOME LYNDA!</Typography>
        <Typography variant="h6" mb={4}>YOUR CLASSES</Typography>
        <Box>
          <Grid
            container
            mb={4}
            rowSpacing={2}
            columnSpacing={2}
          >
            {teacherClasses?.map(({ id, classTitle }) => (
              <Grid key={id} item xs={6}>
                <Item>
                  <Button fullWidth onClick={() => navigate(`/class/${id}/dashboard`)}>
                    {classTitle}
                  </Button>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
        <StyledCreateClassButton>CREATE NEW CLASS</StyledCreateClassButton>
      </Box>
      <CornerPictures />
    </div>
  );
};

export default ClassesPage;
