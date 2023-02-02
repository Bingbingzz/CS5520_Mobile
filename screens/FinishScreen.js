import { View, Text, Modal, StyleSheet,Button,Image } from 'react-native'
import { useState } from 'react';
import React from 'react'
import colors from '../colors';
import Card from '../components/Card';
import Lable from '../components/Lable';
import Input from '../components/Input';


export default function FinishScreen({setPhone, setEmail, phone, isConfirmed, setIsLoggedIn}) {
    const img = isConfirmed
    ? {
        uri: `https://picsum.photos/id/${phone[phone.length - 1]}/100/100`,
      }
    : require('../assets/sad.png');
    
    const message = isConfirmed
    ? "Thank you for signing up! Here's a picture based on the last digit of your phone number."
    : "Sorry to see you go.";
    
    const restart=(e)=>{
        setEmail('');
        setPhone('');
        setIsLoggedIn(false);
        console.log("restart");
    }

    return (
        <View style={styles.container}>    
          <Card style={styles.cardContainer}>
            <Text style={styles.text}>{message}</Text>
                <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={img}       
                    />  
                </View>                   
              <Button title="Start again" onPress={restart} />
          </Card>
        </View>
      );
    }

    

const styles = StyleSheet.create({
    container: {
    width: '100%',
    display: 'flex',
    flex:1,
    marginTop: 100,
    alignItems: 'center',
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
    image: {
        width: 100,
        height: 100,
        alignItems: 'center',
        marginVertical:20,
      },
    imageContainer:{
        alignItems: 'center',
    }
  });
  
  
  