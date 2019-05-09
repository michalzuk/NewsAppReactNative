import React, { Component } from 'react';
import NavigationService from '../../Services/NavigationService';
import AppNavigator from '../../Navigators/AppNavigator';
import { View } from 'react-native';
import styles from './RootScreenStyle';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { testRequest } from '../../Store/Actions/topHeadlines';

class RootScreen extends Component {
  componentDidMount() {
    this.props.testRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

RootScreen.propTypes = {
  testRequest: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  testRequest: () => dispatch(testRequest()),
});

export default connect(
  null,
  mapDispatchToProps
)(RootScreen);
