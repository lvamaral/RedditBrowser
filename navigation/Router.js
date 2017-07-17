import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import PostScreen from '../screens/PostScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  postView: () => PostScreen,
  rootNavigation: () => RootNavigation,
}));
