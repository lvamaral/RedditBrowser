import { combineReducers } from 'redux';
import redditReducer from './reddit_reducer';


const rootReducer = combineReducers({
  posts: redditReducer,
});


export default rootReducer;
