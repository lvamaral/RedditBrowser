import { connect } from 'react-redux';
import {fetchData} from '../../redux/actions/reddit_actions';
import PostList from './PostList';

const mapStateToProps = ({posts}) => {
  return {
    posts: posts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(fetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
