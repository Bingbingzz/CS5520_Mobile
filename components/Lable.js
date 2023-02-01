import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../colors'

export default function Lable({children, style}) {

  return (
    <View>
      <Text style={[styles.lable,style]}>{children}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    lable:{
        fontSize: 20,
        color: colors.onPrimaryContainer,
        alignItems: 'center',
        justifyContent: "center",
        padding: 20,
      },    
})