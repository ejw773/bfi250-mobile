import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { toggleSeenStatus, deleteSeenStatus } from '../redux/actions/seen_status_actions'
import SeenButton from './Buttons/SeenButtonComponent';
import UnseenButton from './Buttons/UnseenButtonComponent'
import SkipButton from './Buttons/SkipButtonComponent'
import UnskipButton from './Buttons/UnskipButtonComponent'

const Buttons = ({ status, imdbID }) => {
  const dispatch = useDispatch();

  const handleToggle = (status) => {
    dispatch(toggleSeenStatus(imdbID, status));
  }

  const handleDelete = () => {
    console.log(`Deleting: ${imdbID}`)
    dispatch(deleteSeenStatus(imdbID, null))
  }

  return (
    status===true
    ? 
    <View style={styles.buttonGroupStyle}>
      <UnseenButton handlePress={handleDelete} />
    </View>
    :
    status===false
    ?
    <View style={styles.buttonGroupStyle}>
      <UnskipButton handlePress={handleDelete} />
    </View>
    :
    <View style={styles.buttonGroupStyle}>
      <SeenButton handlePress={handleToggle} />
      <SkipButton handlePress={handleToggle} />
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