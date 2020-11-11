import PropTypes, { shape, arrayOf } from 'prop-types';

const initiative = shape({
  isComplete: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  faIcon: PropTypes.string,
  thumbUrl: PropTypes.string,
  coverUrl: PropTypes.string,
  snapUrls: arrayOf(PropTypes.string),
});

export default initiative;
