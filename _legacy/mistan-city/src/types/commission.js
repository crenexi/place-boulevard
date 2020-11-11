import PropTypes, { shape, arrayOf, oneOfType } from 'prop-types';
import initiative from './initiative';
import department from './department';
import agency from './agency';

const commission = shape({
  name: PropTypes.string.isRequired,
  thumbUrl: PropTypes.string,
  coverUrl: PropTypes.string,
  initiatives: arrayOf(initiative),
  oversees: arrayOf(oneOfType([department, agency])),
});

export default commission;
