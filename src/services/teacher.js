import axios from 'axios';

export const createClassService = async (classData) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}api.php?action=createclass&class_name=${classData.classTitle}&format=json`;
    const response = await axios.post(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
};
