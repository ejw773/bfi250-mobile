// Done

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './HomeScreen';
import Profile from './ProfileScreen';
import Login from './LoginScreen';
import About from './AboutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} options={{ title: 'BFI 250 Progress Bar'}}/>
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default Main