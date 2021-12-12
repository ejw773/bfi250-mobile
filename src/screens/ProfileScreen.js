import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { Button } from 'react-native-elements'
import { verifyLogin } from '../redux/actions/auth'
import { Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { masterColor } from '../globalSettings/color'
import { login } from '../redux/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthModal from '../components/auth/AuthModal'
import { Picker } from '@react-native-picker/picker'

import ProfileDisplay from '../components/Profile/ProfileDisplay'
import DeleteAccountModal from '../components/Profile/DeleteAccountModal'
import EmailChangeModal from '../components/Profile/EmailChangeModal'
import LogOutModal from '../components/Profile/LogOutModal'
import NameChangeModal from '../components/Profile/NameChangeModal'
import PasswordChangeModal from '../components/Profile/PasswordChangeModal'

import { logout, logoutAll, deleteAccount } from '../redux/actions/auth';
import { changeFilmSet, changeName, changeEmail, changePassword } from '../redux/actions/user_prefs_actions'
import { clearMessage } from '../redux/actions/message'
import { changeShowSet } from '../redux/actions/local_actions'


const Profile = ({navigation}) => {
    const [filmSet, setFilmSet] = useState('bfi1952')
    const user = useSelector((state) => state.auth)
    const isLoggedIn = user.isLoggedIn

    const [nameText, setNameText] = useState('')
    const [emailText, setEmailText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const [deleteMessage, setDeleteMessage] = useState('')

    // Control Name Change
    const [showNameChange, setShowNameChange] = useState(false)
    const handleShowNameChange = () => setShowNameChange(true)
    const handleCloseNameChange = () => setShowNameChange(false)

    // Control Email Change
    const [showEmailChange, setShowEmailChange] = useState(false)
    const handleShowEmailChange = () => setShowEmailChange(true)
    const handleCloseEmailChange = () => setShowEmailChange(false)
    
    // Control Password Change
    const [showPasswordChange, setShowPasswordChange] = useState(false)
    const handleShowPasswordChange = () => setShowPasswordChange(true)
    const handleClosePasswordChange = () => setShowPasswordChange(false)

    // Control Log Out
    const [showLogOut, setShowLogOut] = useState(false)
    const handleShowLogOut = () => setShowLogOut(true)
    const handleCloseLogOut = () => setShowLogOut(false)
    
    // Control Delete Account
    const [showDeleteAccount, setShowDeleteAccount] = useState(false)
    const handleShowDeleteAccount = () => setShowDeleteAccount(true)
    const handleCloseDeleteAccount = () => setShowDeleteAccount(false)

    const dispatch = useDispatch()

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

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch])

    const handleNameChange = async (e) => {
        dispatch(changeName(nameText))
        handleCloseNameChange()
    }

    const handleEmailChange = async (e) => {
        dispatch(changeEmail(emailText))
        handleCloseEmailChange()
    }

    const handlePasswordChange = async (e) => {
        dispatch(changePassword(passwordText))
        handleClosePasswordChange()
    }
    
    const handleLogOutAll = (e) => {
        dispatch(logoutAll())
        handleCloseLogOut()
    }

    const handleDeleteAccount = (e) => {
        setDeleteMessage('Deleting account. You will be redirected...')
        setTimeout(() => {
            dispatch(deleteAccount())
            handleCloseDeleteAccount()    
        }, 2000)
    }

    if (!isLoggedIn || !user.user) {
        return (
            <AuthModal />
    )
    } else {

    const { name, email, filmSet } = user.user
    const setSelection = (selection) => {
        dispatch(changeFilmSet(selection))
        dispatch(changeShowSet('view-all'))
        navigation.navigate("Home")
    }
    
    return (
        <View style={styles.container}>
            <View>
                <Text>{name}'s Profile</Text>
                <Text>The BFI publishes a new list every decade. Choose your list below.</Text>
                <Text>{filmSet}</Text>
                <Picker
                    selectedValue={filmSet}
                    onValueChange={(itemValue => setSelection(itemValue))}
                >
                    <Picker.Item label="bfi1952" value="bfi1952" />
                    <Picker.Item label="bfi1962" value="bfi1962" />
                    <Picker.Item label="bfi1972" value="bfi1972" />
                    <Picker.Item label="bfi1982" value="bfi1982" />
                    <Picker.Item label="bfi1992" value="bfi1992" />
                    <Picker.Item label="bfi2002" value="bfi2002" />
                    <Picker.Item label="bfi2012" value="bfi2012" />
                    
                    
                </Picker>
                <Text>List Chooser Goes Here</Text>
                <Text>User Name: {name}</Text>
                <Button
                    title="Change User Name"
                    onPress={handleShowNameChange}
                />
                <Text>{email}</Text>
                <Button
                    title="Change Email"
                    onPress={handleShowEmailChange}
                />
                <Text>Password</Text>
                <Button
                    title="Change Password"
                    onPress={handleShowPasswordChange}
                />
                <Button
                    title="Log Out"
                    onPress={handleShowLogOut}
                />
                <Button
                    title="Delete Account"
                    onPress={handleShowDeleteAccount}
                />
            </View>
            <NameChangeModal 
                showNameChange={showNameChange}
                handleCloseNameChange={handleCloseNameChange}
                handleNameChange={handleNameChange}
                nameText={nameText}
                setNameText={setNameText}
            />

            <EmailChangeModal 
                showEmailChange={showEmailChange}
                handleCloseEmailChange={handleCloseEmailChange}
                handleEmailChange={handleEmailChange}
                emailText={emailText}
                setEmailText={setEmailText}
            />

            <PasswordChangeModal 
                showPasswordChange={showPasswordChange}
                handleClosePasswordChange={handleClosePasswordChange}
                handlePasswordChange={handlePasswordChange}
                passwordText={passwordText}
                setPasswordText={setPasswordText}
            />

            <LogOutModal 
                showLogOut={showLogOut}
                handleCloseLogOut={handleCloseLogOut}
                handleLogOutAll={handleLogOutAll}
            />

            <DeleteAccountModal 
                showDeleteAccount={showDeleteAccount}
                handleCloseDeleteAccount={handleCloseDeleteAccount}
                deleteMessage={deleteMessage}
                handleDeleteAccount={handleDeleteAccount}
            />
        </View>
    )
}
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