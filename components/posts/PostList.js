import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class PostList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>HEY</Text>
      </View>
    )
  }

};

export default PostList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 25,
  }
});
