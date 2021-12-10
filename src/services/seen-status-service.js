import axios from 'axios'
import { API_URL } from '../api/apiUrl'
import authHeader from './auth-header'

const theToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFiZDE1OTYzYWU0M2JiZWI0ZTNmNTUiLCJpYXQiOjE2MzkxMTI3ODcsImV4cCI6MTYzOTcxNzU4N30.1WiR5C9ekoeCWpjTJi-HWbjNet_9DkUAsDFf7vV2cDM'

const getSeenStatus = async () => {
    try {
        const response = await axios.get(API_URL + 'seenstatus', { headers: {'Authorization': 'Bearer ' + theToken} })
        return response.data  
    } catch (e) {
        console.log(e)
    }
}

const deleteSeenStatus = async (imdbID) => {
    try {
        const response = await axios.delete(API_URL + 'seenstatus/film/' + imdbID, { headers: {'Authorization': 'Bearer ' + theToken} })
        return response
    } catch (e) {
        console.log(e)
    }
}

const updateSeenStatus = async (film, seenStatus) => {
    console.log(`Updating: ${film} to ${seenStatus}`)
    try {
        const response = await axios.post(API_URL + 'seenstatus/', {
            film,
            seenStatus 
        }, { headers: {'Authorization': 'Bearer ' + theToken} })
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