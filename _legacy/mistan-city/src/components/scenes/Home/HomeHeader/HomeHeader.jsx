import React from 'react';
import FaIcon from 'components/shared/FaIcon';
import useSettings from 'hooks/use-settings';
import './HomeHeader.scss';

const HomeHeader = () => {
  const { s3PublicPath } = useSettings();

  // Background cover
  const coverUrl = `${s3PublicPath}/images/covers/new-downtown-rises.jpg`;
  const coverStyle = { backgroundImage: `url(${coverUrl})` };

  // Title content
  const title = 'Mistan City';
  const subtitle = `Planning a California metropolis in Cities:Skylines`;

  return (
    <div styleName="header">
      <div styleName="header__cover" style={coverStyle} />
      <div styleName="header__main">
        <div styleName="header__icon">
          <FaIcon icon="city" />
        </div>
        <h1 styleName="header__title">{title}</h1>
        <p styleName="header__subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default HomeHeader;
