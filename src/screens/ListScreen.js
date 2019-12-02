import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 10 },
    { name: "Friend #3", age: 15 },
    { name: "Friend #4", age: 21 },
    { name: "Friend #5", age: 70 },
    { name: "Friend #6", age: 66 },
    { name: "Friend #7", age: 55 },
    { name: "Friend #8", age: 12 },
    { name: "Friend #9", age: 45 },
    { name: "Friend #10", age: 90 }
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      showsHorizontalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} is {item.age} years old.
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
