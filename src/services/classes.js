import axios from 'axios';
import apiUrl from './api';

export const getClassesService = async () => {
  try {
    const params = {
      action: 'query',
      list: 'allclasses',
      format: 'json',
    };

    const res = await axios.get(apiUrl, { params });

    return res;
  } catch (error) {
    return {};
  }
};

export const createClassService = async (classData) => {
  try {
    const params = {
      action: 'createclass',
      class_name: classData.classTitle,
      format: 'json',
      teacher_id: 1,
    };

    const response = await axios.post(
      apiUrl,
      {},
      {
        params,
      },
    );

    return response;
  } catch (error) {
    return {};
  }
};

export const createTaskService = (taskData) => {
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

  return axios.post(apiUrl, formData, { params });
};

export const getClassDetailsService = async (classId) => {
  try {
    const params = {
      action: 'query',
      list: 'getclassdetails',
      class_id: classId,
      format: 'json',
    };

    const response = await axios.get(apiUrl, { params });
    const result = response.data.query.getclassdetails[0];

    const allStudents = Object.keys(result.all_students).map((key) => ({
      id: result.all_students[key].student_id,
      studentUsername: result.all_students[key].student_username,
    }));

    const allTasks = Object.keys(result.all_tasks)
      .map((key) => ({
        id: result.all_tasks[key].task_id,
        task: result.all_tasks[key].task_name,
      }))
      .reverse();

    const tasksPerStudent = Object.keys(result.tasks_per_student)
      .map((key, id) => ({
        id,
        studentId: result.tasks_per_student[key].student_id,
        studentUsername: result.tasks_per_student[key].student_username,
        taskId: result.tasks_per_student[key].task_id,
        task: result.tasks_per_student[key].task_name,
        taskStatus: result.tasks_per_student[key].task_status,
      }))
      .reverse();

    const classInfo = result.class_info;

    return {
      allStudents,
      allTasks,
      tasksPerStudent,
      classInfo,
    };
  } catch (error) {
    return {};
  }
};

export const listTasks = async (classId) => {
  try {
    const params = {
      action: 'query',
      list: 'getclasstasks',
      class_id: classId,
      format: 'json',
    };

    const response = await axios.get(apiUrl, { params });

    return response.data.query?.getclasstasks || [];
  } catch (error) {
    return [];
  }
};
