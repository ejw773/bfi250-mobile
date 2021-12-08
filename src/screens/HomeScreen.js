import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import getFilms from '../redux/actions/films';
import { getSeenStatus } from '../redux/actions/seen_status_actions';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import RenderCards from '../components/RenderCards';
// import Loading from './Loading';

// import { Redirect } from 'react-router-dom'; -- look for alternative

const Home = () => {
  const user = useSelector((state) => state.auth)
  // const filmSet = user?.user?.filmSet
  const filmSet = 'bfi1952'
  const showSet = useSelector((state => state.showSet))
  const searchTitle = useSelector((state) => state.searchTitle.title)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getFilms())
    }, [dispatch])  

  useEffect(() => {
      dispatch(getSeenStatus())
  }, [dispatch])

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
          <View><Text>{showSet.showSet}</Text></View>
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

      
      
  // Perhaps some code to redirect if not logged in?

      return (
        <View>
            <ProgressBar 
              totalFilms={totalFilms}
              totalSeen={totalSeen}
              totalSkipped={totalSkipped}
              totalUnseen={totalUnseen}
              filmSet={filmSet}
            />
          {
            showTheseFilms==='seen' ?
            <RenderCards filmsToDisplay={filmsSeen} /> :
            showTheseFilms==='skipped' ?
            <RenderCards filmsToDisplay={filmsSkipped} /> :
            showTheseFilms==='unseen' ?
            <RenderCards filmsToDisplay={filmsToSee} /> :
            <RenderCards filmsToDisplay={titlesToSearch} />
          }
          <View><Text>Hello</Text></View>
          <RenderCards />
        </View>
      )
    } 
}

export default Home