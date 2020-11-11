import React from 'react';
import { arrayOf } from 'prop-types';
import commissionType from 'types/commission';
import CommissionsList from '../CommissionsList';
import './CommissionsView.scss';

const CommissionsView = ({ commissions }) => (
  <article>
    <header>
      <h1>Commissions</h1>
    </header>
    <CommissionsList commissions={commissions} />
  </article>
);

CommissionsView.propTypes = {
  commissions: arrayOf(commissionType),
};

CommissionsView.defaultProps = {
  commissions: [],
};

export default CommissionsView;
