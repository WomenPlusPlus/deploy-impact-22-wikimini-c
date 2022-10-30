import axios from 'axios';

export const getClassesService = async () => {
  const url = `${process.env.REACT_APP_API_URL}api.php?action=query&list=allclasses&format=json`;
  console.log('kraunu');
  const responseData = axios.get(url)
    .then((response) => {
      console.log(response.data);

      return response.data;
    });

  return (responseData);
};
