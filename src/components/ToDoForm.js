/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ToDoForm = () => (
  <View style={styles.container}>
    <Text style={styles.title}>todos</Text>
  </View>
);

export default ToDoForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
