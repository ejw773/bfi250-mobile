import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { masterColor } from '../../globalSettings/color';
import { login } from '../../redux/actions/auth';
import { clearMessage } from '../../redux/actions/message';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const AuthModal = () => {
  const auth = useSelector((state) => state.auth);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [remember, setRemember] = useState(false);

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
      <Text>Log In Or Register</Text>
      <View style={styles.formButton}>
        <Button onPress={() => toggleLogin()} title='Log In' />
      </View>
      <View style={styles.formButton}>
        <Button onPress={() => toggleRegister()} title='Register' />
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
  formButton: {
    margin: 40,
  },
});

export default AuthModal;
