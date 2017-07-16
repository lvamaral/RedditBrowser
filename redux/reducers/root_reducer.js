import { combineReducers } from 'redux';
import redditReducer from './reddit_reducer';


const rootReducer = combineReducers({
  session: redditReducer,
});


export default rootReducer;
