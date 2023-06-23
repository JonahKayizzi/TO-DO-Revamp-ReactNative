/* eslint-disable no-use-before-define */
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.todoBtn}>
      <FontAwesomeIcon style={styles.addicon} icon={faPlus} />
    </TouchableOpacity>
  </View>
);

export default Footer;

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#eaeaea',
    position: 'fixed',
    bottom: 0,
    height: '3em',
    borderRadius: '30px',
  },
  todoBtn: {
    fontWeight: 'bold',
    borderRadius: '50%',
    backgroundColor: 'darkcyan',
    padding: '1em',
    marginBottom: '2em',
  },
  addicon: {
    color: '#fff',
  },
});
