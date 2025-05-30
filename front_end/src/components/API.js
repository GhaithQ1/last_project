// api.js
import axios from 'axios';
import Cookies from 'js-cookie';

export const fetchMyData = async () => {
  const token = Cookies.get('token');
  const response = await axios.get(
    `http://localhost:8000/api/v2/auth/get_date_my`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.data;
};
export const fetchAllUsers = async () => {
  const token = Cookies.get('token');
  const response = await axios.get(
    `http://localhost:8000/api/v2/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.data;
};


export const fetchAllPost = async ({ type_post, type_post_role }={}) => {
  const token = Cookies.get('token');
  const response = await axios.get(
    `http://localhost:8000/api/v2/post?type=${type_post}&role=${type_post_role}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.data;
};
