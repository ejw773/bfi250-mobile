import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, FlatList } from 'react-native'
import MovieCard from './MovieCard'
import Empty from './EmptyComponent'

const RenderCards = ({ filmsToDisplay }) => {
    let status = {}
    const seenStatus = useSelector((state) => state.seenStatus.seenStatus)
    if (seenStatus) {
        status = seenStatus
    }
    const emptyOrNot = filmsToDisplay?.length
    if (emptyOrNot !== undefined && emptyOrNot > 0) {
        return (
            <SafeAreaView>
                <FlatList
                contentContainerStyle={{ paddingBottom: 100 }}
                data={ filmsToDisplay }
                renderItem={({ item })=>((
                    <MovieCard
                    item={item}
                    status={status[item.imdbID]}
                    />
                ))}
                keyExtractor={item => item.title}
                extraData={status}
                />
            </SafeAreaView>
        )    
    } else {
        return (
            <Empty />
        )
    }
}

export default RenderCards;