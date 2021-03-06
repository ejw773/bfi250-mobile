import axios from 'axios';
import { API_URL } from '../api/apiUrl';
import authHeader from './auth-header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import seenStatusService from './seen-status-service';
import localStorageHelper from './localStorage-helper';

const register = (name, email, password) => {
  return axios
    .post(API_URL + 'users', {
      name,
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        AsyncStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + 'users/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        AsyncStorage.setItem('user', JSON.stringify(response.data));
        seenStatusService.getSeenStatus();
      }
      return response.data;
    });
};

export const logout = async () => {
  try {
    const tokenString = await authHeader();
    const response = await axios.post(API_URL + 'users/logout', null, {
      headers: tokenString,
    });
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('films');
    return response;
  } catch (e) {
    console.log(e);
  }
};

const logoutAll = async () => {
  try {
    const tokenString = await authHeader();
    const response = await axios.post(API_URL + 'users/logoutAll', null, {
      headers: tokenString,
    });
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('films');
    return response;
  } catch (e) {
    console.log(e);
  }
};

const changeFilmSet = async (bfiSet) => {
  const tokenString = await authHeader();
  try {
    const response = await axios.patch(
      API_URL + 'users/me',
      { filmSet: bfiSet },
      { headers: tokenString }
    );
    localStorageHelper('filmSet', bfiSet);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const changeName = async (newName) => {
  const tokenString = await authHeader();
  try {
    const response = await axios.patch(
      API_URL + 'users/me',
      { name: newName },
      { headers: tokenString }
    );
    return response;
  } catch (e) {
    return e;
  }
};

const changeEmail = async (newEmail) => {
  const tokenString = await authHeader();
  try {
    const response = await axios.patch(
      API_URL + 'users/me',
      { email: newEmail },
      { headers: tokenString }
    );
    return response;
  } catch (e) {
    return e;
  }
};

const changePassword = async (newPassword) => {
  const tokenString = await authHeader();
  try {
    const response = await axios.patch(
      API_URL + 'users/me',
      { password: newPassword },
      { headers: tokenString }
    );
    return response;
  } catch (e) {
    return e;
  }
};

const deleteAccount = async () => {
  const tokenString = await authHeader();
  try {
    const response = await axios.delete(API_URL + 'users/me', {
      headers: tokenString,
    });
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('films');
    return response;
  } catch (e) {
    return e;
  }
};

const authService = {
  register,
  login,
  logout,
  logoutAll,
  changeFilmSet,
  changeName,
  changeEmail,
  changePassword,
  deleteAccount,
};

export default authService;
