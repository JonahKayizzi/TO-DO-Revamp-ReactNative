/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React from 'react';
import {
  StyleSheet, TextInput, View, TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ToDoForm = () => (
  <View style={styles.formContainer}>
    <TextInput style={styles.todoForm} placeholder="Add a task..." />
    <TouchableOpacity style={styles.todoBtn}>
      <FontAwesomeIcon style={styles.addicon} icon={faPlus} />
    </TouchableOpacity>
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
    paddingLeft: '10px',
    paddingRight: '5px',
    fontSize: '.8em',
  },
  todoBtn: {
    fontWeight: 'bold',
    borderRadius: '50%',
    backgroundColor: 'darkcyan',
    padding: '0.2em',
    width: '12%',
  },
  addicon: {
    color: '#fff',
  },
});
