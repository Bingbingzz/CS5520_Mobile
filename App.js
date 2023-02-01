import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import StartingScreen from './screens/StartingScreen';
import colors from './colors';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={["rgb(255, 215, 245)", 'transparent']}
    style={styles.container}>
       <View style={styles.view}>
          <StartingScreen/>
        </View>     
        <StatusBar style="auto" />

    </LinearGradient>
     
   
  );
}

const styles = StyleSheet.create({
  container: {
  display: 'flex',
  flex:1,
  flexDirection: 'row',
  // backgroundColor: colors.primaryContainer,
  alignItems: 'center',
  justifyContent: 'center',
  },

  view: {
    width: '80%',
  }
});

