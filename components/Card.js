import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../colors'

export default function Card({children,style}) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  )
};

const styles=StyleSheet.create({
    card: {
        backgroundColor: colors.onPrimary, 
        borderRadius: 5,
        padding: 20,
        shadowColor: colors.onPrimaryContainer,             
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        // elevation: 5,       
    }
})