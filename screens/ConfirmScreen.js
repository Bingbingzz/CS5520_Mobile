import { View, Text, Modal, StyleSheet,Button } from 'react-native'
import { useState } from 'react';
import React from 'react'
import colors from '../colors';
import Card from '../components/Card';
import Lable from '../components/Lable';
import Input from '../components/Input';

export default function ConfirmScreen({email, phone,setEmail,setPhone,setIsLoggedIn}) {
  const [modalVisible, setModalVisible] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isFinishedLater, setIsFinishedLater] = useState(false);
  
  const GoBack = () => {
    setModalVisible(false);
    setEmail(email);
    setPhone(phone);
    setIsLoggedIn(false);
  }

  const Confirm = () => {
    setModalVisible(false);
    setIsConfirmed(true);
    setIsLoggedIn(true);
  }
  
  return (
    <Modal 
    visible={modalVisible} 
    >
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
        <Text style={styles.text}>You have entered:</Text>
          <Text style={styles.text}>Email: {email}</Text>
          <Text style={styles.text}>Phone: {phone}</Text>
          <Text style={styles.text}>Please confirm they are correct</Text>
          <Button title="Go back" color={colors.errorColor} onPress={GoBack}/>
          <Button title="Confirm"  onPress={Confirm}/>
          <Button title="Finish Later" />
        </Card>
        </View>
    </Modal>  
    
  )
}

const styles = StyleSheet.create({
    container: {
    width: '100%',
    display: 'flex',
    flex:1,
    marginTop: 100,
    alignItems: 'center',
    // justifyContent: 'center',
    },
 
    cardContainer:{
      width: '80%',
    },
  
    buttonContainer:{
      padding:20,
      justifyContent: 'space-between',
      width: '100%',
      flexDirection: 'row',
    },
  
    text:{
      fontSize: 20,
      color: colors.primary,
      alignItems: 'center',
    },
  });
  
  
  