import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../.env` });

const dbSettings = {
  collection: 'test',
  user: 'testuser',
  password: 'lD5g9LA4IExWEh1o',
};

export default `mongodb+srv://${dbSettings.user}:${dbSettings.password}@ts.iakxc.mongodb.net/${dbSettings.collection}?retryWrites=true&w=majority`;
