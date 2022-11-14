import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };

  const removeGoalHandler = (goalIndex) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal, index) => index !== goalIndex);
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Set your goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.goalItem}>
              <Text>{itemData.item}</Text>
              <Button
                title='Delete'
                onPress={() =>
                  removeGoalHandler(courseGoals.indexOf(itemData.item))
                }
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  textInput: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginleft: 0,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  goalsContainer: {
    flex: 5,
    borderTopWidth: 0.3,
    borderTopColor: "black",
    paddingTop: 16,
  },
  goalItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "lightblue",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
});
