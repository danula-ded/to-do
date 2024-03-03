import React from "react";
import { View, Text, Image } from "react-native";

export default function Empty() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.EmptyImage}
        source={require("../assets/Empty.png")}
      />
      <Text style={styles.EmptyText}>Add To-Do.</Text>
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
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    marginBottom: 20,
    borderRadius: 50,
  },
});
