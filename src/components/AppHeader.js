/* eslint-disable no-use-before-define */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const profilePic = require('../images/PROFFESSION.jpg');

const AppHeader = () => (
  <View style={styles.appheader}>
    <View style={styles.profile}>
      <Image source={profilePic} />
      <Text style={styles.greeting}>Good evening, Jonathan</Text>
    </View>
    <View style={styles.datetime}>
      <Text style={styles.date}>22 JUN, 2023</Text>
      <Text style={styles.time}>16:10</Text>
    </View>
  </View>
);

export default AppHeader;
const styles = StyleSheet.create({
  appheader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  profilePic: {
    width: '50px',
    height: '50px',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
  },
});
