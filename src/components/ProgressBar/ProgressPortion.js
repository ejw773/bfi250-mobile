import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { changeShowSet } from '../../redux/actions/local_actions';

const ProgressPortion = ({width, color, text, title}) => {
  const dispatch = useDispatch();
  const widthPercent = `${width}%`

  const styles = StyleSheet.create({
    barStyle: {
      backgroundColor: color,
      width: widthPercent,
      justifyContent: 'center',
    },
    barText: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  })

  return (
    <TouchableOpacity
      style={styles.barStyle}
      onPress={() => dispatch(changeShowSet(title))}
    >
    <Text style={styles.barText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ProgressPortion;