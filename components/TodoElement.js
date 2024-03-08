import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoElement({ item, deleteItem, drag }) {
  return (
    <Pressable style={styles.listContainer} onLongPress={drag}>
      <View style={styles.componentContainer}>
        <Pressable
          style={styles.circleContainer}
          onPress={() => deleteItem(item.key)}
        >
          <Entypo name="circle" size={20} color="midnightblue" />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.textItem}>{item.label}</Text>
        </View>
        <Pressable
          style={styles.iconContainer}
          onPress={() => console.log("eeeeeeee")}
        >
          <MaterialIcons name="delete" size={24} color="midnightblue" />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "whitesmoke",
    height: "auto",
    width: 350,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  componentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "auto",
    paddingHorizontal: 10,
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
  },
  textContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  textItem: {
    color: "black",
    fontSize: 20,
    width: 240,
    height: "auto",
    fontFamily: "poppins-regular",
    paddingVertical: 5,
    marginRight: 20,
  },
  iconContainer: {
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
  },
});
