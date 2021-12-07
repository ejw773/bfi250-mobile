import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import Main from './screens/Main';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

import { View, Text } from 'react-native'

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
