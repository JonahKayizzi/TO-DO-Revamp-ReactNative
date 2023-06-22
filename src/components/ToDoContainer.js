/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, View, Text, CheckBox, Button } from 'react-native-web';

const ToDoContainer = () => (
  <View style={styles.todocontainer}>
    <View style={styles.todo}>
      <CheckBox style={styles.todocheckbox} />
      <Text style={styles.todotext}>Complete VaHackathon profile</Text>
      <Button style={styles.todobtn}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </View>
    <View style={styles.todo}>
      <CheckBox />
      <Text>Complete personal portfolio</Text>
      <Button>Delete </Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  todocontainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  todo: {
    display: 'flex',
    flexDirection: 'row',
  },
  todotext: {},
  todobtn: {},
  todocheckbox: {},
});

export default ToDoContainer;
