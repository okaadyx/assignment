import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContent: {
    paddingHorizontal: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  footerLoader: {
    marginVertical: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offlineBanner: {
    backgroundColor: '#E53935',
    padding: 8,
    // marginBottom: 2,
    width: '100%',
    alignItems: 'center',
  },
  offlineText: {
    color: '#e4e4e4',
    fontWeight: '600',
  },
});
