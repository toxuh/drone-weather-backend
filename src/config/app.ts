import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../.env` });

export default {
  host: 'http://localhost',
  port: 3001,
};
