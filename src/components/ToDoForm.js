/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const ToDoForm = () => (
  <View style={styles.formContainer}>
    <TextInput style={styles.todoForm} placeholder="Search..." />
  </View>
);

export default ToDoForm;

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 4,
    boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.38)',
    borderRadius: '30px',
  },
  todoForm: {
    height: '45px',
    borderRadius: '30px',
    fontWeight: 400,
    fontSize: '.8em',
  },
});
