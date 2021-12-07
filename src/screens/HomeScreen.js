import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom'; -- look for alternative
import { View, Text } from 'react-native';
import getFilms from '../redux/actions/films';
import { getSeenStatus } from '../redux/actions/seen_status_actions';
// import ProgressBar from './ProgressBar';
// import Footer from './Footers/MainFooter';
import RenderCards from '../components/RenderCards';
// import Loading from './Loading';

const Home = () => {
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(getFilms())
      }, [dispatch])  

    useEffect(() => {
        dispatch(getSeenStatus())
    }, [dispatch])

  
//     // if (!user?.isLoggedIn) {
//     //     return <Redirect to="/login" />;
//     //   }
    
        return (
          <View>
            {/* <div className="fixed-top">
              <ProgressBar 
                totalFilms={totalFilms}
                totalSeen={totalSeen}
                totalSkipped={totalSkipped}
                totalUnseen={totalUnseen}
              />
            </div> */}
            {/* {
              showTheseFilms==='view-seen' ?
              <RenderCards BFI={filmsSeen} /> :
              showTheseFilms==='view-skipped' ?
              <RenderCards BFI={filmsSkipped} /> :
              showTheseFilms==='view-tosee' ?
              <RenderCards BFI={filmsToSee} /> :
              <RenderCards BFI={titlesToSearch} />
            } */}
            <View><Text>Hello</Text></View>
            <RenderCards />
          </View>
        )
    //   } 
    
}

export default Home