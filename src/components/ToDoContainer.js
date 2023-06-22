/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, View, Text, CheckBox, Button } from 'react-native-web';

const ToDoContainer = () => (
  <View style={styles.todocontainer}>
    <View style={styles.todo}>
      <CheckBox />
      <Text>Complete VaHackathon profile</Text>
      <Button>Delete </Button>
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
  },
  todo: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default ToDoContainer;
