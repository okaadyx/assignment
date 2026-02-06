export interface FoodItem {
  id: number;
  title: string;
  rating: number;
  category: string;
  cuisine: string;
  tags: string[];
  thumbNailImage: string;
  mainImage: string;
  description: string;
  price: number;
  prepTimeMins: number;
  isVeg: boolean;
}

export interface FoodResponse {
  record: {
    data: FoodItem[];
    meta: {
      total: number;
    };
  };
  metadata: {
    id: string;
    private: boolean;
    createdAt: string;
    name: string;
  };
}
