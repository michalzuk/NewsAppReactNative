import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from 'App/Containers/HomeScreen/HomeScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: HomeScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(StackNavigator);
