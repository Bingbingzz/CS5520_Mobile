import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function GoalItem({ goal, onDelete }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{goal.text}</Text>
      <Button
        title="X"
        onPress={() => {
          onDelete(goal.id);
        }}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "purple",

    padding: 15,
  },
  textContainer: {
    backgroundColor: "#999",
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
