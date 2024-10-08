import React,{useEffect,useState} from 'react';
import { Image, StyleSheet, Platform,Text,SafeAreaView,Button,View } from 'react-native';
import  useCounterStore from '../../src/stores/count/countStore'; 

import Constants from 'expo-constants';
export default function HomeScreen() {
  const { count, increment, decrement, reset } = useCounterStore();
  const apiUrl =  process.env.API_URL;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>

      <View style={styles.buttons}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
        <Button title="Reset" onPress={reset} />
      </View>
    </SafeAreaView>
  )
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
