import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  const name = "my awesome app";
  // const [enteredText, setEnteredText] = useState("Your goals will appear here");
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function onTextEntered(changedText) {
    // setEnteredText(changedText);
    // update goals array with the new text
    const newGoal = { text: changedText, id: Math.random() };

    // const newArray = [...goals, newGoal];
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
    setModalVisible(false);
  }

  function onCancel() {
    setModalVisible(false);
  }
  function onDeletePressed(deletedId) {
    // console.log("delete pressed ", deletedId);
    // let newArray = goals.filter((goal) => {
    //   return goal.id !== deletedId;
    // });
    // setGoals(newArray);
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => {
        return goal.id !== deletedId;
      });
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topContainer}>
        <Header appName={name} />
        <Button
          title="Add A Task"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <Input
        modalIsVisible={modalVisible}
        sendChangedText={onTextEntered}
        cancelPressed={onCancel}
      />
      <View style={styles.bottomContainer}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={goals}
          renderItem={({ item }) => {
            return <GoalItem goal={item} onDelete={onDeletePressed} />;
            // console.log(item);
          }}
        />
        {/* <ScrollView
          // alwaysBounceVertical={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
          {goals.map((goal) => {
            return (
              <View key={goal.id} style={styles.textContainer}>
                <Text style={styles.text}>{goal.text}</Text>
              </View>
            );
          })}
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
    alignItems: "center",

    // alignSelf: "stretch",
  },
  scrollContentsStyle: {
    alignItems: "center",
  },
  text: {
    fontSize: 80,
    color: "purple",

    padding: 15,
  },
  textContainer: {
    backgroundColor: "#999",
    borderRadius: 5,
    marginBottom: 15,
  },
});
