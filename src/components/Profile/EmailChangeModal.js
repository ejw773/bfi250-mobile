import React from 'react';
import { TextInput, View, Modal, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';

const EmailChangeModal = (props) => {
  const {
    showEmailChange,
    handleCloseEmailChange,
    handleEmailChange,
    emailText,
    setEmailText,
  } = props;
  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={showEmailChange}
      presentationStyle='overFullScreen'
      onDismiss={handleCloseEmailChange}
    >
      <View style={styles.card}>
        <Card>
          <Card.Title>Change Email:</Card.Title>
          <Card.Divider />
          <TextInput
            textContentType='emailAddress'
            style={styles.textInput}
            placeholder='New Email'
            value={emailText}
            onChangeText={(value) => setEmailText(value)}
          />
          <Card.Divider />
          <Button
            style={styles.formButton}
            title='Change Email'
            onPress={handleEmailChange}
          />
          <Button
            style={styles.formButton}
            buttonStyle={{ backgroundColor: 'gray' }}
            title='Cancel'
            onPress={handleCloseEmailChange}
          />
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  formButton: {
    margin: 20,
  },
  card: {
    marginTop: 200,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
  },
});

export default EmailChangeModal;
