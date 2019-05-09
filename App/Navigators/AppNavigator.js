import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../Containers/HomeScreen/HomeScreen';
import SplashScreen from '../Containers/SplashScreen/SplashScreen';

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    HomeScreen: HomeScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(StackNavigator);
