import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [ 'auth', 'user' ]
}

const middleware = [thunk, logger];

export const store = createStore(
    rootReducer, 
    applyMiddleware(...middleware)
);

export const persistor = persistStore(store);