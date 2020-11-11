import React from 'react';
import PropTypes from 'prop-types';
import './Overline.scss';

const Overline = ({ text }) => (
  <div styleName="overline">{text}</div>
);

Overline.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Overline;
