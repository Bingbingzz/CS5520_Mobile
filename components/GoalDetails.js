import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import PressableButton from './PressableButton'
import {Ionicons} from "@expo/vector-icons"

export default function GoalDetails({route, navgation}) {
// useEffect    

//     navgation.setOptions({ title: 'All My Goals', 
//     hedearRight: ()=>{return (
//     <PressableButton buttonPressed={cons}>
//         <Ionicons name="warning" size={30} color="black" />
//     </PressableButton>
//     )
// }})
    
  return (
    
    <View>
      <Text>We are viewing the goal:</Text>
      <Text>{route.params.goalItem.text}</Text> 
    </View>
  )
}