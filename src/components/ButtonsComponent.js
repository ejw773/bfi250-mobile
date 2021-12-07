import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import FAIcon from 'react-native-vector-icons/FontAwesome';
// import { toggleStatus } from '../redux/statusSlice'
import SeenButton from './Buttons/SeenButtonComponent';
import UnseenButton from './Buttons/UnseenButtonComponent'
import SkipButton from './Buttons/SkipButtonComponent'
import UnskipButton from './Buttons/UnskipButtonComponent'

const Buttons = ({ status, imdbID }) => {
  const dispatch = useDispatch();
  const handlePress = (status) => {
    let payload = {
      imdbID,
      status
    };
    //dispatch(toggleStatus(payload));
  }
  return (
    status===true
    ? 
    <View style={styles.buttonGroupStyle}>
      <UnseenButton handlePress={handlePress} />
    </View>
    :
    status===false
    ?
    <View style={styles.buttonGroupStyle}>
      <UnskipButton handlePress={handlePress} />
    </View>
    :
    <View style={styles.buttonGroupStyle}>
      <SeenButton handlePress={handlePress} />
      <SkipButton handlePress={handlePress} />
    </View>

  )
}


const styles = StyleSheet.create({
  buttonGroupStyle: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingLeft: 20
  },
  button: {
    backgroundColor: 'red',
    padding: 10
  },
})

export default Buttons