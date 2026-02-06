import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useNavigation } from '@react-navigation/native';
import { favoritesScreenStyles as styles } from '../../styles/favoritesScreenStyles';
import { FoodCard } from '../../components';

export function FavoritesScreen() {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const navigation = useNavigation<any>();

  if (!favorites.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your favorites list is empty ❤️</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <FoodCard
          item={item}
          onPress={() => navigation.navigate('Details', { item })}
        />
      )}
    />
  );
}
