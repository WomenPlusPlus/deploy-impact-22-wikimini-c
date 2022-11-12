import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Chip, Typography, TextField, Button,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate, useParams } from 'react-router-dom';
import { createTask, changeStatus } from '../../redux/reducers/teacher';
import './create-task.css';

const teachingSubjects = [
  { teachingSubject: 'Math' },
  { teachingSubject: 'Literature' },
  { teachingSubject: 'History' },
  { teachingSubject: 'Biology' },
  { teachingSubject: 'Chemistry' },
];

const taskTypes = [
  'Create Article',
  'Edit Article',
  'Illustrate',
  'Review Article',
];

const CreateTaskPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: classId } = useParams();

  const [task, setTask] = React.useState({
    taskName: '',
    taskType: '',
    subject: '',
    taskDescription: '',
    taskLink: '',
    judgmentCriteria: '',
    classId,
  });

  const teacher = useSelector((state) => state.teacher);
  const taskId = teacher?.currentTask?.task_id;

  React.useEffect(() => {
    if (teacher.status === 'Task created') {
      dispatch(changeStatus({ status: '', message: '' }));
      navigate(`/class/${classId}/task/${taskId}/assign-student`);
    }
  }, [teacher, classId, navigate, dispatch, taskId]);

  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const handleTypeTask = (event) => {
    setTask({
      ...task,
      taskType: event.target.innerHTML,
    });
  };

  const handleSaveTask = (event) => {
    event.preventDefault();
    console.log(task);
    dispatch(createTask(task));
  };

  return (
    <div className="create-task-container">
      <Box width="100%" textAlign="left">
        <Typography variant="h4" sx={{ fontWeight: 'medium' }}>CREATE TASK</Typography>
      </Box>
      <Box
        component="form"
        width="100%"
      >
        <Box width="100%" mb={3}>
          {' '}
          <Typography variant="h5" mb={2} sx={{ fontWeight: 'medium' }}>Type of task</Typography>
          <Box width="100%" display="flex" gap={1} flexWrap="wrap">
            {taskTypes.map((type) => (
              <Chip key={type} label={type} onClick={handleTypeTask} color={task.taskType === type ? 'primary' : 'default'} />
            ))}
          </Box>
        </Box>
        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={1} sx={{ fontWeight: 'medium' }}>Task name</Typography>
          <TextField
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0px 4px rgba(0, 0, 0, 0.25)',
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& > fieldset': {
                  border: 'none',
                },
              },
            }}
            id="outlined-multiline-static"
            // label="Task name"
            name="taskName"
            onChange={handleChange}
            multiline
            rows={1}
            fullWidth
          />
        </Box>
        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={1} sx={{ fontWeight: 'medium' }}>Subject</Typography>
          <FormControl
            fullWidth
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: 'rgba((72, 72, 72, 0.15))',
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& > fieldset': {
                  border: 'none',
                },
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">Choose</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="subject"
              value={task.subject}
              label="Subject"
              onChange={handleChange}
            >
              {teachingSubjects.map(({ teachingSubject }) => (
                <MenuItem key={teachingSubject} value={teachingSubject}>
                  {teachingSubject}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={1} sx={{ fontWeight: 'medium' }}>Task description</Typography>
          <TextField
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0px 4px rgba(0, 0, 0, 0.25)',
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& > fieldset': {
                  border: 'none',
                },
              },
            }}
            id="outlined-multiline-static"
            // label="Description"
            name="taskDescription"
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
        </Box>
        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={1} sx={{ fontWeight: 'medium' }}>Link to article</Typography>
          <TextField
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0px 4px rgba(0, 0, 0, 0.25)',
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& > fieldset': {
                  border: 'none',
                },
              },
            }}
            id="outlined-multiline-static"
            // label="Link to article, video, etc."
            name="taskLink"
            onChange={handleChange}
            multiline
            rows={1}
            fullWidth
          />
        </Box>
        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={2} sx={{ fontWeight: 'medium' }}>Judgement criteria</Typography>
          <TextField
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0px 4px rgba(0, 0, 0, 0.25)',
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& > fieldset': {
                  border: 'none',
                },
              },
            }}
            id="outlined-multiline-static"
            // label="Judgement criteria"
            name="judgmentCriteria"
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />
        </Box>
        <Box display="flex" width="100%" justifyContent="space-between">
          <Box display="flex" gap={3}>
            <Button
              style={{
                borderRadius: '10px',
                border: '2px solid #EB5757',
              }}
              sx={(theme) => ({
                background: theme.palette.secondary.main,
                color: theme.palette.common.white,
                width: '170px',
                type: 'button',
                variant: 'contained',
                size: 'large',
                py: 1.5,
                border: '2px solid theme.palette.secondary.main',
                ':hover': {
                  bgcolor: theme.palette.common.white,
                  color: theme.palette.secondary.main,
                  border: '2px solid #EB5757',
                },
              })}
              onClick={() => { navigate(`/class/${classId}/dashboard`); }}
              disabled={teacher.status === 'Loading'}
            >
              Cancel

            </Button>
            <Button
              style={{
                borderRadius: '10px',
                border: '2px solid #EB5757',
              }}
              sx={(theme) => ({
                background: theme.palette.secondary.main,
                color: theme.palette.common.white,
                width: '170px',
                type: 'button',
                variant: 'contained',
                size: 'large',
                py: 1.5,
                border: '2px solid theme.palette.secondary.main',
                ':hover': {
                  bgcolor: theme.palette.common.white,
                  color: theme.palette.secondary.main,
                  border: '2px solid #EB5757',
                },
              })}
              onClick={handleSaveTask}
              disabled={teacher.status === 'Loading'}
            >
              Next

            </Button>
          </Box>
        </Box>

      </Box>
    </div>

  );
};

export default CreateTaskPage;
