/* eslint-disable no-use-before-define */
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faPlus,
  faHome,
  faCalendar,
  faBell,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.homeBtn}>
      <FontAwesomeIcon style={styles.footericonactive} icon={faHome} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.homeBtn}>
      <FontAwesomeIcon style={styles.footericon} icon={faCalendar} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.todoBtn}>
      <FontAwesomeIcon style={styles.addicon} icon={faPlus} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.homeBtn}>
      <FontAwesomeIcon style={styles.footericon} icon={faBell} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.homeBtn}>
      <FontAwesomeIcon style={styles.footericon} icon={faCalendarCheck} />
    </TouchableOpacity>
  </View>
);

export default Footer;

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  homeBtn: {
    fontWeight: 'bold',
    borderRadius: '50%',
    fontSize: '1.5em',
    padding: '1em',
  },
  footericonactive: {
    color: '#000',
  },
  footericon: {
    color: '#a9a9a9',
  },
});
