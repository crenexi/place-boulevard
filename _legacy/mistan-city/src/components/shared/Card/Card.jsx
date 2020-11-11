import React from 'react';
import PropTypes, { oneOfType, arrayOf } from 'prop-types';
import './Card.scss';

const Card = ({ children }) => (
  <div styleName="card">
    {children}
  </div>
);

Card.propTypes = {
  children: oneOfType([
    arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Card;
