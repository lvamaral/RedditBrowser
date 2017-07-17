import { RECEIVE_POSTS
} from '../actions/reddit_actions';



const redditReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts
    default:
      return state;
  }
};

export default redditReducer;
