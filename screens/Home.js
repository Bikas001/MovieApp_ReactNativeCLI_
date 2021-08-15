import React from 'react';
import {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import {getPopularMovie, getUpcomingMovie} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';

const dimensions = Dimensions.get('screen');

const Home = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);
  const [moviesImages, setMoviesImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovie()
      .then(movies => {
        const moviesImagesArray = [];
        movies.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  useEffect(() => {
    getPopularMovie()
      .then(movie => {
        setPopularMovies(movie);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.containerStyle}>
          <SliderBox
            images={moviesImages}
            autoplay={true}
            circleLoop={true}
            dotStyle={{height: 0}}
            sliderBoxHeight={dimensions.height / 1.5}
          />
        </View>
        <View style={styles.carsoul}>
          <List title="Popular Moive" content={popularMovies}></List>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carsoul: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
