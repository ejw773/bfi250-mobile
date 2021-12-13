import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { verifyLogin } from '../redux/actions/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './HomeScreen';
import Profile from './ProfileScreen';
import About from './AboutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  const dispatch = useDispatch();

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('user');
    const user = JSON.parse(userData);
    if (user) {
      dispatch(verifyLogin(user));
    }
  };

  useEffect(() => {
    getUserData();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Profile'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'film';
            } else if (route.name === 'Profile') {
              iconName = 'toggle';
            } else if (route.name === 'About') {
              iconName = 'logo-react';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ title: 'Progress Bar' }}
        />
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='About' component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
