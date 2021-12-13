import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { clearMessage } from '../../redux/actions/message';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { masterColor } from '../../globalSettings/color';

const AuthModal = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const dispatch = useDispatch();

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    dispatch(clearMessage());
  };
  const toggleRegister = () => {
    setShowRegister(!showRegister);
    dispatch(clearMessage());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Log In Or Register</Text>
      <View style={styles.formButtonGroup}>
        <Button
          style={styles.formButton}
          onPress={() => toggleLogin()}
          title='Log In'
        />
        <Button
          style={styles.formButton}
          onPress={() => toggleRegister()}
          title='Register'
        />
      </View>
      <LoginModal showLogin={showLogin} toggleLogin={toggleLogin} />
      <RegisterModal
        showRegister={showRegister}
        toggleRegister={toggleRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
    flex: 1,
  },
  formIcon: {
    marginRight: 10,
  },
  formInput: {
    padding: 10,
  },
  formCheckbox: {
    margin: 10,
    backgroundColor: null,
  },
  formButtonGroup: {
    margin: 40,
  },
  formButton: {
    margin: 10,
  },
  loginText: {
    color: masterColor,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AuthModal;
