import AsyncStorage from '@react-native-async-storage/async-storage';

const localStorageHelper = async (key, value) => {
    try {
        const dataStore = await JSON.parse(AsyncStorage.getItem('user'))
        //const dataStore = JSON.parse(localStorage.getItem('user'))
        dataStore[key] = value
        await AsyncStorage.setItem('user', JSON.stringify(dataStore))
        // localStorage.setItem("user", JSON.stringify(dataStore))
    } catch (e) {
        console.log(e)
    }
}

export default localStorageHelper