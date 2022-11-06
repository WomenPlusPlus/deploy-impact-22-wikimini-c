import axios from 'axios';

export const getClassesService = async () => {
  const url = `${process.env.REACT_APP_API_URL}api.php?action=query&list=allclasses&format=json`;
  console.log('kraunu');
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
