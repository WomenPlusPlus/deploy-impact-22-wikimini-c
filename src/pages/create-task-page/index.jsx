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
import MainContainer from '../../components/main-container';
import { createTask, changeStatus } from '../../redux/reducers/teacher';

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
      // TODO: ADD CURRENT TASK ID WHEN IT IS AVAILABLE FROM THE API RESPONSE
      // navigate(`/class/${classId}/task/${teacher.currentTask.id}/assign-student`);
      navigate(`/class/${classId}/task/${taskId}/assign-student`);
    }
  }, [teacher, classId, navigate, dispatch]);

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
    <MainContainer>
      <Box
        component="form"
        width="100%"
      >
        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={2}>Task Name</Typography>
          <TextField
            id="outlined-multiline-static"
            label="Task name"
            name="taskName"
            onChange={handleChange}
            multiline
            rows={1}
            fullWidth
          />
        </Box>
        <Box width="100%" mb={3}>
          {' '}
          <Typography variant="h5" mb={2}>Type of task</Typography>
          <Box width="100%">
            {taskTypes.map((type) => (
              <Chip key={type} label={type} onClick={handleTypeTask} color={task.taskType === type ? 'primary' : 'default'} />
            ))}
          </Box>
        </Box>
        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={2}>Subject</Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
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
          <Typography variant="h5" mb={2}>Task description</Typography>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            name="taskDescription"
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
        </Box>
        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={2}>Link</Typography>
          <TextField
            id="outlined-multiline-static"
            label="Link to article, video, etc."
            name="taskLink"
            onChange={handleChange}
            multiline
            rows={1}
            fullWidth
          />
        </Box>
        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={2}>Judgement criteria</Typography>
          <TextField
            id="outlined-multiline-static"
            label="Judgement criteria"
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
              type="submit"
              variant="contained"
              onClick={() => { navigate(`/class/${classId}/dashboard`); }}
              disabled={teacher.status === 'Loading'}
            >
              Cancel

            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={handleSaveTask}
              disabled={teacher.status === 'Loading'}
            >
              Next

            </Button>
          </Box>
        </Box>

      </Box>
    </MainContainer>

  );
};

export default CreateTaskPage;
