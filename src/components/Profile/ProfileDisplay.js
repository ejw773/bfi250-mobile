import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileDisplay = (props) => {
    console.log(props)
    const { name, filmSet, setSelection, handleShowNameChange, handleShowEmailChange, email, handleShowPasswordChange, handleShowLogOut, handleShowDeleteAccount } = props
    console.log(name)
    return (
        <View>
            <Text>{name}'s Profile</Text>
            <Text>The BFI publishes a new list every decade. Choose your list below.</Text>
            <Text>{filmSet}</Text>
            <Text>List Chooser Goes Here</Text>
            <Text>User Name: {name}</Text>
            <Button>Change User Name</Button>
            <Text>{email}</Text>
            <Button>Change Email</Button>
            <Text>Password</Text>
            <Button>Change Password</Button>
            <Button>Log Out</Button>
            <Button>Delete Account</Button>
        </View>
    )
}

export default ProfileDisplay;