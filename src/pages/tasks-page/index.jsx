import React from 'react';
import {
  Typography, Box, Button,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import DeletableList from '../../components/deletable-list';
import './tasks.css';
import { listTasks } from '../../services/classes';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

const TasksPage = () => {
  const navigate = useNavigate();
  const { id: classId } = useParams();
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let fetchedTasks = await listTasks(classId);
      if (fetchedTasks.length > 0) {
        fetchedTasks = fetchedTasks.map((t) => ({
          id: t.task_id,
          task: t.task_name,
        }));
      }
      setTasks(fetchedTasks);
    };

    fetchData();
  }, [classId]);

  return (
    <div className="tasks-container">
      <Box width="100%" height="95%" mt={5} display="flex" flexDirection="column" backgroundColor="#FEB1D0" borderRadius={4}>
        <Box width="100%" display="flex" alignItems="flex-end" justifyContent="space-between" p={2}>
          <Typography variant="h6">ALL TASKS</Typography>
          <Box>
            <Button
              sx={(theme) => ({
                background: theme.palette.secondary.main,
                ml: 2,
                ':hover': {
                  bgcolor: theme.palette.common.white,
                  color: theme.palette.secondary.main,
                  border: '2px solid',
                  borderColor: 'secondary.main',
                },
              })}
              variant="contained"
              size="small"
              onClick={() => navigate(`/class/${classId}/create-task`)}
              style={{
                borderRadius: '10px',
                border: '2px solid #EB5757',
              }}
            >
              Create a task
            </Button>
          </Box>
        </Box>
        <Box width="100%" mb={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'hidden',
              gap: 2,
            }}
          >
            {tasks.length > 0 && (<DeletableList items={tasks} itemName="task" style={style} />)}
            {tasks.length === 0 && (
            <Box height="200px" padding={5} backgroundColor="white" display="flex" justifyContent="center" alignItems="center" textAlign="center">
              <Typography>
                There are no tasks in this class. Click the CREATE A TASK button to add them.
              </Typography>

            </Box>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TasksPage;
