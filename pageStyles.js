
import colors from "./colors";
import { StyleSheet } from "react-native";

const pageStyles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer:{
    width: '80%',
    flex: 1,
  },
  bottomContainer:{
    width: '80%',
    flex: 4,
  },
});

