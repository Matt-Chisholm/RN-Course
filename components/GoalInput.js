import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Set your goal!'
        style={styles.textInput}
        onChangeText={goalInputHandler}
        clearButtonMode='always'
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
