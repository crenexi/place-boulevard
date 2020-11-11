import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';

const Tag = ({ text, tooltip }) => {
  const [isHovering, setIsHovering] = useState(false);
  const styleName = !tooltip ? 'tag' : 'tag tag--has-tooltip';

  return (
    <div
      styleName={styleName}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div styleName="tag__content">{text}</div>
      {tooltip && isHovering && (
        <div styleName="tag__tooltip">{tooltip}</div>
      )}
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
};

Tag.defaultProps = {
  tooltip: '',
};

export default Tag;
