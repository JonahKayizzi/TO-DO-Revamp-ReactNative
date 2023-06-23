/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, View, Text, CheckBox } from 'react-native-web';
import { TouchableOpacity } from 'react-native';

const ToDoContainer = () => (
  <View style={styles.todocontainer}>
    <View style={styles.todo}>
      <CheckBox style={styles.todocheckbox} />
      <View style={styles.todocontent}>
        <Text style={styles.todotext}>10:00 PM</Text>
        <Text style={styles.todotext}>Complete VaHackathon profile</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.todobtn}>
          <FontAwesomeIcon style={styles.editicon} icon={faEdit} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.todobtn}>
          <FontAwesomeIcon style={styles.deleteicon} icon={faTrash} />
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.todo}>
      <CheckBox style={styles.todocheckbox} />
      <View style={styles.todocontent}>
        <Text style={styles.todotext}>12:00 PM</Text>
        <Text style={styles.todotext}>Complete personal portfolio</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.todobtn}>
          <FontAwesomeIcon style={styles.editicon} icon={faEdit} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.todobtn}>
          <FontAwesomeIcon style={styles.deleteicon} icon={faTrash} />
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: '1px',
    borderColor: '#eaeaea',
    paddingBottom: '.3em',
    gap: 5,
  },
  todocontent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 5,
    fontSize: '.6em',
    textWrap: 'wrap',
  },
  todobtn: {
    padding: '.2em',
    borderRadius: '50%',
    width: '15%',
  },
  todocheckbox: {
    width: '5%',
  },
  deleteicon: {
    color: 'orangered',
    fontSize: '.2em',
  },
  editicon: {
    color: 'darkcyan',
    fontSize: '.2em',
  },
});

export default ToDoContainer;
