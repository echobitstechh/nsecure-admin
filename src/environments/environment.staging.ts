import { commonEnv } from './environment.common';

const env: Partial<typeof commonEnv> = {
  staging: true,
  apiBaseUrl: 'http://104.248.3.252/'
};

export const environment = {
  ...commonEnv,
  ...env
};
