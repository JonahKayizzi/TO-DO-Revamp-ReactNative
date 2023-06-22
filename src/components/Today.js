/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoContainer from './ToDoContainer';

const Today = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>todos</Text>
    <ToDoForm />
    <ToDoContainer />
  </SafeAreaView>
);
export default Today;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 600,
    marginBottom: 16,
    lineHeight: 48,
    color: 'rgb(236, 236, 236)',
    textAlign: 'center',
  },
});
