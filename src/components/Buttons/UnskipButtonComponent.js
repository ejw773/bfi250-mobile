import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const UnskipButton = ({ handlePress }) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(null)}
      style={{
        width: 150,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'gray',
      }}
    >
      <Text style={{ color: 'white' }}>Unskip</Text>
    </TouchableOpacity>
  );
};

export default UnskipButton;
