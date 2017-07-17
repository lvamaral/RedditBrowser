import React from 'react';
import { View, Text } from 'react-native';


export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Post',
    },
  };

  render() {
    return (
      <View style={styles.container}
        <Text>{Hi}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
