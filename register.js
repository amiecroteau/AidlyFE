import React, { Component } from 'react';
import { Modal, TextInput, Text, TouchableHighlight, View, StyleSheet}


from 'react-native'
class ModalExample extends Component {
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (
         
         <View style = {styles.container}>       
                                                                                                          
            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
                  <Text style = {styles.titleText}>Register</Text>  
               
               <View style = {styles.modal}>
                  <Text style = {styles.titleText}>Register</Text>
               
               <TextInput style = {styles.input}
               underlineColorAndroid = "grey"
               label= "First_Name"
               placeholder = "First Name"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
              />

               <TextInput style = {styles.input}
               underlineColorAndroid = "grey"
               label= "Last_Name"
               placeholder = "Last Name"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
              />

               <TextInput style = {styles.input}
               underlineColorAndroid = "grey"
               label= "Zip_Code"
               placeholder = "Zip Code"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               /> 

               <TextInput style = {styles.input}
               underlineColorAndroid = "grey"
               label= "Phone_Number"
               placeholder = "Phone Number"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               />  

 
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
               <View>
                   
  </View> 
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>

                  <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.titleText}>Submit</Text>
            </TouchableHighlight>
               </View>
              
            </Modal>
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.titleText}>Register</Text>
            </TouchableHighlight>
           
         </View>
      )
   }
}
export default ModalExample

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: '#94F1C1',
      padding: 25
   },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#94F1C1',
      padding: 100
   },
   titleText: {
      color: '#fff',
      marginTop: 10,
      fontSize:30,
     
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
  backgroundColor: '#94F1C1',
  padding: 25
},
modal: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#94F1C1',
  padding: 100
},
   
})