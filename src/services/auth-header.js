import AsyncStorage from '@react-native-async-storage/async-storage';

const authHeader = async () => {
    const userData = await AsyncStorage.getItem('user')
    const user = JSON.parse(userData)
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        console.log('error reading storage')
        return {};
    }
}

export default authHeader;