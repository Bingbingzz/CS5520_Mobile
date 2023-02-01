import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../colors'

export default function Header({appName}) {
  return (
    <View>
      <Text style = {styles.header}>{appName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{    
        alignItems: "center",
        color: colors.primary,
        borderWidth: 2,
        borderColor: colors.primary,
        fontSize: 24,
        padding: 5,
        marginBottom: 20,
    }
})