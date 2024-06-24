import { commonEnv } from './environment.common';

const env: Partial<typeof commonEnv> = {
  production: true,
  apiBaseUrl: 'https://164.92.72.50'
};

export const environment = {
  ...commonEnv,
  ...env
};
