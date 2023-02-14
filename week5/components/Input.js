import {
  View,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import { useState } from "react";

// Receive modalVisible in props
export default function Input({
  sendChangedText,
  modalIsVisible,
  cancelPressed,
}) {
  const [text, setText] = useState("");
  function changeText(changedText) {
    setText(changedText);
  }
  // function buttonPressed() {
  //   sendChangedText(text);
  // }
  return (
    // use the received prop in visible prop of Modal
    <Modal visible={modalIsVisible}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
          style={styles.image}
        />
        <Image source={require("../assets/logo.png")} style={styles.image} />
        <TextInput
          value={text}
          onChangeText={changeText}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              disabled={text.length === 0 ? true : false}
              // disabled={!text.length}
              title="Confirm"
              onPress={() => {
                sendChangedText(text);
                setText("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelPressed} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  input: {
    borderBottomColor: "#552055",
    borderBottomWidth: 2,
    width: "50%",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 10,
    width: "30%",
  },
});
