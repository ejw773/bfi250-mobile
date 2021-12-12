import axios from "axios";
import { API_URL } from '../api/apiUrl';
import authHeader from './auth-header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import seenStatusService from './seen-status-service'
import localStorageHelper from './localStorage-helper'

const register = (name, email, password) => {
  return axios.post(API_URL + "users", {
    name,
    email,
    password
  })
  .then((response) => {
    if (response.data.token) {
      AsyncStorage.setItem(
        'user',
        JSON.stringify(response.data)
      )
    }
    return response.data
  })
};

const login = (email, password) => {
  return axios
    .post(API_URL + "users/login", {
      email,
      password
    })
    .then((response) => {
      if (response.data.token) {
        AsyncStorage.setItem(
          'user',
          JSON.stringify(response.data)
        )
        seenStatusService.getSeenStatus()
      }
      return response.data;
    });
};

export const logout = async () => {
  try {
    const headerString = await authHeader();
    const response = await axios.post(API_URL + "users/logout", null, { headers: headerString })
    console.log(response)
    AsyncStorage.removeItem('user')
    AsyncStorage.removeItem('films')
    return response
  } catch (e) {
    console.log(e)
  }
};

const logoutAll = async () => {
  try {
    const headerString = await authHeader();
    const response = await axios.post(API_URL + "users/logoutAll", null, { headers: headerString })
    const result = await AsyncStorage.removeItem('user')
    console.log(response)
    return result
  } catch (e) {
    console.log(e)
  }
}

const changeFilmSet = async (bfiSet) => {
  const headerString = await authHeader()
  try {
    const response = await axios.patch(API_URL + "users/me", {filmSet: bfiSet}, { headers: headerString })
    console.log(response.data)
    localStorageHelper('filmSet', bfiSet)
    // update local storage
    return response.data
  } catch (e) {
    console.log(e)
  }
}

const changeName = (newName) => {
  return axios
    .patch(API_URL + "users/me", {name: newName}, { headers: authHeader() })
    .then((response) => {
      //localStorageHelper('name', newName)
      return response
    })
}

const changeEmail = (newEmail) => {
  return axios
    .patch(API_URL + "users/me", {email: newEmail}, { headers: authHeader() })
    .then((response) => {
      //localStorageHelper('email', newEmail)
      return response
    })
}

const changePassword = (newPassword) => {
  return axios
    .patch(API_URL + "users/me", {password: newPassword}, { headers: authHeader() })
    .then((response) => {
      return response
    })
}

const deleteAccount = () => {
  return axios
    .delete(API_URL + "users/me", { headers: authHeader() })
    .then((response) => {
      try {
        AsyncStorage.removeItem('user')
        AsyncStorage.removeItem('films')
      } catch (e) {
        console.log(e)
      }
      return response
    })
}


const authService = {
  register,
  login,
  logout,
  logoutAll,
  changeFilmSet,
  changeName,
  changeEmail,
  changePassword,
  deleteAccount
}

export default authService