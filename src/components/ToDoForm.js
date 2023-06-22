/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ToDoForm = () => (
  <View style={styles.formContainer}>
    <TextInput style={styles.todoForm} placeholder="Add a task..." />
    <Button style={styles.todoBtn} title={<FontAwesomeIcon icon={faPlus} />} />
  </View>
);

export default ToDoForm;

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
    paddingLeft: '10px',
    paddingRight: '5px',
    fontSize: 16,
    width: '85%',
  },
  todoBtn: {
    fontWeight: 'bold',
    marginRight: 10,
    borderRadius: '15px',
    height: '10px',
  },
});
