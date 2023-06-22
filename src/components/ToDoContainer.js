/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, View, Text, CheckBox, Button } from 'react-native-web';
import { TouchableOpacity } from 'react-native';

const ToDoContainer = () => (
  <View style={styles.todocontainer}>
    <View style={styles.todo}>
      <CheckBox style={styles.todocheckbox} />
      <Text style={styles.todotext}>Complete VaHackathon profile</Text>
      <TouchableOpacity style={styles.todobtn}>
        <FontAwesomeIcon icon={faTrash} />
      </TouchableOpacity>
    </View>
    <View style={styles.todo}>
      <CheckBox style={styles.todocheckbox} />
      <Text style={styles.todotext}>Complete personal portfolio</Text>
      <TouchableOpacity style={styles.todobtn}>
        <FontAwesomeIcon icon={faTrash} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  todocontainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    paddingTop: '1em',
  },
  todo: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: '1px',
    borderColor: '#eaeaea',
  },
  todotext: {},
  todobtn: {
    backgroundColor: '#eaeaea',
    padding: '1em',
    borderRadius: '50%',
  },
  todocheckbox: {},
});

export default ToDoContainer;
