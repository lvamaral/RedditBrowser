import { connect } from 'react-redux';
import { getPosts } from '../../redux/actions/reddit_actions';
import PostList from './PostList';

const mapStateToProps = ({posts}) => {
  return {
    posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
