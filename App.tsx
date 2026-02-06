import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { Navigation } from './src/navigation/StackNavigator';
import { View, Text, StyleSheet } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/QueryClient';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={styles.container}>
            <Text>Loading...</Text>
          </View>
        }
        persistor={persistor}
      >
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
