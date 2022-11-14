import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

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
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              itemData={itemData}
              courseGoals={courseGoals}
              removeGoalHandler={() =>
                removeGoalHandler(courseGoals.indexOf(itemData.item))
              }
            />
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
  goalsContainer: {
    flex: 5,
    borderTopWidth: 0.3,
    borderTopColor: "black",
    paddingTop: 16,
  },
});
