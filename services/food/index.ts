import { AxiosInstance } from 'axios';
import { FoodResponse, FoodItem } from './types';

export class FoodApi {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getFoodList(): Promise<FoodItem[]> {
    const response = await this.client.get<FoodResponse>(
      '/b/698184b543b1c97be96155bf',
    );
    return response.data.record.data;
  }
}
