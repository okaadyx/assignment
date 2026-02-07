import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FoodItem } from '../../services/food/types';
import { RootState } from '../../store';
import { toggleFavorites } from '../../store/FavoritesSlice';
import { foodDetailsScreenStyles as styles } from '../styles/foodDetailsScreenStyles';

export function FoodDetailsScreen({ route }: any) {
  const item: FoodItem = route.params?.item;
  const dispatch = useDispatch();

  const isFavorite = useSelector((state: RootState) =>
    state.favorites.items.some(i => i.id === item?.id),
  );

  const handleFavorites = () => {
    if (item) {
      dispatch(toggleFavorites(item));
    }
  };

  if (!item) {
    return (
      <View style={styles.center}>
        <Text>Invalid food item</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* Fallback or main image */}
      <Image
        source={{ uri: item.mainImage || item.thumbNailImage }}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>
          {item.cuisine} • {item.category}
        </Text>

        <Text style={styles.price}>
          ₹{item.price}{' '}
          <Text
            style={{
              fontSize: 14,
              color: item.isVeg ? 'green' : 'red',
              fontWeight: 'bold',
            }}
          >
            ({item.isVeg ? 'VEG' : 'NON-VEG'})
          </Text>
        </Text>

        <Text style={styles.rating}>
          ⭐ {item.rating} • 🕒 {item.prepTimeMins} mins
        </Text>

        <TouchableOpacity
          style={styles.favoritesButton}
          onPress={handleFavorites}
          activeOpacity={0.8}
        >
          <Text style={styles.favoritesText}>
            {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.metaContainer}>
          <Text style={styles.meta}>Tags: {item.tags.join(', ')}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
