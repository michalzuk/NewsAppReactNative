import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SingleArticle from '../../Components/SingleArticle/SingleArticle';
import PageHeader from '../../Components/PageHeader/PageHeader';
import { testRequest } from '../../Store/Actions/topHeadlines';

class FeedScreen extends Component {
  state = {
    refreshing: false,
  };

  handleRefresh = () => {
    this.props.fetchTopHeadlines();
  };

  render() {
    return (
      <ScrollView
        refreshControl={<RefreshControl refreshing={this.props.topHeadlines.loading} onRefresh={this.handleRefresh} />}
      >
        <PageHeader route={this.props.route.key} />
        {this.props.articles.map((article, index) => {
          return (
            <SingleArticle
              key={index}
              title={article.title}
              description={article.description}
              urlToImage={article.urlToImage}
              urlToArticle={article.url}
              source={article.source.name}
              date={article.publishedAt}
            />
          );
        })}
      </ScrollView>
    );
  }
}

FeedScreen.propTypes = {
  fetchTopHeadlines: PropTypes.func,
  topHeadlines: PropTypes.object,
  articles: PropTypes.array,
  route: PropTypes.shape({
    key: PropTypes.string,
  }),
  source: PropTypes.shape({
    name: PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  topHeadlines: state.topHeadlines,
  articles: state.topHeadlines.data.articles,
});

const mapDispatchToProps = dispatch => ({
  fetchTopHeadlines: () => dispatch(testRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedScreen);
