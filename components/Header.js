import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>To-Do</Text>
      <Text style={styles.headerList}>{props.currentDate}</Text>
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
