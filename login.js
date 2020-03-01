import React, { Component } from 'react';
import {Card, Modal, Text, TextInput, TouchableHighlight, View, StyleSheet}

from 'react-native'
class Login extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render(props) {
      return (
         <View style = {styles.container}>                                                                                                          
            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.titleText}>Login</Text>
                  <TextInput style = {styles.input}
               underlineColorAndroid = "#fff"
               placeholder = "Email"
               placeholderTextColor = "#fff"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

         <TextInput style = {styles.input}
               underlineColorAndroid = "#fff"
               placeholder = "Password"
               placeholderTextColor = "#fff"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.titleText}>Login</Text>
            </TouchableHighlight>
         </View>
      )
   }
}
export default Login

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: '#FFB2AD',
      padding: 25
   },
   modal: {
      flex: 1,
      alignItems: 'flex-start',
      backgroundColor: '#FFB2AD',
      padding: 100
   },
   titleText: {
      color: '#fff',
      marginTop: 10,
      fontSize:70,
     
   },
   input:{
      padding:5,
      fontSize:20,
      borderColor:'#fff',
      flex:1,
      justifyContent:'flex-start',
    
   }
})