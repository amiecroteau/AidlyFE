import React, { Component } from 'react';
import {Card, Modal, Text, TextInput, TouchableHighlight, View, StyleSheet} from 'react-native'
import {globalStyles} from './styles/global';
import {t} from 'tcomb-form-native';

const Form = t.form.Form;
const User = t.struct({
   email: t.String,
   username: t.String,
   password: t.String,
   terms: t.Boolean
 });

class Login extends Component {
  
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
                  <Text style = {globalStyles.titleText}>Login</Text>
                  <View style={styles.container}>
        <Form type={User} /> {/* Notice the addition of the Form component */}
      </View>
                 
                  <TextInput style = {styles.input}
               underlineColorAndroid = "grey"
               label= "Email"
               placeholder = "Enter Email"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

         <TextInput style = {styles.input}
               underlineColorAndroid = "grey"
               placeholder = "Password"
               placeholderTextColor = "grey"
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
      padding:10,
      marginTop:20,
      color:'grey',
      fontSize:20,
      borderColor:'grey',
      borderBottomColor:'grey',
      backgroundColor:'#fff',
      borderWidth:2,
      flex:1,
      justifyContent:'flex-start',
      maxHeight:100,
   },
   titleText: {
      color: '#fff',
      marginTop: 10,
      fontSize:30,
     
   },
paragraph: {
  marginVertical: 8,
  lineHeight: 20,
},
button:{
  width:50,
  marginTop:30,
  padding:30
},
container: {
  alignItems: 'center',
  backgroundColor: '#FFB2AD',
  padding: 25
},
modal: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#FFB2AD',
  padding: 100
},
})