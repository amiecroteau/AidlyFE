
import { TouchableHighlight, StyleSheet, Button, Text, View, Modal } from 'react-native';

import React, { Component } from 'react'
import Login from './login'
import Register from './register'

const Home = () => {
   return (
     <View style={styles.containter}>

    <Text style={styles.title}>Aidly</Text>
    <View style={styles.divider}></View>
    <View style={styles.center}>
      <Login/>
      <View style={styles.divider}></View>
      <Register/>
      </View>
      </View>
   )
}
export default Home;


/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aidly</Text>
      <Text>Home Screen Navigator Component goes here</Text>
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADDDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider:{
    padding:40,
  },
  title:{
    fontSize:120,
    fontWeight:'bold',
    padding:40,
    textAlign:'center',
    color: '#94F1C1',
  },
  center:{
    
    alignItems:'stretch',
    justifyContent:'center',
  }
});
