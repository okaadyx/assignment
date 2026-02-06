import axios, { AxiosInstance } from 'axios';

import { FoodApi } from './food';

class Api {
  axiosClient: AxiosInstance;
  food: FoodApi;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'https://api.jsonbin.io/v3',
    });
    this.food = new FoodApi(this.axiosClient);
  }
}

export const api = new Api();
