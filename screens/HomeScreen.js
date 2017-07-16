import React from 'react';
import {View, StyleSheet} from 'react-native';
import PostListContainer from '../components/posts/PostListContainer';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <PostListContainer />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
