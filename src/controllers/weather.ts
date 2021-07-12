import { Request, Response } from 'express';
import axios from 'axios';

/* eslint-disable-next-line */
export const getAllCurrentWeather = async (
  req: Request,
  res: Response,
): Promise<void> => {
  axios
    .get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: '51',
        lon: '47',
        appid: process.env.OWM_APP_ID,
        units: 'metric',
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((e) => {
      res.send({ e });
    });
};
