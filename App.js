import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>
        Open up App.js to start working on your app!
      </Text>
      <Button title='Click Me' onPress={() => alert("Button Clicked!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    color: "red",
  },
});
