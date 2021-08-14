import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

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
            renderItem={({item}) => <Text>{item.title}</Text>}></FlatList>
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

export default List;
