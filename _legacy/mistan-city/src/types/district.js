import PropTypes, { shape } from 'prop-types';

const district = shape({
  name: PropTypes.string.isRequired,
  faIcon: PropTypes.string.isRequired,
});

export default district;
