import React from "react";
import { StyleSheet, View, Button } from "react-native";

const HomeScreen = props => {
  console.log(props);
  return (
    <View>
      <Button
        title='Go to Components Demo'
        onPress={() => props.navigation.navigate("Components")}
      ></Button>
      <Button
        title='Go to List Demo'
        onPress={() => props.navigation.navigate("List")}
      ></Button>
      <Button
        title='Go to Image Demo'
        onPress={() => props.navigation.navigate("Image")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
