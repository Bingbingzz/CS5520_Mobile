import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../colors';
import { useState } from "react";

export default function Input({sendChangedText,sendChangedEmail}) {
    const[text, setText]= useState("");
    const[email, setEmail] = useState("");

    function changeText(changedText){
        setText(changedText);
    }
    function changeEmail(changedEmail){
        setEmail(chagedEmail);
    }
  return (   
    <View style={styles.container}>
        <TextInput style={styles.input}
          value={text}
          placeholder="Input"
          onChangeText={changeText}
          onChangedEmail={changeEmail}
        />     
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

