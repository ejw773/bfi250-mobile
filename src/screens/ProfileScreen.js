import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Button, StyleSheet, Text, Modal } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { masterColor } from '../globalSettings/color'
import { login } from '../redux/actions/auth';
import LoginModal from '../components/auth/LoginModal'
import RegisterModal from '../components/auth/RegisterModal'

const Profile = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [remember, setRemember] = useState(false);

    const dispatch = useDispatch();


    const toggleLogin = () => {
        setShowLogin(!showLogin)
        console.log(showLogin)
    }
    const toggleRegister = () => {
        setShowRegister(!showRegister)
        console.log(showRegister)
    }


    return (
        <View style={styles.container}>
            <Text>Log In Or Register</Text>
            <View style={styles.formButton}>
                <Button
                    onPress={() => toggleLogin()}
                    title="Log In"
                    color={masterColor}
                />
            </View>
            <View style={styles.formButton}>
                <Button
                    onPress={() => toggleRegister()}
                    title="Register"
                    color={masterColor}
                />
            </View>
            <LoginModal 
                showLogin={showLogin}
                toggleLogin={toggleLogin}
            />
            <RegisterModal
                showRegister={showRegister}
                toggleRegister={toggleRegister}
            />
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