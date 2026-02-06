import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FoodItem } from '../../services/food/types';
import { RootState } from '../../store';
import { toggleFavorites } from '../../store/FavoritesSlice';

type FoodCardProps = {
    item: FoodItem;
    onPress?: () => void;
};

export const FoodCard = ({ item, onPress }: FoodCardProps) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.items);
    const isLiked = favorites.some(i => i.id === item.id);

    const handleFavorites = (e: any) => {
        e.stopPropagation(); // Prevent triggering card onPress
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
                <Text style={styles.cuisine}>{item.cuisine} • {item.category}</Text>
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

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 12,
        margin: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 120,
        backgroundColor: '#f0f0f0',
    },
    favoritesButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 20,
        padding: 6,
    },
    favoritesIcon: {
        fontSize: 16,
    },
    info: {
        padding: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    cuisine: {
        fontSize: 12,
        color: '#666',
        marginBottom: 6,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000',
    },
    vegTag: {
        fontSize: 10,
        color: 'green',
        borderWidth: 1,
        borderColor: 'green',
        paddingHorizontal: 4,
        borderRadius: 4,
    },
    nonVegTag: {
        fontSize: 10,
        color: 'red',
        borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 4,
        borderRadius: 4,
    },
});
