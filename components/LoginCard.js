
import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import colors from '../colors';

export default function LoginCard() {
  return (
    <View>
      <Card>
        <Card.Title titleStyle={styles.title} title = "Sign up"></Card.Title>
        <Card.Content>
          <TextInput style={styles.text} label='Email' keyboardType='email-address'></TextInput>
          <TextInput style={styles.text} label='Password'></TextInput>
          <View style={styles.button}>
            <Button uppercase={false}>Reset</Button>
            <Button uppercase={false}>Sign up</Button>
          </View>
        </Card.Content>
      </Card>
        
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    // borderWidth: 1,
    marginLeft:120,
    color: colors.primary,
    // fontWeight: 
    // fontSize: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    // display: 'flex',
  },
  button: {
    flexDirection:'row',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: "transparent",

  }
});
