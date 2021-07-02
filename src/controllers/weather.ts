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
        appid: '8917583788877352d35cec38d1cf6388',
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
