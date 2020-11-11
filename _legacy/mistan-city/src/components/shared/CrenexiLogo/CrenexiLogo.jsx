import React from 'react';
import PropTypes, { oneOf } from 'prop-types';
import useSettings from 'hooks/use-settings';
import './CrenexiLogo.scss';

const CrenexiLogo = ({ className, variant, ext }) => {
  const { s3PublicPath, crenexiUrl } = useSettings();
  const logoUrl = `${s3PublicPath}/brand/crenexi/logo_${variant}.${ext}`;

  return (
    <a
      styleName="logo"
      className={className}
      href={crenexiUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img style={{ maxWidth: '100%' }} src={logoUrl} alt="Crenexi Logo" />
    </a>
  );
};

CrenexiLogo.propTypes = {
  className: PropTypes.string,
  variant: oneOf(['main', 'white', 'dark']),
  ext: oneOf(['svg', 'png']),
};

CrenexiLogo.defaultProps = {
  className: '',
  variant: 'main',
  ext: 'svg',
};

export default CrenexiLogo;
