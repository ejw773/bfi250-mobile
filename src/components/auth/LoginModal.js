import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Button, StyleSheet, Text, Modal } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { masterColor } from '../../globalSettings/color'
import { login } from '../../redux/actions/auth';

const LoginModal = ({ showLogin, toggleLogin }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [remember, setRemember] = useState(false);

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login(email, password))
        .then(() => {
            toggleLogin()
        })
    }


    return (
        <View>
        <Modal
        visible={showLogin}
        onRequestClose={() => toggleLogin}
        >
        <View style={styles.container}>
            <Input 
                placeholder='Email'
                leftIcon={{type: 'font-awesome', email: 'user-o'}}
                onChangeText={email => setEmail(email)}
                value={email}
                containerStyle={styles.formInput}
                leftIconContainerStyle={styles.formIcon}
            />
            <Input 
                placeholder='Password'
                leftIcon={{type: 'font-awesome', name: 'key'}}
                onChangeText={password => setPassword(password)}
                value={password}
                containerStyle={styles.formInput}
                leftIconContainerStyle={styles.formIcon}
            />
            <CheckBox 
                title='Remember Me'
                center
                checked={remember}
                onPress={() => setRemember(!remember)}
                containerStyle={styles.formCheckbox}
            />
            <View style={styles.formButton}>
                <Button 
                    onPress={() => handleLogin()}
                    title='Login'
                    color={masterColor}
                />
            </View>
            <View style={styles.formButton}>
                <Button 
                    onPress={() => toggleLogin()}
                    title='Cancel'
                    color={masterColor}
                />
            </View>
        </View>
    </Modal>
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


export default LoginModal;