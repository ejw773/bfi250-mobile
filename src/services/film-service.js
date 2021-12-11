import axios from 'axios'
import { API_URL } from '../api/apiUrl'
import AsyncStorage from '@react-native-async-storage/async-storage'

const filmService = async () => {
    try {
        const response = await axios.get(API_URL + 'ranks/all/withfilms/')
        const storeData = async (response) => {
            try {
                const jsonValue = JSON.stringify(response)
                await AsyncStorage.setItem('films', jsonValue)
            } catch (e) {
                return e;
            }
        }
        storeData()
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export default filmService