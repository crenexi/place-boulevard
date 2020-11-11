import React from 'react';
import PropTypes from 'prop-types';
import Overline from 'components/shared/Overline';
import './CardTitle.scss';

const CardTitle = ({ text, overline }) => (
  <div styleName="wrapper">
    {overline && <Overline text={overline} />}
    <h4 styleName="title">{text}</h4>
  </div>
);

CardTitle.propTypes = {
  text: PropTypes.string.isRequired,
  overline: PropTypes.string,
};

CardTitle.defaultProps = {
  overline: '',
};

export default CardTitle;
