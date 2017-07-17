import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

class Post extends React.Component {
  constructor(props){
    super(props);
    this.info = this.props.info

  }

  getScore(){
    const score = (this.info.score / 1000).toFixed(1)
    return score+"k"
  }

  getSubDate(){
    let postDate = new Date(this.info.created_utc*1000)
    return postDate.toLocaleString().split(',').slice(1)
  }

  getTitle(){
    if (this.info.title.length > 60) {
      return this.info.title.slice(0,60)+"..."
    } else {
      return this.info.title
    }
  }

  render(){
    return(
      <TouchableOpacity onPress={() => navigator.push('postView', {info: this.info})}>
      <View style={styles.postContainer}>
        <View style={styles.postVotes}>
          <FontAwesome style={styles.votes} name={"chevron-up"} size={16}/>
          <Text style={styles.text}>{this.getScore()}</Text>
          <FontAwesome style={styles.votes} name={"chevron-down"} size={16}/>
        </View>
        <View style={styles.postImageContainer}>
          <Image style={styles.postImage} source={{uri: `${this.info.thumbnail}`}}/>
        </View>
        <View style={styles.postBody}>
          <View style={styles.postTitle}>
            <Text style={styles.titleText}>{this.getTitle()}</Text>
          </View>
          <View style={styles.postInfo}>
            <Text style={styles.text}>{`Submitted${this.getSubDate()} by: ${this.info.author}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    )
  }
}

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    paddingVertical: 5,
    flex: 1,
    marginVertical: 5,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  postVotes: {
    paddingHorizontal: 5,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  votes: {
    paddingLeft: 3,
  },
  postImage: {
    width: 50,
    height: 50,
  },
  postImageContainer: {
    flex: 1,
  },
  postBody: {
    overflow: 'hidden',
    marginLeft: 2,
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  postTitle: {
    flex: 1,
  },
  postInfo: {
    flex: 1,
  },
  text: {
    fontSize: 10,
  },
  titleText: {
    color: 'red',
    fontSize: 14,
  }

});
