import axios from 'axios';

export const createClassService = async (classData) => {
  const url = `${process.env.REACT_APP_API_URL}api.php?action=createclass&class_name=${classData.classTitle}&format=json`;
  const response = await axios.post(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};
