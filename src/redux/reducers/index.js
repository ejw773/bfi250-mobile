import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import movieData from './movie_data_reducer';
import showSet from './show_set_reducer';
import searchTitle from './search_reducer';
import seenStatus from './seen_status_reducer';
import auth from './auth_reducer';
import message from './message_reducer'

const getPersistedData = async () => {
    const userData = await AsyncStorage.getItem('user')
    console.log(userData)
}

getPersistedData()

const persistConfig = {
    key: 'pemrsistedStore',
    storage: AsyncStorage,
    whitelist: [ 'auth', 'seenStatus', 'movieData', 'showSet', 'searchTitle', 'message' ]
}

const persistStatusConfig = {
    key: 'persistStatus',
    storage: AsyncStorage,
    whitelist: [ 'seenStatus' ]
}

const persistFilmsConfig = {
    key: 'persistedFilms',
    storage: AsyncStorage,
    whitelist: [ 'movieData' ]
}

export default combineReducers({ 
    movieData,
    showSet, 
    searchTitle, 
    seenStatus,
    auth,
    message
});
