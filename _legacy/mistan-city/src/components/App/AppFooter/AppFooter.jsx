import React from 'react';
import CrenexiLogo from 'components/shared/CrenexiLogo';
import './AppFooter.scss';

const AppFooter = () => (
  <footer styleName="footer">
    <div styleName="footer__brand">
      <CrenexiLogo styleName="footer__logo" variant="white" />
    </div>
  </footer>
);

export default AppFooter;
