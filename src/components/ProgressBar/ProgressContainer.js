import React from 'react';
// import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import ProgressPortion from './ProgressPortion'

const ProgressContainer = ({ totalFilms, totalSeen, totalSkipped, totalUnseen, filmSet }) => {
//   const settings = useSelector((state) => state.settings)
//   const seenStatusData = useSelector((state) => state.status)
//   const films = useSelector((state => state.films[settings.filmSet]))
//   let totalFilms = films.length;
  let minPercent = 10;
  let leftoverPercent = 100 - (minPercent * 3);

// Calculate quantities of seen, unseen, and skipped
    // let totalSeen = (Object.values(seenStatusData).reduce((a, item) => a + (item === true ? 1 : 0), 0));
    // let totalSkipped = (Object.values(seenStatusData).reduce((a, item) => a + (item === false ? 1 : 0), 0));
    // let totalUnseen = totalFilms - totalSeen - totalSkipped;

    // Calculate percentages, also accounting for minimum percentage
    let seenPercent = (totalSeen / totalFilms * leftoverPercent) + minPercent;
    // if (seenPercent < minPercent) {seenPercent = minPercent};

    let skippedPercent = (totalSkipped / totalFilms * leftoverPercent) + minPercent;
    // if (skippedPercent < minPercent) {skippedPercent = minPercent};

    let unseenPercent = (totalUnseen / totalFilms * leftoverPercent) + minPercent;


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

  )
}

const styles = StyleSheet.create({
  barStyle: {
    flexDirection: 'row',
    height: 40
  }
})

export default ProgressContainer;