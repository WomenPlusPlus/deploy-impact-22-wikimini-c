import React from 'react';
import {
  Typography, Box, Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeletableList from '../../components/deletable-list';
import './tasks.css';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

const tasks = [
  { id: 1, task: 'Task1' },
  { id: 2, task: 'Task2' },
  { id: 3, task: 'Task3' },
  { id: 4, task: 'Task4' },
  { id: 5, task: 'Task5' },
  { id: 6, task: 'Task6' },
  { id: 7, task: 'Task7' },
  { id: 8, task: 'Task8' },
  { id: 9, task: 'Task9' },
  { id: 10, task: 'Task10' },
  { id: 12, task: 'Task11' },
  { id: 13, task: 'Task11' },
  { id: 14, task: 'Task11' },
  { id: 15, task: 'Task11' },
  { id: 16, task: 'Task11' },
  { id: 17, task: 'Task11' },
  { id: 18, task: 'Task11' },
];

const TasksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="tasks-container">
      <Box width="100%" height="95%" mt={8} display="flex" flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="#FEB1D0" borderRadius={4}>
        <Box width="100%" display="flex" alignItems="flex-end" justifyContent="space-between" p={2}>
          <Typography>LIST OF ALL YOUR TASKS</Typography>
          <Box>
            <Button
              sx={(theme) => ({
                background: theme.palette.secondary.main,
                ml: 2,
                ':hover': {
                  bgcolor: theme.palette.common.white,
                  color: theme.palette.secondary.main,
                  border: '2px solid #EB5757',
                },
              })}
              variant="contained"
              size="small"
              onClick={() => navigate('/create-task')}
              style={{
                borderRadius: '10px',
                border: '2px solid #EB5757',
              }}
            >
              Create task

            </Button>
          </Box>
          {/* <Box display="flex" gap={3} /> */}
        </Box>
        <Box width="100%" mb={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'hidden',
              // overflowY: 'scroll',
              gap: 2,
            }}
          >
            <DeletableList items={tasks} itemName="task" style={style} />
          </Box>
        </Box>
      </Box>

    </div>
  );
};

export default TasksPage;
