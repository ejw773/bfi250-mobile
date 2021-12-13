import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, View, StyleSheet, Text, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements'
import { verifyLogin } from '../redux/actions/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthModal from '../components/auth/AuthModal'
import { Picker } from '@react-native-picker/picker'

import ProfileDisplay from '../components/Profile/ProfileDisplay'
import EmailChangeModal from '../components/Profile/EmailChangeModal'
import NameChangeModal from '../components/Profile/NameChangeModal'
import PasswordChangeModal from '../components/Profile/PasswordChangeModal'

import { logout, deleteAccount } from '../redux/actions/auth';
import { changeFilmSet, changeName, changeEmail, changePassword } from '../redux/actions/user_prefs_actions'
import { clearMessage } from '../redux/actions/message'
import { changeShowSet } from '../redux/actions/local_actions'


const Profile = ({navigation}) => {
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

    const handleNameChange = async () => {
        dispatch(changeName(nameText))
        handleCloseNameChange()
    }

    const handleEmailChange = async () => {
        dispatch(changeEmail(emailText))
        handleCloseEmailChange()
    }

    const handlePasswordChange = async () => {
        dispatch(changePassword(passwordText))
        handleClosePasswordChange()
    }
    
    const handleLogout = () => {
        dispatch(logout())
//        handleCloseLogOut()
    }

    const handleDeleteAccount = () => {
        setDeleteMessage('Deleting account. You will be redirected...')
        setTimeout(() => {
            dispatch(deleteAccount())
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
    }
    
    const logOutAlert = () => 
        Alert.alert(
            'Hey There',
            'Are you sure you want to log out?',
            [
                {
                    text: "Cancel",
                    style: 'cancel'
                },
                {
                    text: "Log Out",
                    onPress: () => handleLogout()
                }
            ]
        )

    const deleteAccountAlert = () => 
            Alert.alert(
                'Delete Account?',
                'Your data can not be recovered.',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'Delete Account',
                        onPress: () => handleDeleteAccount()
                    }
                ]
            )



    return (
        <ScrollView>
            <View>
                <Card>
                    <Card.Title>Choose Your List</Card.Title>
                    <Text>The BFI publishes a new list every decade. Choose your list below.</Text>
                    <Picker
                        selectedValue={filmSet}
                        onValueChange={(itemValue => setSelection(itemValue))}
                    >
                        <Picker.Item label="1952 (12 Films)" value="bfi1952" />
                        <Picker.Item label="1962 (10 Films)" value="bfi1962" />
                        <Picker.Item label="1972 (11 Films)" value="bfi1972" />
                        <Picker.Item label="1982 (11 Films)" value="bfi1982" />
                        <Picker.Item label="1992 (10 Films)" value="bfi1992" />
                        <Picker.Item label="2002 (11 Films)" value="bfi2002" />
                        <Picker.Item label="2012 (250 Films)" value="bfi2012" />
                        {/* <Picker.Item label="2022 (0 Films)" value="bfi2022" /> */}
                    </Picker>
                    <Button
                        buttonStyle={{backgroundColor: 'green'}}
                        style={styles.formButton}
                        title="Go To Films"
                        onPress={() => navigation.navigate('Home')}
                    />
                </Card>
                <Card>
                    <Card.Title>
                        {name}'s Profile
                    </Card.Title>
                    <Text style={styles.textStyle}>Email Address:</Text>
                    <Text style={styles.textStyle}>{email}</Text>
                    <Button
                        style={styles.formButton}
                        title="Change User Name"
                        onPress={handleShowNameChange}
                    />
                    <Button
                        style={styles.formButton}
                        title="Change Email"
                        onPress={handleShowEmailChange}
                    />
                    <Button
                        style={styles.formButton}
                        title="Change Password"
                        onPress={handleShowPasswordChange}
                    />
                </Card>
                <Card>
                    <Card.Title>Leave</Card.Title>
                    <Button
                        style={styles.formButton}
                        title="Log Out"
                        //onPress={handleShowLogOut}
                        onPress={logOutAlert}
                        buttonStyle={{backgroundColor: 'gray'}}
                    />
                    <Button
                        style={styles.formButton}
                        title="Delete Account"
                        onPress={deleteAccountAlert}
                        buttonStyle={{backgroundColor: 'red'}}
                    />
                </Card>
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
        </ScrollView>
    )
}
}

const styles = StyleSheet.create({
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
        margin: 10
    },
    textStyle: {
        margin: 10
    }
})

export default Profile