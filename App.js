import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import StartingScreen from './screens/StartingScreen';
import colors from './colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <StartingScreen/>
        </View>     
        <StatusBar style="auto" />
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
  display: 'flex',
  flex:1,
  flexDirection: 'row',
  backgroundColor: colors.primaryContainer,
  alignItems: 'center',
  justifyContent: 'center',
  },

  view: {
    width: '80%',
  }
});

