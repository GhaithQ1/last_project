// api.js
import axios from 'axios';
import Cookies from 'js-cookie';

export const fetchMyData = () => {
  const token = Cookies.get('token'); // جلب التوكن من الكوكيز

  return axios
    .get('http://localhost:8000/api/v2/auth/get_date_my', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.data.data);
};
export const fetchAllUsers = () => {
  const token = Cookies.get('token'); // جلب التوكن من الكوكيز

  return axios
    .get('http://localhost:8000/api/v2/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.data.data);
};
