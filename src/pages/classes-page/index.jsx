import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getClasses } from '../../redux/reducers/teacher';
import './classes.css';
import StyledCreateClassButton from '../../components/create-class-button';
import CornerPictures from '../../components/corner-pictures';
import AddClassModal from '../add-class-page/add-class-modal';

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
        <AddClassModal />
      </Box>
      <CornerPictures />
    </div>
  );
};

export default ClassesPage;
