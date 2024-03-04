import React from "react";
import {StyleSheet, View, Text, Image } from "react-native";

export default function Empty() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.EmptyImage}
        source={require("../assets/Empty.png")}
      />
      <Text style={styles.EmptyText}>Пока у тебя нет задач!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 650,
  },
  EmptyImage: {
    width: 350,
    height: 200,
  },
  EmptyText: {
    margin: 16,
    color: 'whitesmoke',
    fontSize: 16,
    fontWeight:'bold',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 50,
  },
});
