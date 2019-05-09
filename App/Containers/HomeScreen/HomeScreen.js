import React, { Component } from 'react';
import { View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import FeedScreen from '../FeedScreen/FeedScreen';
import SearchScreen from '../SearchScreen/SearchScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';
import { Colors } from '../../Theme';
import styles from './HomeScreenStyle';
import i18n from '../../Locales/i18n';
import CategoryScreen from '../CategoryScreen/CategoryScreen';

class HomeScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'feed', title: i18n.t('navigation.feed'), icon: 'whatshot' },
      { key: 'newsByCategory', title: i18n.t('navigation.newsByCategory'), icon: 'view-list' },
      { key: 'search', title: i18n.t('navigation.search'), icon: 'search' },
      { key: 'settings', title: i18n.t('navigation.settings'), icon: 'settings' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    feed: FeedScreen,
    newsByCategory: CategoryScreen,
    search: SearchScreen,
    settings: SettingsScreen,
  });
  render() {
    return (
      <View style={styles.container}>
        <BottomNavigation
          labeled={false}
          barStyle={styles.barStyle}
          activeColor={Colors.red}
          inactiveColor={Colors.grey}
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </View>
    );
  }
}

export default HomeScreen;
