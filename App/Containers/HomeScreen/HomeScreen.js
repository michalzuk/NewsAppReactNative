import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ExampleActions from 'App/Stores/Example/Actions';
import { liveInEurope } from 'App/Stores/Example/Selectors';
import { BottomNavigation } from 'react-native-paper';
import FeedScreen from '../FeedScreen';
import SearchScreen from '../SearchScreen/SearchScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';
import { Colors } from '../../Theme/index';
import styles from './HomeScreenStyle';

class HomeScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'feed', title: 'Feed', icon: 'album', color: Colors.primary },
      { key: 'search', title: 'Search', icon: 'album', color: Colors.success },
      { key: 'settings', title: 'Settings', icon: 'album', color: Colors.text },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    feed: FeedScreen,
    search: SearchScreen,
    settings: SettingsScreen,
  });
  render() {
    return (
      <BottomNavigation
        shifting
        barStyle={styles.barStyle}
        style={styles.barStyle}
        activeColor={Colors.white}
        inactiveColor={Colors.grey}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

HomeScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
};

const mapStateToProps = state => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
