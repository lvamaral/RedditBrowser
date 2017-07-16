export const RECEIVE_POSTS = "RECEIVE_POSTS";
import * as APIUtil from '../util/reddit_util';


export const receivePosts = posts => {
  return {
  type: RECEIVE_POSTS,
  posts: posts
  }
};

export const getPosts = () => dispatch => {
  return (
  APIUtil.posts().then(posts => (
    dispatch(receivePosts(posts))
  ))
)};
