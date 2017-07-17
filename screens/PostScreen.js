import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Post',
    },
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.postContainer}>
        <Text style={styles.title}>{this.props.info.title}</Text>
        <Text style={styles.subTitle}>{this.props.info.title}</Text>
        <View style={styles.postImageContainer}>
          <Image style={styles.postImage} source={{uri: `${this.props.info.thumbnail}`}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  postImageContainer: {
    flex: 1,
  },
  postImage: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 12,
    textAlign: 'center',
  }

});
