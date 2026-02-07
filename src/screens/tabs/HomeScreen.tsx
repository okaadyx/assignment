import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useFoodList } from '../../hooks/useFood';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FoodCard } from '../../components';
import { homeScreenStyles as styles } from '../../styles/homeScreenStyles';
import { queryClient } from '../../../lib/QueryClient';
import useInternetStatus from '../../components/useInternetStatus';

export function HomeScreen() {
  const { data: foodItems = [], isLoading, isFetching } = useFoodList();

  const isOnline = useInternetStatus();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  if (isLoading && !foodItems.length) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!isOnline && (
        <View style={styles.offlineBanner}>
          <Text style={styles.offlineText}>You’re offline</Text>
        </View>
      )}
      <FlatList
        data={foodItems}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        refreshing={isFetching}
        onRefresh={() => {
          queryClient.invalidateQueries({ queryKey: ['food'] });
        }}
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
          !isLoading ? (
            <View style={styles.emptyContainer}>
              <Text>No items found</Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}
