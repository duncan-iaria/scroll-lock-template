const DEV_API_URL = 'http://localhost:7071/api';
const PROD_API_URL = 'https://dandrhi-prod.azurewebsites.net/api';

export const getBaseUrl = () => {
  return process.env.REACT_APP_ENV === 'development' ? DEV_API_URL : PROD_API_URL;
};
