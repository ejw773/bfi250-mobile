import AsyncStorage from '@react-native-async-storage/async-storage';

const localStorageHelper = async (key, value) => {
  try {
    const dataStore = await AsyncStorage.getItem('user');
    const objToChange = JSON.parse(dataStore);
    objToChange[key] = value;
    const changedObj = JSON.stringify(objToChange);
    await AsyncStorage.setItem('user', changedObj);
  } catch (e) {
    console.log(e);
  }
};

export default localStorageHelper;
