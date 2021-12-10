import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Button, StyleSheet } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { masterColor } from '../globalSettings/color'
import { login } from '../redux/actions/auth';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [remember, setRemember] = useState(false);

    const dispatch = useDispatch();

    const handleLogin = () => {
        //  if (remember) {
        //     SecureStore.setItemAsync(
        //         'userinfo',
        //         JSON.stringify({
        //             email,
        //             password
        //         })
        //     ).catch(error => console.log('Could not save user info', error));
        // } else {
        //     SecureStore.deleteItemAsync('userinfo').catch(
        //         error => console.log('Could not delete user info', error)
        //     );
        // }
        dispatch(login(email, password))
        .then(() => {

        })
    }

    // useEffect(() => {
    //     SecureStore.getItemAsync('userinfo')
    //     .then(userData => {
    //         const userInfo =JSON.parse(userData);
    //         if (userInfo) {
    //             setEmail(userInfo.email);
    //             setPassword(userInfo.password);
    //             setRemember(true)
    //         }
    //     })
    // }, [])
    
    return (
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

export default Login