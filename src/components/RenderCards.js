import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import MovieCard from './MovieCard'

const RenderCards = ({ filmsToDisplay }) => {
    console.log(filmsToDisplay)
    return (
        <SafeAreaView>
            <View>
                <Text>Render Cards</Text>
            </View>
            <FlatList
            data={ filmsToDisplay }
            renderItem={({ item })=>((
                <MovieCard
                item={item}
                // status={status.[item.imdbID]}
                status={null}
                />
            ))}
            keyExtractor={item => item.title}
            // extraData={status}
            />
        </SafeAreaView>
        )
}

export default RenderCards;