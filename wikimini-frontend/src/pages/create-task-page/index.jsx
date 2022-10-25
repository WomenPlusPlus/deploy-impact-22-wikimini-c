import React from 'react';
import {
  Box, Chip, Typography, TextField, Button,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import MainContainer from '../../components/main-container';

const teachingSubjects = [
  { teachingSubject: 'Math' },
  { teachingSubject: 'Literature' },
  { teachingSubject: 'History' },
  { teachingSubject: 'Biology' },
  { teachingSubject: 'Chemistry' },
];

const CreateTaskPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const [subject, setSubject] = React.useState('');

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <MainContainer>
      <Box
        component="form"
        width="100%"
      >

        <Box width="100%" mb={3}>
          {' '}
          <Typography variant="h5" mb={2}>Type of task</Typography>
          <Box width="100%">
            <Chip label="Create article" onClick={handleClick} />
            <Chip label="Edit article" onClick={handleClick} />
            <Chip label="Review article" onClick={handleClick} />
            <Chip label="Illustrate" onClick={handleClick} />
          </Box>
        </Box>
        <Box width="100%" mb={3}>
          <Typography variant="h5" mb={2}>Subject</Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subject}
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
              onClick={() => {
                alert('clicked save');
              }}
            >
              Save task

            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                alert('clicked assign'); navigate('/assign-student');
              }}
            >
              Save task and assign student

            </Button>
          </Box>
          <Button
            type="submit"
            variant="contained"
            onClick={() => {
              alert('clicked cancel');
            }}
          >
            Cancel

          </Button>
        </Box>

      </Box>
    </MainContainer>

  );
};

export default CreateTaskPage;
