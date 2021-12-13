import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProgressPortion from './ProgressPortion';

const ProgressContainer = ({
  totalFilms,
  totalSeen,
  totalSkipped,
  totalUnseen,
  filmSet,
}) => {
  let minPercent = 10;
  let leftoverPercent = 100 - minPercent * 3;
  let seenPercent = (totalSeen / totalFilms) * leftoverPercent + minPercent;
  let skippedPercent =
    (totalSkipped / totalFilms) * leftoverPercent + minPercent;
  let unseenPercent = (totalUnseen / totalFilms) * leftoverPercent + minPercent;

  return (
    <View style={styles.barStyle}>
      <ProgressPortion
        color='brown'
        width={skippedPercent}
        text={totalSkipped}
        title='skipped'
      />
      <ProgressPortion
        color='green'
        width={seenPercent}
        text={totalSeen}
        title='seen'
      />
      <ProgressPortion
        color='yellow'
        width={unseenPercent}
        text={totalUnseen}
        title='unseen'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    flexDirection: 'row',
    height: 40,
  },
});

export default ProgressContainer;
