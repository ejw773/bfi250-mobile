import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import getFilms from '../redux/actions/films';
import { getSeenStatus } from '../redux/actions/seen_status_actions';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import RenderCards from '../components/RenderCards';
import Loading from '../components/LoadingComponent';

// import { Redirect } from 'react-router-dom'; -- look for alternative

const Home = ({navigation}) => {
  const dispatch = useDispatch()
  const showSet = useSelector((state => state.showSet))
  const searchTitle = useSelector((state) => state.searchTitle.title)

  // Get Film Set from User Prefs
  const user = useSelector((state) => state.auth)
  const [filmSet, setFilmSet] = useState(user?.user?.filmSet)
  useEffect(() => {
    try {
      setFilmSet(user.user.filmSet)
    } catch {
      // Try later
    }
  }, [user.user])

  // Get Film Data, and narrow to selected set
  const allFilms = useSelector((state) => state?.movieData?.films)
  const [films, setFilms] = useState([])
  useEffect(() => {
    dispatch(getFilms())
  }, [dispatch])
  useEffect(() => {
    setFilms(allFilms?.[filmSet])
  }, [allFilms, filmSet])

  // Get Seen Status
  const seenStatusSlice = useSelector((state) => state?.seenStatus)
  const [seenStatus, setSeenStatus] = useState(seenStatusSlice?.seenStatus)
  useEffect(() => {
    setSeenStatus(seenStatusSlice?.seenStatus)
  }, [seenStatusSlice])
  useEffect(() => {
      dispatch(getSeenStatus())
  }, [dispatch, user])

  const [totalFilms, setTotalFilms] = useState(0)
  const [totalSeen, setTotalSeen] = useState(0)
  const [totalSkipped, setTotalSkipped] = useState(0)
  const [totalUnseen, setTotalUnseen] = useState(0)

  const [showTheseFilms, setShowTheseFilms] = useState(showSet.showSet)
  const [titlesToSearch, setTitlesToSearch] = useState([]);
  const [filmsSeen, setFilmsSeen] = useState([]);
  const [filmsSkipped, setFilmsSkipped] = useState([]);
  const [filmsToSee, setFilmsToSee] = useState([]);

  useEffect(() => {
    try {
      setTotalFilms(films.length)
      setTotalSeen(films.filter(film => seenStatus[film.imdbID]===true).length)
      setTotalSkipped(films.filter(film => seenStatus[film.imdbID]===false).length)
      setTotalUnseen(films.filter(film => typeof (seenStatus[film.imdbID])!=='boolean').length)
      setTitlesToSearch(films.filter(film => film.title.toLowerCase().includes(searchTitle.toLowerCase())));
      setFilmsSeen(titlesToSearch.filter(film => seenStatus[film.imdbID]===true));
      setFilmsSkipped(titlesToSearch.filter(film => seenStatus[film.imdbID]===false));
      setFilmsToSee(titlesToSearch.filter(film => typeof (seenStatus[film.imdbID])!=='boolean'));  
    } catch {
      // Try Later
    }
  }, [films, seenStatus])

  useEffect(() => {
    setShowTheseFilms(showSet.showSet)
  }, [showSet.showSet])

  if (!films) {
      return (
          <Loading />
      )
  } else {

    if (films.length > 0) {
        // totalFilms = films.length
        // totalSeen = films.filter(film => seenStatus[film.imdbID]===true).length;
        // totalSkipped = films.filter(film => seenStatus[film.imdbID]===false).length;
        // totalUnseen = films.filter(film => typeof (seenStatus[film.imdbID])!=='boolean').length;
    }

    // const showTheseFilms = showSet.showSet;
    // const titlesToSearch = films.filter(film => film.title.toLowerCase().includes(searchTitle.toLowerCase()))
    // const filmsSeen = titlesToSearch.filter(film => seenStatus[film.imdbID]===true);
    // const filmsSkipped = titlesToSearch.filter(film => seenStatus[film.imdbID]===false);
    // const filmsToSee = titlesToSearch.filter(film => typeof (seenStatus[film.imdbID])!=='boolean');

  // Perhaps some code to redirect if not logged in?

      return (
        <View style={{ flex: 1 }}>
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
          <RenderCards />
        </View>
      )
    } 
}

export default Home