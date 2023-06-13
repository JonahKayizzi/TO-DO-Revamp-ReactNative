import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Completed = () => (
  // eslint-disable-next-line no-use-before-define
  <View style={styles.container}>
    <Text>Completed</Text>
  </View>
);
export default Completed;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
