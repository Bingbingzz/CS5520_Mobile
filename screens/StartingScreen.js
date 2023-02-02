import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { useState } from 'react';
import React from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import colors from '../colors';
import Lable from '../components/Lable';
import Input from '../components/Input';


export default function StartingScreen({email,phone,setEmail,setPhone,setIsLoggedIn, isLoggedIn}) {
  const [emailText, setEmailText] = useState("");
  const [phoneText, setPhoneText] = useState("");
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onSignIn = (e) => {
    const emailFlag = checkEmail(emailText);
    const numberFlag = checkNumber(phoneText);
    if (numberFlag && emailFlag ){
      setIsLoggedIn(true);
      console.log("logged in")
    }
    
   if (emailFlag) {
      setErrorEmail("");
    }
    else {
      setErrorEmail("enter valid email");
      console.log("email valid");       
    }

    if (numberFlag) {
      setErrorPhone("");
    }
    else {
      setErrorPhone("enter valid phone number");    
    }    
  }

  const onReset=(e)=>{
    setEmailText('');
    setPhoneText('');
    console.log("reset");
  }

  function changeEmail(enteredEmail){
    setEmailText(enteredEmail);
    setEmail(enteredEmail);
  }

  function changePhone(enteredPhoneNumber){
    setPhoneText(enteredPhoneNumber);
    setPhone(enteredPhoneNumber);
  }

  function checkEmail(text) {
    console.log("email: ", text);
    if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(text)) {
      return true;
    }
    return false;
  }

  function checkNumber(text) {
    console.log(text);
    if (/^[0-9]*$/.test(text) && text.length == 10) {
      return true;
    }
    return false;
  }

  return (
    
  <View style={styles.container}>
    <Header appName="Sign up"/>
    <Card style={styles.cardContainer}>
      <Lable>Email address</Lable>
      <Input sendChangedText={changeEmail} text={emailText}/>
      {errorEmail !== '' && <Text style={styles.message}>{errorEmail}</Text>}
      <Lable>Phone number</Lable>
      <Input sendChangedText={changePhone} text={phoneText}/>
      {errorPhone !== '' && <Text style={styles.message}>{errorPhone}</Text>}
      <View style={styles.buttonContainer}>
        <Button title="Reset" color={colors.errorColor} 
          onPress={onReset}
            />
        <Button title="Sign up"  
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
    alignItems:'center',
    justifyContent: 'center',
    padding:10,
    marginLeft: 15,
  },
});


