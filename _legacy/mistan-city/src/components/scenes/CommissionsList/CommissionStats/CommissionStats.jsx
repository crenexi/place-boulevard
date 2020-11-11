import React from 'react';
import PropTypes from 'prop-types';
import './CommissionStats.scss';

const CommissionStats = ({ departments, agencies, initiatives }) => {
  const rows = [];

  if (departments) {
    rows.push({
      prefix: 'Oversees',
      value: departments,
      suffix: departments === 1 ? 'Department' : 'Departments',
    });
  }

  if (agencies) {
    rows.push({
      prefix: 'Oversees',
      value: agencies,
      suffix: agencies === 1 ? 'Agency' : 'Agencies',
    });
  }

  if (initiatives) {
    rows.push({
      prefix: 'Directs',
      value: initiatives,
      suffix: initiatives === 1 ? 'Initiative' : 'Initiatives',
    });
  }

  // Commission statistics
  return !rows.length ? null : (
    <div styleName="commission__stat-details">
      {rows.map(({ prefix, value, suffix }) => (
        <div styleName="commission__stat-detail" key={suffix}>
          <span>{prefix}</span>
          <span styleName="commission__stat">{value}</span>
          <span>{suffix}</span>
        </div>
      ))}
    </div>
  );
};

CommissionStats.propTypes = {
  departments: PropTypes.number.isRequired,
  agencies: PropTypes.number.isRequired,
  initiatives: PropTypes.number.isRequired,
};

export default CommissionStats;
