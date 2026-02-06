import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { api } from '../../services';
import { FoodItem } from '../../services/food/types';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FoodCard } from '../components';
import { categoryScreenStyles as styles } from '../styles/categoryScreenStyles';

export function CategoryScreen({ route }: any) {
  const categoryName: string | undefined = route.params?.category;
  const [products, setProducts] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);

  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  const loadProducts = async () => {
    if (!categoryName) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      // Since API doesn't support category filter, we fetch all and filter locally
      const allFood = await api.food.getFoodList();
      const filtered = allFood.filter(
        item => item.category.toLowerCase() === categoryName.toLowerCase(),
      );
      setProducts(filtered);
    } catch (error: any) {
      console.log('Error fetching category items:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [categoryName]);

  if (!categoryName) {
    return (
      <View style={styles.loading}>
        <Text>Category not found</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!products.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No items found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
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
      />
    </View>
  );
}
