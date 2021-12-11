import axios from 'axios'
import { API_URL } from '../api/apiUrl'
import authHeader from './auth-header'


const getSeenStatus = async () => {
    const theString = await authHeader();
    try {
        const response = await axios.get(API_URL + 'seenstatus', { headers: theString })
        return response.data  
    } catch (e) {
        console.log(e)
    }
}

const deleteSeenStatus = async (imdbID) => {
    const theString = await authHeader();
    try {
        const response = await axios.delete(API_URL + 'seenstatus/film/' + imdbID, { headers: theString })
        return response
    } catch (e) {
        console.log(e)
    }
}

const updateSeenStatus = async (film, seenStatus) => {
    const theString = await authHeader();
    try {
        const response = await axios.post(API_URL + 'seenstatus/', {
            film,
            seenStatus 
        }, {
            headers: theString
        })
        return response
    } catch (e) {
        console.log(e)
    }
}

const SeenStatusService = {
    getSeenStatus,
    deleteSeenStatus,
    updateSeenStatus
}

export default SeenStatusService