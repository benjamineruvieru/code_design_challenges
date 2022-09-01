import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';

const profilepic = require('../assets/images/profilepic.png');

const LoadedPage = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight + 80,
        paddingHorizontal: 30,
      }}>
      <Image source={profilepic} style={{width: 70, height: 70}} />
      <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
        Yaay I Did it!!!
      </Text>
    </View>
  );
};

export default LoadedPage;

const styles = StyleSheet.create({});
