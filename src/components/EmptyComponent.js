import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { masterColor } from '../globalSettings/color';

function Empty() {
  return (
    <View style={styles.loadingView}>
      <Text style={styles.loadingText}>Nothing to See Here....</Text>
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
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Empty;
