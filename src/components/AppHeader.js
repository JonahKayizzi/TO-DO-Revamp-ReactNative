/* eslint-disable no-use-before-define */
import React from 'react';
import { View, Text, Image } from 'react-native';

const profilePic = require('../images/PROFFESSION.jpg');

const AppHeader = () => (
  <View>
    <View>
      <Image source={profilePic} />
      <Text>Good evening, Jonathan</Text>
    </View>
    <View>
      <Text>22 JUN, 2023</Text>
      <Text>16:10</Text>
    </View>
  </View>
);

export default AppHeader;
