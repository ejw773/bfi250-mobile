import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { verifyLogin } from '../redux/actions/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './HomeScreen';
import Profile from './ProfileScreen';
import About from './AboutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  const user = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  
  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('user')
    const user = JSON.parse(userData)
    if (user) {
      dispatch(verifyLogin(user))
    }
  }

  useEffect(() => {
    getUserData()
  }, [dispatch])

  return (
      <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} options={{ title: 'BFI 250 Progress Bar'}}/>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Main