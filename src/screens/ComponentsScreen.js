import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const myname = "Nishit";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React native!!!</Text>
      <Text style={styles.anotherTextStyle}>My name is {myname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  anotherTextStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
