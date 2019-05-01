import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ExampleActions from 'App/Stores/Example/Actions';
import { liveInEurope } from 'App/Stores/Example/Selectors';

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <View>
        <Text>Main</Text>
      </View>
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
