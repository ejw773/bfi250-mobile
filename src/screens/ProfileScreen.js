import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, StyleSheet, Text, Modal } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { masterColor } from '../globalSettings/color'
import { login } from '../redux/actions/auth';
import AuthModal from '../components/auth/AuthModal'

import DeleteAccountModal from '../components/Profile/DeleteAccountModal'
import EmailChangeModal from '../components/Profile/EmailChangeModal'
import LogOutModal from '../components/Profile/LogOutModal'
import NameChangeModal from '../components/Profile/NameChangeModal'
import PasswordChangeModal from '../components/Profile/PasswordChangeModal'

import { logout, logoutAll, deleteAccount } from '../redux/actions/auth';
import { changeFilmSet, changeName, changeEmail, changePassword } from '../redux/actions/user_prefs_actions'
import { clearMessage } from '../redux/actions/message'
import { changeShowSet } from '../redux/actions/local_actions'


const Profile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const user = useSelector((state) => state.auth)
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

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch])

    const handleNameChange = async (e) => {
        e.preventDefault()
        dispatch(changeName(nameText))
        handleCloseNameChange()
    }

    const handleEmailChange = async (e) => {
        e.preventDefault()
        dispatch(changeEmail(emailText))
        handleCloseEmailChange()
    }

    const handlePasswordChange = async (e) => {
        e.preventDefault()
        dispatch(changePassword(passwordText))
        handleClosePasswordChange()
    }
    
    const handleLogOut = async (e) => {
        e.preventDefault()
        dispatch(logout())
        handleCloseLogOut()
    }

    const handleLogOutAll = (e) => {
        e.preventDefault()
        dispatch(logoutAll())
        handleCloseLogOut()
    }

    const handleDeleteAccount = (e) => {
        e.preventDefault()
        setDeleteMessage('Deleting account. You will be redirected...')
        setTimeout(() => {
            dispatch(deleteAccount())
            handleCloseDeleteAccount()    
        }, 2000)
    }

    const { name, email, filmSet } = user
    const setSelection = (selection) => {
        dispatch(changeFilmSet(selection))
        dispatch(changeShowSet('view-all'))
        return <Redirect to="/" />
    }


    
    return (
        <View style={styles.container}>
            <AuthModal 
                isLoggedIn={isLoggedIn}
            />
            <Text>This is the Profile screen</Text>
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
                handleLogOut={handleLogOut}
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