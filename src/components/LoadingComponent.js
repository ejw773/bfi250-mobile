import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { masterColor } from '../globalSettings/color';

function Loading() {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size='large' color={masterColor} />
      <Text style={styles.loadingText}>Loading . . .</Text>
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

export default Loading;
