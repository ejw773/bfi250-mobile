import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
// import * as SecureStore from 'expo-secure-store';
import { masterColor } from '../../globalSettings/color'
import { register } from '../../redux/actions/auth';

const LoginModal = ({ showRegister, toggleRegister }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const message = useSelector((state) => state.message.message)
    // const [remember, setRemember] = useState(false);

    const dispatch = useDispatch();

    const handleRegister = () => {
        dispatch(register(name, email, password))
        .then(() => {
            toggleRegister()
        })
    }


    return (
        <View style={styles.container}>
        <Modal
        visible={showRegister}
        onRequestClose={() => toggleRegister}
        >
        <View style={styles.container}>
            <Input 
                placeholder='Enter User Name'
                leftIcon={{type: 'font-awesome', name: 'user-o'}}
                autoCapitalize='none'
                onChangeText={name => setName(name)}
                value={name}
                containerStyle={styles.formInput}
                leftIconContainerStyle={styles.formIcon}
            />
            <Input 
                placeholder='Enter Email'
                leftIcon={{type: 'font-awesome', name: 'envelope-o'}}
                autoCapitalize='none'
                onChangeText={email => setEmail(email)}
                value={email}
                containerStyle={styles.formInput}
                leftIconContainerStyle={styles.formIcon}
            />
            <Input 
                placeholder='Enter Password'
                leftIcon={{type: 'font-awesome', name: 'key'}}
                autoCapitalize='none'
                onChangeText={password => setPassword(password)}
                value={password}
                containerStyle={styles.formInput}
                leftIconContainerStyle={styles.formIcon}
                secureTextEntry={true}
            />
            {/* <CheckBox 
                title='Remember Me'
                center
                checked={remember}
                onPress={() => setRemember(!remember)}
                containerStyle={styles.formCheckbox}
            /> */}
            <View style={styles.formButton}>
                <Button 
                    style={styles.formButton}
                    onPress={() => handleRegister()}
                    title='Register'
                    color={masterColor}
                />
                <Button 
                    style={styles.formButton}
                    onPress={() => toggleRegister()}
                    title='Cancel'
                    color={masterColor}
                />
            </View>
            <View><Text style={{color: 'red'}}>{message}</Text></View>
        </View>
    </Modal>
    </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20,
        marginTop: 100
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
        margin: 20
    }
})


export default LoginModal;