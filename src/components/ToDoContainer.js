/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, View, Text, CheckBox } from 'react-native-web';
import { TouchableOpacity } from 'react-native';

const ToDoContainer = () => (
  <View style={styles.todocontainer}>
    <View style={styles.todo}>
      <CheckBox style={styles.todocheckbox} />
      <Text style={styles.todotext}>Complete VaHackathon profile</Text>
      <TouchableOpacity style={styles.todobtn}>
        <FontAwesomeIcon style={styles.deleteicon} icon={faTrash} />
      </TouchableOpacity>
    </View>
    <View style={styles.todo}>
      <CheckBox style={styles.todocheckbox} />
      <Text style={styles.todotext}>Complete personal portfolio</Text>
      <TouchableOpacity style={styles.todobtn}>
        <FontAwesomeIcon style={styles.deleteicon} icon={faTrash} />
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
    width: '100%',
  },
  todo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: '1px',
    borderColor: '#eaeaea',
    paddingBottom: '.3em',
    gap: 10,
  },
  todotext: {
    fontSize: '.8em',
    textWrap: 'wrap',
  },
  todobtn: {
    backgroundColor: '#eaeaea',
    padding: '.5em',
    borderRadius: '50%',
    width: '15%',
  },
  todocheckbox: {
    width: '7%',
  },
  deleteicon: {
    color: 'orangered',
  },
});

export default ToDoContainer;
