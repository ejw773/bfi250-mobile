import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';
import { masterColor } from '../../globalSettings/color';
import { login } from '../../redux/actions/auth';

const LoginModal = ({ showLogin, toggleLogin }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const message = useSelector((state) => state.message.message);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await dispatch(login(email, password));
      toggleLogin();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Modal visible={showLogin} onRequestClose={() => toggleLogin}>
        <View style={styles.container}>
          <Input
            placeholder='Email'
            leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
            autoCapitalize='none'
            onChangeText={(email) => setEmail(email)}
            value={email}
            containerStyle={styles.formInput}
            leftIconContainerStyle={styles.formIcon}
            textContentType='emailAddress'
          />
          <Input
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'key' }}
            autoCapitalize='none'
            onChangeText={(password) => setPassword(password)}
            value={password}
            containerStyle={styles.formInput}
            leftIconContainerStyle={styles.formIcon}
            textContentType='password'
            secureTextEntry={true}
          />
          <View style={styles.formButton}>
            <Button
              style={styles.formButton}
              onPress={() => handleLogin()}
              title='Login'
              color={masterColor}
            />
            <Button
              style={styles.formButton}
              onPress={() => toggleLogin()}
              title='Cancel'
              color={masterColor}
            />
          </View>
          <View>
            <Text style={{ color: 'red' }}>{message}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 100,
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
    margin: 20,
  },
});

export default LoginModal;
