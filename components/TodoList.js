import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoList({ item, deleteItem }) {
  const formattedTime = new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <Pressable style={styles.ListContainer} onPress={() => console.log("Pressed")}>
      <View style={styles.ComponentContainer}>
        <View style={styles.CircleContainer}>
          <Entypo name="circle" size={20} color="midnightblue" />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.TextItem}>{item.label}</Text>
          <Text style={styles.TextDate}>{formattedTime}</Text>
        </View>
        <Pressable
          style={styles.IconContainer}
          onPress={() => deleteItem(item.key)}
        >
          <MaterialIcons name="delete" size={24} color="midnightblue" />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ListContainer: {
    backgroundColor: "whitesmoke",
    height: "auto",
    width: 350,
    marginBottom: 30,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  ComponentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "auto",
  },
  CircleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
  },
  TextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  TextItem: {
    color: "black",
    fontSize: 20,
    fontFamily: "poppins-regular",
  },
  TextDate: {
    color: "goldenrod",
    fontSize: 15,
    fontFamily: "poppins-regular",
    borderRadius: 10,
    width: 80,
  },
  IconContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 10,
    height: 40,
    borderRadius: 10,
  },
});
