import { StyleSheet } from 'react-native';

export const foodCardStyles = StyleSheet.create({
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

