import React, { useCallback, useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { CategoryComponent, FoodCard } from '../../components';
import { FoodItem } from '../../../services/food/types';
import { searchScreenStyles as styles } from '../../styles/searchScreenStyles';
import { useFoodList } from '../../hooks/useFood';

export function SearchScreen() {
  const { data: allFood = [], isLoading } = useFoodList();

  const [searchText, setSearchText] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  const categories = useMemo(() => {
    return Array.from(new Set(allFood.map(item => item.category)));
  }, [allFood]);

  const filteredData = useMemo<FoodItem[]>(() => {
    if (!searchText.trim()) return [];
    const lowerText = searchText.toLowerCase();

    return allFood.filter(
      item =>
        item.title.toLowerCase().includes(lowerText) ||
        item.category.toLowerCase().includes(lowerText),
    );
  }, [searchText, allFood]);

  const handleSearch = (text: string) => {
    setSearchText(text);
    setIsSearch(!!text.trim());
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        setSearchText('');
        setIsSearch(false);
      };
    }, []),
  );

  if (isLoading) {
    return (
      <View style={styles.initialLoading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search food, category..."
          placeholderTextColor="gray"
          style={styles.input}
          value={searchText}
          onChangeText={handleSearch}
          returnKeyType="search"
        />
      </View>

      {!isSearch ? (
        categories.length > 0 ? (
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 10 }}>
              Categories
            </Text>
            <CategoryComponent categories={categories} />
          </View>
        ) : (
          <View style={styles.initialLoading}>
            <Text>No Categories found</Text>
          </View>
        )
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.listContent,
            { paddingBottom: insets.bottom + 80 },
          ]}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <FoodCard
              item={item}
              onPress={() => navigation.navigate('Details', { item })}
            />
          )}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <Text>No results found</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}
