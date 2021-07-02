import * as express from 'express';
import { Error, connect } from 'mongoose';
import { json } from 'body-parser';

import settings from './config';

import weatherRouter from './api/weather';

const app = express();

app.use(json());

app.use('/weather', weatherRouter);

connect(
  settings.dbSettings,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err: Error) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('DB connected');
    }
  },
);

app.listen(settings.appSettings.port, () => {
  console.log(
    `App is running now on ${settings.appSettings.host}:%d`,
    settings.appSettings.port,
  );
});
