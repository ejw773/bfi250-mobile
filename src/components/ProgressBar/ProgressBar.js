import React from 'react';
import { changeShowSet } from '../../redux/actions/local_actions';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProgressContainer from './ProgressContainer'

const ProgressBar = ({ totalFilms, totalSeen, totalSkipped, totalUnseen, filmSet }) => {
    const dispatch = useDispatch();
    const barTitle = `${filmSet.slice(-4)} - ${totalFilms} Titles`
  return (
    <View>
      <TouchableOpacity 
        style={{
          backgroundColor: 'blue',
          height: 40,
          justifyContent: 'flex-end'
        }}
        onPress={() => dispatch(changeShowSet('view-all'))}  
      >
        <Text style={styles.barText}>
          {barTitle}
        </Text>
      </TouchableOpacity>
      <ProgressContainer
        totalFilms={totalFilms}
        totalSeen={totalSeen}
        totalSkipped={totalSkipped}
        totalUnseen={totalUnseen}
        filmSet={filmSet}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  barText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  }
})

export default ProgressBar