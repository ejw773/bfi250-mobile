import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, StyleSheet, Text, Modal } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { masterColor } from '../globalSettings/color'
import { login } from '../redux/actions/auth';
import AuthModal from '../components/auth/AuthModal'
import LoginModal from '../components/auth/LoginModal'
import RegisterModal from '../components/auth/RegisterModal'


const Profile = () => {
    const auth = useSelector((state) => state.auth)
    console.log(auth)
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <View style={styles.container}>
            <AuthModal 
                isLoggedIn={isLoggedIn}
            />
            <Text>This is the Profile screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 10
    },
    formCheckbox: {
        margin: 10,
        backgroundColor: null
    },
    formButton: {
        margin: 40
    }
})

export default Profile