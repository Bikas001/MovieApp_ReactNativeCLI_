import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
};

class List extends React.PureComponent {
  render() {
    const {title, content} = this.props;
    return (
      <View style={styles.ListStyle}>
        <View>
          <Text style={styles.ListTitle}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({item}) => <Card item={item} />}></FlatList>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ListStyle: {
    marginTop: 20,
  },
  ListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00e',
    padding: 10,
  },
});

List.PropTypes = propTypes;
export default List;
