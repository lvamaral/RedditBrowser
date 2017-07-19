import * as APIUtil from '../util/reddit_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const LOAD_POSTS = "LOAD_POSTS"


export const receivePosts = posts => {
  return {
  type: RECEIVE_POSTS,
  posts: posts.data.children.map(child => child.data)
  }
};

export const receiveLoadedPosts = posts => {
  return {
  type: LOAD_POSTS,
  posts
  }
};

export const loadPosts = posts => dispatch => (
  dispatch(receiveLoadedPosts(posts))
)

export const fetchData = query => dispatch => {
  return (
  fetch('https://www.reddit.com/.json')
  .then(response => response.json())
  .then(json => dispatch(receivePosts(json)))
  )
};
