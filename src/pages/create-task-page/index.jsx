import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Chip, Typography, Select, InputLabel, MenuItem, FormControl, Tooltip,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { createTask, changeStatus } from '../../redux/reducers/teacher';
import './create-task.css';
import StyledTextField from './styled-textfield';
import FilledControlledWidthButton from '../../components/filled-controlled-width-button';

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

const judgementDescriptionTip = `
Here you should describe the main requirements the student 
must fullfil in order to perform the task successfully. 
These requirements will be seen by the student in the studen's dashboard.
`;

const taskDescriptionTip = `
Here you should describe what the student has to do, e.g.,
if the student has to illustrate an article, edit an article,
write an article summary, etc.
`;

const linkTip = `
Here you should insert a link to an article in MediaWiki with 
which the student's task is related.
`;

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
      <Box width="100%" textAlign="left" mt={5}>
        <Typography variant="h4" sx={{ fontWeight: 'medium' }}>CREATE A TASK</Typography>
      </Box>
      <Box
        component="form"
        width="100%"
      >
        <Box width="100%" mb={3}>
          {' '}
          <Typography variant="h5" mb={2} sx={{ fontWeight: 'medium' }}>Choose the type of task</Typography>
          <Box width="100%" display="flex" gap={1} flexWrap="wrap">
            {taskTypes.map((type) => (
              <Chip
                key={type}
                label={type}
                onClick={handleTypeTask}
                color={task.taskType === type ? 'secondary' : 'default'}
              />
            ))}
          </Box>
        </Box>
        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={1} sx={{ fontWeight: 'medium' }}>Task name</Typography>
          <StyledTextField name="taskName" rows={1} handleChange={handleChange} />
        </Box>
        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={1} sx={{ fontWeight: 'medium' }}>Subject</Typography>
          <FormControl
            fullWidth
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: 'rgba(72, 72, 72, 0.15)',
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& > fieldset': {
                  border: 'none',
                },
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
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
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            mb={1}
          >
            <Typography variant="h5" mr={1} sx={{ fontWeight: 'medium' }}>
              Task description
            </Typography>
            <Tooltip title={taskDescriptionTip}><HelpOutlineIcon style={{ color: '#EB5757' }} /></Tooltip>
          </Box>
          <StyledTextField name="taskDescription" rows={4} handleChange={handleChange} />
        </Box>
        <Box width="100%" mb={3}>
          <Box width="100%" display="flex" alignItems="center" mb={1}>
            <Typography
              variant="h5"
              mr={1}
              sx={{ fontWeight: 'medium' }}
            >
              Link to article
            </Typography>
            <Tooltip title={linkTip}><HelpOutlineIcon style={{ color: '#EB5757' }} /></Tooltip>
          </Box>
          <StyledTextField name="taskLink" rows={1} handleChange={handleChange} />
        </Box>
        <Box width="100%" mb={3}>
          <Box width="100%" display="flex" alignItems="center" mb={1}>
            <Typography variant="h5" mr={1} sx={{ fontWeight: 'medium' }}>
              Judgement criteria
            </Typography>
            <Tooltip title={judgementDescriptionTip}><HelpOutlineIcon style={{ color: '#EB5757' }} /></Tooltip>
          </Box>
          <StyledTextField name="judgmentCriteria" rows={4} handleChange={handleChange} />
        </Box>
        <Box display="flex" width="100%" justifyContent="center">
          <Box
            display="flex"
            gap={3}
            flexWrap="wrap"
            justifyContent="center"
          >
            <FilledControlledWidthButton
              type="button"
              onClick={() => { navigate(`/class/${classId}/dashboard`); }}
              disabled={teacher.status === 'Loading'}
            >
              Cancel
            </FilledControlledWidthButton>
            <FilledControlledWidthButton
              type="button"
              onClick={handleSaveTask}
              disabled={teacher.status === 'Loading'}
            >
              Next
            </FilledControlledWidthButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CreateTaskPage;
