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
        <Text style={styles.subTitle}>{`Submitted by: ${this.props.info.author}`}</Text>
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
  },
  postImageContainer: {
    flex: 1,
    dispay: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  postImage: {
    alignSelf: 'center',
    width: 200,
    height: 200,
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
