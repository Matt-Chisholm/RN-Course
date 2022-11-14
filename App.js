import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const goalInputHandler = (text) => {
    console.log(text);
  };

  const addGoalHandler = () => {
    console.log("Button Pressed");
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
        <Text>List of Goals : </Text>
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
});
