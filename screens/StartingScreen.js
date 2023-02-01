import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { useState } from 'react';
import React from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import colors from '../colors';
import Lable from '../components/Lable';
import Input from '../components/Input';



export default function StartingScreen(sendChangedText,text) {
  const [enteredText, setEnteredText] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  function onTextEntered(changedText){
    setEnteredText(changedText); 
  }
  function onEmailEntered(chagedEmail){
    setEnteredEmail(chagedEmail);
  }

  return (   
    <View style={styles.container}>
      <Header appName="Sign up"/>
      <Card style={styles.cardContainer}>
        <Lable>Email address</Lable>
        <Input sendChangedEmail = {onEmailEntered}/>
        <Lable>Phone number</Lable>
        <Input sendChangedText = {onTextEntered}/>
        <View style={styles.buttonContainer}>
          <Button title="Reset"
              
              />
          <Button title="Sign in"
              onPress={() => {
                // check if it is valid input
                // if valid save the data and return to the confirm screen
                sendChangeText(text);
                se

              }}/>
        </View>
      </Card>
    </View>
      
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

  input:{
    fontSize: 20,
    color: colors.primary,
    alignItems: 'center',
  },


  message:{
    color: colors.errorColor,
  },
});


