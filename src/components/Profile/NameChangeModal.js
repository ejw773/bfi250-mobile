import React from 'react';
import { View, Text, Modal, StyleSheet, Input } from 'react-native'
import { Card } from 'react-native-elements'

const NameChangeModal = (props) => {
    const { showNameChange, handleCloseNameChange, handleNameChange, nameText, setNameText } = props
    return (
        <Modal
            transparent={true}
            visible={showNameChange}
            onRequestClose={handleCloseNameChange}
        >
            <Card>
                <Card.Title>Hello</Card.Title>
            </Card>

        </Modal>
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



export default NameChangeModal;