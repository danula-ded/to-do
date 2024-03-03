import React from "react";
import { View, Text } from "react-native";

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>To-Do.</Text>
      <Text style={styles.HeaderList}>{today}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderText: {
    color: "white",
    fontFamily: "poppins-bold",
    fontSize: 30,
  },
  HeaderList: {
    color: "white",
    fontFamily: "poppins-bold",
    fontSize: 20,
    marginRight: 20,
  },
});
