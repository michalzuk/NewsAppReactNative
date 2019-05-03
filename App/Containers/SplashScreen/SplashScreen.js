import React from 'react';
import { Text, View } from 'react-native';
import styles from './SplashScreenStyle';

export default class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('HomeScreen'), 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Splash Screen</Text>
      </View>
    );
  }
}
