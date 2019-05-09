import React, { Component } from 'react';
import { View } from 'react-native';
import PageHeader from '../../Components/PageHeader/PageHeader';
import PropTypes from 'prop-types';

class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <PageHeader route={this.props.route.key} />
      </View>
    );
  }
}

SettingsScreen.propTypes = {
  route: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }),
};

export default SettingsScreen;
