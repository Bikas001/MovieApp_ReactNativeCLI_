import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const placeholderImage = require('../assets/images/imgNotFound.png');
const propTypes = {
  item: PropTypes.object,
};

class Card extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.image}
          source={
            item.poster_path
              ? {
                  uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
                }
              : placeholderImage
          }
        />
        {!item.poster_path && (
          <Text style={styles.placeHolderText}>{item.title} </Text>
        )}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: 200,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 20,
  },
  placeHolderText: {
    position: 'absolute',
    top: 20,
    width: 100,
    textAlign: 'center',
  },
});

Card.PropTypes = propTypes;

export default Card;
