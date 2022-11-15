import axios from 'axios';

export const getClassesService = async () => {
  const url = `${process.env.REACT_APP_API_URL}api.php?action=query&list=allclasses&format=json`;
  const responseData = axios.get(url).then((response) => {
    console.log(response.data);

    return response.data;
  });

  return responseData;
};

export const createTaskService = async (taskData) => {
  const url = `${process.env.REACT_APP_API_URL}api.php`;

  const params = {
    action: 'createtask',
    format: 'json',
  };

  const formData = new FormData();
  formData.append('task_name', taskData.taskName);
  formData.append('task_description', taskData.taskDescription);
  formData.append('task_subject', taskData.taskSubject);
  formData.append('task_type', taskData.taskType);
  formData.append('task_criteria', taskData.taskFile);
  formData.append('class_id', taskData.classId);

  if (taskData.taskLink) {
    formData.append('task_reference_link', taskData.taskLink);
  }

  return axios.post(url, formData, { params });
};

export const getClassDetailsService = async (classId) => {
  const url = `${process.env.REACT_APP_API_URL}api.php`;

  const params = {
    action: 'query',
    list: 'getclassdetails',
    class_id: classId,
    format: 'json',
  };

  const response = await axios.get(url, { params });
  const result = response.data.query.getclassdetails[0];

  console.log(result);

  const allStudents = Object.keys(result.all_students).map((key) => ({
    id: result.all_students[key].student_id,
    studentUsername: result.all_students[key].student_username,
  }));

  const allTasks = Object.keys(result.all_tasks).map((key) => ({
    id: result.all_tasks[key].task_id,
    task: result.all_tasks[key].task_name,
  }));

  const tasksPerStudent = Object.keys(result.tasks_per_student).map(
    (key, id) => ({
      id,
      studentId: result.tasks_per_student[key].student_id,
      studentUsername: result.tasks_per_student[key].student_username,
      taskId: result.tasks_per_student[key].task_id,
      task: result.tasks_per_student[key].task_name,
      taskStatus: result.tasks_per_student[key].task_status,
    }),
  );

  const classInfo = result.class_info;

  return {
    allStudents,
    allTasks,
    tasksPerStudent,
    classInfo,
  };
};

export const listTasks = async (classId) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}api.php`;

    const params = {
      action: 'query',
      list: 'getclasstasks',
      class_id: classId,
      format: 'json',
    };

    const response = await axios.get(url, { params });

    return response.data.query?.getclasstasks || [];
  } catch (error) {
    return [];
  }
};
