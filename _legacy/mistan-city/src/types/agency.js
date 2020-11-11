import PropTypes, { shape, arrayOf } from 'prop-types';
import project from './project';

const agency = shape({
  name: PropTypes.string.isRequired,
  thumbUrl: PropTypes.string,
  coverUrl: PropTypes.string,
  projects: arrayOf(project),
});

export default agency;
