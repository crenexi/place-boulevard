import React, { useState, useEffect } from 'react';
import mcApiService from 'services/mc-api-service';
import logger from 'services/logger';
import CommissionsView from './CommissionsView';

const Commissions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [commissions, setCommissions] = useState([]);

  useEffect(() => {
    mcApiService.getCommissions()
      .then((data) => {
        setCommissions(data);
        setIsLoading(false);
      })
      .catch(err => logger.error(err));
  }, []);

  return (isLoading
    ? <div>Temp loader...</div>
    : <CommissionsView commissions={commissions} />
  );
};

export default Commissions;
