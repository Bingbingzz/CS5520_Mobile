import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useState } from "react";
import colors from '../colors';

export default function PhoneInput({value, onChangeText }) {
    function onChangeText(){
        setText();

    }
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={value}
          onChangeText={onChangeText}
          >
          </TextInput>
         
      </View>
    )
  }
  
  const styles=StyleSheet.create({
    container:{
        
        backgroundColor: colors.onPrimary,
        alignItems: "center",
        justifyContent: "center",
    },

    input:{
        fontSize: 20,
        color: colors.primary,
        alignItems: 'center',
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
        width: "80%",
        marginVertical: 10,
      }

})

