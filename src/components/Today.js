import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Today = () => (
  // eslint-disable-next-line no-use-before-define
  <View style={styles.container}>
    <Text>Today</Text>
  </View>
);
export default Today;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
