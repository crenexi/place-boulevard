import React, { Fragment } from 'react';
import PropTypes, { shape } from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import './AppHeader.scss';

const AppHeader = ({ location }) => {
  const isHome = location.pathname === '/';
  const styleName = !isHome ? 'header' : 'header header--hidden';

  const nav = [
    { to: '/commissions', title: 'Commissions' },
    { to: '/design', title: 'Design' },
  ];

  return (
    <Fragment>
      <header styleName={styleName}>
        {nav.map(({ to, title }) => (
          <Link
            styleName="header__nav-item"
            key={title}
            to={to}
          >
            {title}
          </Link>
        ))}
      </header>
      { !isHome && <div styleName="header-spacer" />}
    </Fragment>
  );
};

AppHeader.propTypes = {
  location: shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(props => <AppHeader {...props} />);
