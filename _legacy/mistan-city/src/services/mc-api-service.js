import defaultSettings from 'config/default-settings';
import logger from 'services/logger';
import axios from 'axios';

const McApiService = () => {
  const { mcApiUrl } = defaultSettings;

  const getCommissions = () => {
    return axios.get(`${mcApiUrl}/commission`)
      .then(({ data }) => data || [])
      .catch(err => logger.error(err));
  };

  return { getCommissions };
};

export default new McApiService();
