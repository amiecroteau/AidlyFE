import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet}

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
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
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
      backgroundColor: '#FFB2AD',
      padding: 25
   },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFB2AD',
      padding: 100
   },
   titleText: {
      color: '#fff',
      marginTop: 10,
      fontSize:30,
     
   }
   
})