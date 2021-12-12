import axios from 'axios'
import { API_URL } from '../api/apiUrl'
import authHeader from './auth-header'

const getMyProfile = async () => {
    const theString = await authHeader();
    try {
        const response = await axios.get(API_URL + 'users/me', { headers: theString });
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }
}

const getMySeenStatus = async () => {
    const theString = await authHeader();
    return axios.get(API_URL + 'seenstatus', { headers: theString });
}

const userServices = {
    getMyProfile,
    getMySeenStatus
}

export default userServices