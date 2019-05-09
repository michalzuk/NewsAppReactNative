import React from 'react';
import { View } from 'react-native';
import styles from './SplashScreenStyle';
import PropTypes from 'prop-types';
import NavigationService from '../../Services/NavigationService';
import * as Animatable from 'react-native-animatable';

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => NavigationService.navigateAndReset('HomeScreen'), 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animatable.Image animation={'zoomIn'} style={styles.logo} source={require('../../Images/logo-white.png')} />
      </View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default SplashScreen;
