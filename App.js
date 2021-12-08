// done

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Constants from 'expo-constants';
import Main from './src/screens/Main';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </Provider>
  );
}
