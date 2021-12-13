import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const SkipButton = ({ handlePress }) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(false)}
      style={{
        width: 75,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'red',
      }}
    >
      <Text style={{ color: 'white' }}>Skip</Text>
    </TouchableOpacity>
  );
};

export default SkipButton;
