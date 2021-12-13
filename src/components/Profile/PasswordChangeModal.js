import React from 'react';
import { TextInput, View, Modal, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';

const PasswordChangeModal = (props) => {
  const {
    showPasswordChange,
    handleClosePasswordChange,
    handlePasswordChange,
    passwordText,
    setPasswordText,
  } = props;
  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={showPasswordChange}
      presentationStyle='overFullScreen'
      onDismiss={handleClosePasswordChange}
    >
      <View style={styles.card}>
        <Card>
          <Card.Title>Change Password:</Card.Title>
          <Card.Divider />
          <TextInput
            textContentType='password'
            style={styles.textInput}
            placeholder='New Password'
            value={passwordText}
            onChangeText={(value) => setPasswordText(value)}
            secureTextEntry={true}
          />
          <Card.Divider />
          <Button
            style={styles.formButton}
            title='Change Password'
            onPress={handlePasswordChange}
          />
          <Button
            style={styles.formButton}
            buttonStyle={{ backgroundColor: 'gray' }}
            title='Cancel'
            onPress={handleClosePasswordChange}
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

export default PasswordChangeModal;
