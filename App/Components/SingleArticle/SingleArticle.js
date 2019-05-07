import React from 'react';
import { Linking } from 'react-native';
import { Card } from 'react-native-paper';
import { StyledCard, StyledCardContent, DetailsText, StyledTitle, StyledDescription } from './SingleArticleStyle';
import PropTypes from 'prop-types';
import moment from 'moment';
import i18n from '../../Locales/i18n';

const SingleArticle = props => {
  const { title, description, urlToImage, urlToArticle, source, date } = props;
  return (
    <StyledCard onPress={() => Linking.openURL(urlToArticle)}>
      <StyledCardContent>
        <StyledTitle>{title}</StyledTitle>
        <DetailsText>
          {source},{' '}
          {moment(date)
            .locale(i18n.locale)
            .fromNow()}
        </DetailsText>
      </StyledCardContent>
      {urlToImage && <Card.Cover source={{ uri: urlToImage }} />}
      {description && <StyledDescription>{description}</StyledDescription>}
    </StyledCard>
  );
};

SingleArticle.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  urlToArticle: PropTypes.string.isRequired,
  urlToImage: PropTypes.string,
};

export default SingleArticle;
