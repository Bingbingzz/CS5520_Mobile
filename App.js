import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import StartingScreen from './screens/StartingScreen';
import colors from './colors';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ConfirmScreen from './screens/ConfirmScreen';
import FinishScreen from './screens/FinishScreen';

export default function App() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  function sendEmail(email){
    setEmail(email);
  }

  function sendPhone(phone){
    setPhone(phone);
  }

  return (
    <LinearGradient colors={["rgb(255, 215, 245)", 'transparent']}
    style={styles.container}>
        <SafeAreaView style={styles.view}>
        {!isLoggedIn ?(
          <StartingScreen 
          setEmail={sendEmail} 
          setPhone={setPhone} 
          setIsLoggedIn={setIsLoggedIn} 
          isLoggedIn={isLoggedIn}
          email={email}
          phone={phone}
          />
        ):(<ConfirmScreen 
          setEmail={sendEmail} 
          setPhone={setPhone} 
          email={email}
          phone={phone}
          setIsLoggedIn={setIsLoggedIn}
        />)
        } 
        </SafeAreaView>     
        <StatusBar style="auto" />
    </LinearGradient> 
  );
}

const styles = StyleSheet.create({
  container: {
  display: 'flex',
  flex:1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  },

  view: {
    width: '80%',
  }
});

