import axios from 'axios';

export const createClassService = async (classData) => {
  const params = {
    action: 'createclass',
    class_name: classData.classTitle,
    format: 'json',
    teacher_id: 1,
  };

  const url = `${process.env.REACT_APP_API_URL}api.php`;
  const response = await axios.post(
    url,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );

  return response;
};
