import { connect } from 'react-redux';
import {fetchData, loadPosts} from '../../redux/actions/reddit_actions';
import PostList from './PostList';

const mapStateToProps = ({posts}) => {
  return {
    posts: posts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(fetchData()),
    loadPosts: (posts) => dispatch(loadPosts(posts))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
