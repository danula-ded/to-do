import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Empty() {
  return (
    <View style={styles.container}>
      <Image style={styles.emptyImage} source={require("../assets/empty.png")} />
      <Text style={styles.emptyText}>Пока у тебя нет задач!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 650,
  },
  emptyImage: {
    width: 350,
    height: 200,
  },
  emptyText: {
    margin: 16,
    color: "whitesmoke",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 50,
  },
});
