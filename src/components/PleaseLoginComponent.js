import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { masterColor } from '../globalSettings/color';

function PleaseLogin({ navigation }) {
  return (
    <View style={styles.loadingView}>
      <Text style={styles.loadingText}>Please Log In</Text>
      <Button
        title='Login Page'
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loadingText: {
    color: masterColor,
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
});

export default PleaseLogin;
