import { StyleSheet, View, Text, Button } from "react-native";

export default function GoalItem(props) {
  const { itemData, courseGoals } = props;

  return (
    <View style={styles.goalItem}>
      <Text>{itemData.item}</Text>
      <Button
        title='Delete'
        onPress={() =>
          props.removeGoalHandler(courseGoals.indexOf(itemData.item))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
