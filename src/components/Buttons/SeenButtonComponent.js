import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const SeenButton = ({handlePress}) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(true)}
      style={{
        width: 75,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'green'
        }}
    >

        <Text style={{color: 'white'}}>Seen</Text>
      </TouchableOpacity>
  )
}

export default SeenButton;