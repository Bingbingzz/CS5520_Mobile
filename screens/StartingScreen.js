import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { useState } from 'react';
import React from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import colors from '../colors';
import Lable from '../components/Lable';
import Input from '../components/Input';
import PhoneInput from '../components/PhoneInput';
import EmailInput from '../components/EmailInput';



export default function StartingScreen(sendEmail) {
  // const [enteredText, setEnteredText] = useState("");
  const [email, setEmail] = useState("");

  const onSignIn = (e) => {
    const emailFlag = checkEmail(email);
    // const numberFlag = checkNumber(numberText);

    if (emailFlag ) {
      // setScreen("confirm");
      console.log(true)
    }
    else {
      console.log(false)
      // emailFlag? setShowEmailPrompt(false) : setShowEmailPrompt(true);
      // numberFlag? setShowPhonePrompt(false) : setShowPhonePrompt(true);
    }
  }

  function checkEmail(text) {
    console.log(text);
    if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(text)) {
      return true;
    }
    return false;
  }

  function checkNumber(text) {
    if (/^[0-9]*$/.test(text) && text.length == 10) {
      return true;
    }
  }



  return (   
    <View style={styles.container}>
      <Header appName="Sign up"/>
      <Card style={styles.cardContainer}>
        <Lable>Email address</Lable>
        <EmailInput 
        value={email} onChangeText={(text) => {
          sendEmail(text); setEmail(text);}}
        />
        {/* <Lable>Phone number</Lable>
        <PhoneInput /> */}
        <View style={styles.buttonContainer}>
          <Button title="Reset"
              
              />
          <Button title="Sign in"  
                // check if it is valid input
                // if valid save the data and return to the confirm screen
                onPress={onSignIn}
              />
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


