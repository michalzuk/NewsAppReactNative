import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SingleArticle from '../../Components/SingleArticle/SingleArticle';
import PageHeader from '../../Components/PageHeader/PageHeader';

class FeedScreen extends Component {
  render() {
    return (
      <ScrollView>
        <PageHeader route={this.props.route.key} />
        {this.props.articles.map((article, index) => {
          console.log(article);
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

export default connect(mapStateToProps)(FeedScreen);
