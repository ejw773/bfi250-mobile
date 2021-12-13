import React from 'react';
import { TextInput, View, Text, Modal, StyleSheet, Input } from 'react-native'
import { Card, Button } from 'react-native-elements'

const NameChangeModal = (props) => {
    const { showNameChange, handleCloseNameChange, handleNameChange, nameText, setNameText } = props
    return (
        <Modal animationType="slide" 
            transparent={false} visible={showNameChange} 
            presentationStyle="overFullScreen" 
            onDismiss={handleCloseNameChange}>
            <View style={styles.card}>
                <Card>
                    <Card.Title>Change Name:</Card.Title>
                    <Card.Divider />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='New Name' 
                        value={nameText} 
                        onChangeText={(value) => setNameText(value)} />
                    <Card.Divider/>
                    <Button style={styles.formButton} title="Change Name" onPress={handleNameChange} />
                    <Button style={styles.formButton} buttonStyle={{backgroundColor: 'gray'}} title="Cancel" onPress={handleCloseNameChange} />
                </Card>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    formButton: {
        margin: 20
    },
    card: {
        marginTop: 200
    },
    textInput: {
        borderWidth: 1,
        padding: 10
    },
})



export default NameChangeModal;