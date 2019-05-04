import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BottomNavigation } from 'react-native-paper';
import FeedScreen from '../FeedScreen';
import SearchScreen from '../SearchScreen/SearchScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';
import { Colors } from '../../Theme/index';
import styles from './HomeScreenStyle';
import i18n from '../../Locales/i18n';

class HomeScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'feed', title: i18n.t('navigation.feed'), icon: 'album', color: Colors.primary },
      { key: 'search', title: i18n.t('navigation.search'), icon: 'album', color: Colors.success },
      { key: 'settings', title: i18n.t('navigation.settings'), icon: 'album', color: Colors.text },
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

HomeScreen.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
