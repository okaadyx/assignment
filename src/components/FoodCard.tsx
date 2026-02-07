import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FoodItem } from '../../services/food/types';
import { RootState } from '../../store';
import { toggleFavorites } from '../../store/FavoritesSlice';
import { foodCardStyles as styles } from '../styles/foodCardStyles';

type FoodCardProps = {
  item: FoodItem;
  onPress?: () => void;
};

export const FoodCard = ({ item, onPress }: FoodCardProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isLiked = favorites.some(i => i.id === item.id);

  const handleFavorites = (e: any) => {
    e.stopPropagation();
    dispatch(toggleFavorites(item));
  };

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Image
        source={{ uri: item.thumbNailImage }}
        style={styles.image}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={styles.favoritesButton}
        onPress={handleFavorites}
      >
        <Text style={styles.favoritesIcon}>{isLiked ? '❤️' : '🤍'}</Text>
      </TouchableOpacity>

      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.cuisine}>
          {item.cuisine} • {item.category}
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>₹{item.price}</Text>
          {item.isVeg ? (
            <Text style={styles.vegTag}>Veg</Text>
          ) : (
            <Text style={styles.nonVegTag}>Non-Veg</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
