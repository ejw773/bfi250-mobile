import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Buttons from './ButtonsComponent'
import BadgeComponent from './BadgeComponent'

const MovieCard = ({item, status}) => {
  return (
    <View style={{
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'black'
      }}>
      <View>
        <TouchableOpacity
          onPress={() => Linking.openURL(`https://www.imdb.com/title/${item.imdbID}/`)}
        >
          <Image 
            style={styles.imageStyle}
            source={{uri: item.poster}} 
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 30}}>
          <BadgeComponent style={styles.badgeStyle} status={status} />
          <Text style={{fontSize: 20}}>{item.bfiRank}. {item.title}</Text>
          <Text>{item.director}</Text>
          <Text>{item.year}</Text>
          <View style={{alignContent: 'center'}}>
            <Buttons status={status} imdbID={item.imdbID} key={item.imdbID} />
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 250,
  },
  badgeStyle: {
    position: 'absolute'
  }
})

export default MovieCard;