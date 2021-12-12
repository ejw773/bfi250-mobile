import { Alert } from 'react-native';

const logOutAlert = (props) => {
    console.log('log out alert')
    const { handleLogOutAll } = props
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
                onPress: () => handleLogOutAll()
            }
        ]
    )
}

export default logOutAlert;