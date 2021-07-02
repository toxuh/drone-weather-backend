import * as express from 'express';

import * as controller from '../controllers/weather';

const weatherRouter = express.Router();

weatherRouter.get('', controller.getAllCurrentWeather);

export default weatherRouter;
