import React,{useEffect,useState} from 'react';
import { Image, StyleSheet, Platform,Text } from 'react-native';
import Constants from 'expo-constants';
export default function HomeScreen() {
  
  const apiUrl =  process.env.API_URL;
  return <Text>Mr Nitheu is Taking over this project by horn throug storm {apiUrl}</Text>;
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
