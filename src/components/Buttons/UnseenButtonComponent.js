import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const UnseenButton = ({ handlePress }) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(null)}
      style={{
        width: 150,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'brown',
      }}
    >
      <Text style={{ color: 'white' }}>Unseen</Text>
    </TouchableOpacity>
  );
};

export default UnseenButton;
