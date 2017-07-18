import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  RefreshControl
} from 'react-native';
import Post from './Post';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {refreshing: false};
  }

  componentDidMount(){
    this.props.getPosts();
  }

  _onRefresh() {
    this.setState({refreshing: true});
      this.props.getPosts().then(() => {
      this.setState({refreshing: false});
    });
  }

  renderPosts(){
    if (Object.keys(this.props.posts).length === 0 || this.state.refreshing) {
      return (<View><Text style={styles.loadingText}>Loading...</Text></View>)
    } else {
      return this.props.posts.map((el, i) => <Post key={i} info={el} navigator={this.props.navigator}/>)
    }
  }

  render() {
    let posts = this.renderPosts();
    return(
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
        >
        {posts}
      </ScrollView>
    )
  }
};

export default PostList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingText: {
    textAlign: 'center',
    alignContent: 'center',
    fontSize: 25,
  },
});
