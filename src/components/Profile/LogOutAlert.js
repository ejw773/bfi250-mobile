import { Alert } from 'react-native';

const logOutAlert = (props) => {
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