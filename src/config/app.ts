import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../.env` });

export default {
  host: '0.0.0.0',
  port: 8080,
};
