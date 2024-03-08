import React from "react";
import { View, Text, StyleSheet } from "react-native";

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>To-Do</Text>
      <Text style={styles.headerList}>{today}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontFamily: "poppins-bold",
    fontSize: 32,
  },
  headerList: {
    color: "white",
    fontFamily: "poppins-bold",
    fontSize: 20,
  },
});
