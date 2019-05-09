import React from 'react';
import PropTypes from 'prop-types';
import i18n from '../../Locales/i18n';
import { StyledTitle } from './PageHeaderStyle';

const PageHeader = props => {
  switch (props.route) {
    case 'feed':
      return <StyledTitle>{i18n.t('navigation.feed')}</StyledTitle>;
    case 'newsByCategory':
      return <StyledTitle>{i18n.t('navigation.newsByCategory')}</StyledTitle>;
    case 'search':
      return <StyledTitle>{i18n.t('navigation.search')}</StyledTitle>;
    case 'settings':
      return <StyledTitle>{i18n.t('navigation.settings')}</StyledTitle>;
  }
};

PageHeader.propTypes = {
  route: PropTypes.string.isRequired,
};

export default PageHeader;
