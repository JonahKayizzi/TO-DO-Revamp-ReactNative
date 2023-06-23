import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Today from './src/components/Today';
import AppHeader from './src/components/AppHeader';
import Footer from './src/components/Footer';

export default function App() {
  return (
    // eslint-disable-next-line no-use-before-define
    <View style={styles.container}>
      <AppHeader />
      <Today />
      <StatusBar />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
