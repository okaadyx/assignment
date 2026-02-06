import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FoodItem } from '../services/food/types';

export type FavoritesFoodItem = FoodItem;

interface FavoritesState {
  items: FavoritesFoodItem[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<FoodItem>) {
      const exists = state.items.find(i => i.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    toggleFavorites(state, action: PayloadAction<FoodItem>) {
      const index = state.items.findIndex(i => i.id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites, toggleFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
