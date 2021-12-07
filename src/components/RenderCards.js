import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import getFilms from '../redux/actions/films';
import MovieCard from './MovieCard'

const RenderCards = () => {
    const user = useSelector((state) => state.auth)
    // const filmSet = user?.user?.filmSet
    const filmSet = 'bfi1952'
    const showSet = useSelector((state => state.showSet))
    const searchTitle = useSelector((state) => state.searchTitle.title)

    let films = []
    const allFilms = useSelector((state) => state?.movieData?.films)
    if (allFilms) {
        films = allFilms[filmSet]
    }

    let seenStatus = {}
    const allSeenStatus = useSelector((state) => state.seenStatus.seenStatus)
    if (allSeenStatus) {
        seenStatus = allSeenStatus
    }

    if (films.length === 0) {
        return (
            <View><Text>Loading...</Text></View>
        )
    } else {

        let totalFilms = 0
        let totalSeen = 0
        let totalSkipped = 0
        let totalUnseen = 0


        if (films.length !== 0) {
            totalFilms = films.length
            totalSeen = films.filter(film => seenStatus[film.imdbID]===true).length;
            totalSkipped = films.filter(film => seenStatus[film.imdbID]===false).length;
            totalUnseen = films.filter(film => typeof (seenStatus[film.imdbID])!=='boolean').length;
        }

        const showTheseFilms = showSet.showSet;
        const titlesToSearch = films.filter(film => film.title.toLowerCase().includes(searchTitle.toLowerCase()))
        const filmsSeen = titlesToSearch.filter(film => seenStatus[film.imdbID]===true);
        const filmsSkipped = titlesToSearch.filter(film => seenStatus[film.imdbID]===false);
        const filmsToSee = titlesToSearch.filter(film => typeof (seenStatus[film.imdbID])!=='boolean');








        return (
            <SafeAreaView>
                <View>
                    <Text>Render Cards</Text>
                </View>
              <FlatList
                data={
                  showTheseFilms==='seen' ? filmsSeen :
                  showTheseFilms==='skipped' ? filmsSkipped :
                  showTheseFilms==='unseen' ? filmsToSee :
                  titlesToSearch
                }
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


}

export default RenderCards;