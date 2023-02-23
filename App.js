import { View, Text } from 'react-native'
import React from 'react'
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from './components/GoalDetails';
import PressableButton from './components/PressableButton';
import { Ionicons } from "@expo/vector-icons";

const stack = createNativeStackNavigator();
console.log(stack);

export default function App() {
    
  return (
  <NavigationContainer>
    <stack.Navigator 
    screenOptions={{ headerStyle: { backgroundColor: '#9370db' },
    headerTitleStyle: {color: "#fff", fontSize: 25}}}>
        <stack.Screen 
        name='Home' 
        component={Home} 
        options={{ 
        title: 'All My Goals', 
        headerRight: ()=>{return ( 
        <PressableButton 
         customizedStyle={{backgroundColor:'transparent'}}>
            <Ionicons name="warning" size={30} color="black" />
        </PressableButton>
        )}
     }}
        
        // options={({route})=>{return {title: route.params.name}}}
        />
        <stack.Screen 
        name='GoalDetails' 
        component={GoalDetails} 
        options={({ route }) =>{ return { title: route.params.goalItem.text}}}
        /> 
    </stack.Navigator>   
  </NavigationContainer>    
  )
}