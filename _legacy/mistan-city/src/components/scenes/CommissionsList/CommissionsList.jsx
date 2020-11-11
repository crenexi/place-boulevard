import React, { Fragment } from 'react';
import { arrayOf } from 'prop-types';
import commissionType from 'types/commission';
import Tag from 'components/shared/Tag';
import CommissionStats from './CommissionStats';
import './CommissionsList.scss';

const CommissionsList = ({ commissions }) => {
  const sections = commissions.map((commission) => {
    const { id, name, coverUrl, oversees, initiatives } = commission;

    // Helper to count departments and agencies
    const countByEntityType = (entities, type) => {
      if (!oversees) return 0;

      return entities.reduce((count, { entityType }) => {
        return entityType === type ? count + 1 : count;
      }, 0);
    };

    // Calculate statistics
    const stats = {
      departments: countByEntityType(oversees, 'department'),
      agencies: countByEntityType(oversees, 'agency'),
      initiatives: !initiatives ? 0 : initiatives.length,
    };

    // Calculate projects
    const projectOwners = [...(oversees || []), ...(initiatives || [])];
    const projectCount = projectOwners.reduce((count, { projects }) => {
      return projects ? projects.length + count : count;
    }, 0);

    return (
      <section
        styleName="commission"
        key={id}
        style={{ backgroundImage: `url('${coverUrl}')` }}
      >
        <header styleName="commission__header">
          <h2 styleName="commission__title">{name}</h2>
          <p styleName="commission__suffix">commission</p>
        </header>
        <div styleName="commission__main">
          <CommissionStats
            departments={stats.departments}
            agencies={stats.agencies}
            initiatives={stats.initiatives}
          />
          <div styleName="commission__projects-count">
            <Tag text={`${projectCount} total projects`} />
          </div>
        </div>
      </section>
    );
  });

  return (
    <Fragment>
      {sections}
    </Fragment>
  );
};

CommissionsList.propTypes = {
  commissions: arrayOf(commissionType),
};

CommissionsList.defaultProps = {
  commissions: null,
};

export default CommissionsList;
