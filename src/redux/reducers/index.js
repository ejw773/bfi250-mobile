import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import movieData from './movie_data_reducer';
import showSet from './show_set_reducer';
import searchTitle from './search_reducer';
import seenStatus from './seen_status_reducer';
import auth from './auth_reducer';
import message from './message_reducer'

const getInfo = async () => {
    const userData = await AsyncStorage.getItem('user')
    const filmData = await AsyncStorage.getItem('films')
    console.log(userData)
    console.log(filmData)
    console.log('hello from the root reducer')
}

getInfo()

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [ 'auth' ]
}

export default combineReducers({ 
    movieData, 
    showSet, 
    searchTitle, 
    seenStatus, 
    auth: persistReducer(persistConfig, auth), 
    message
});
