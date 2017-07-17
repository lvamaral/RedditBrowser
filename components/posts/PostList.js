import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Post from './Post';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getPosts();
  }

  renderPosts(){
    if (Object.keys(this.props.posts).length === 0) {
      return (<View><Text style={styles.loadingText}>Loading...</Text></View>)
    } else {
      return this.props.posts.map((el, i) => <Post key={i} info={el}/>)
    }
  }

  render() {
    let posts = this.renderPosts();
    return(
      <ScrollView style={styles.container}>
        {posts}
      </ScrollView>
    )
  }
};

export default PostList;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingText: {
    textAlign: 'center',
    alignContent: 'center',
    fontSize: 25,
  },
});
