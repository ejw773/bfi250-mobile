import axios from 'axios';
import { API_URL } from '../api/apiUrl';
import authHeader from './auth-header';

const getMyProfile = async () => {
  const tokenString = await authHeader();
  try {
    const response = await axios.get(API_URL + 'users/me', {
      headers: tokenString,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};

const getMySeenStatus = async () => {
  const tokenString = await authHeader();
  return axios.get(API_URL + 'seenstatus', { headers: tokenString });
};

const userServices = {
  getMyProfile,
  getMySeenStatus,
};

export default userServices;
