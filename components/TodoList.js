import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoList({ item, deleteItem }) {
  const formattedTime = new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <Pressable style={styles.listContainer} onPress={() => console.log("Pressed")}>
      <View style={styles.componentContainer}>
        <View style={styles.circleContainer}>
          <Entypo name="circle" size={20} color="midnightblue" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textItem}>{item.label}</Text>
          <Text style={styles.textDate}>{formattedTime}</Text>
        </View>
        <Pressable style={styles.iconContainer} onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="midnightblue" />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "whitesmoke",
    height: "auto",
    width: 350,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  componentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", // Добавлено выравнивание по вертикали
    height: "auto",
    width: "auto",
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textItem: {
    color: "black",
    fontSize: 20,
    fontFamily: "poppins-regular",
    marginTop: 10,
    marginRight: 20,
  },
  textDate: {
    color: "goldenrod",
    fontSize: 15,
    fontFamily: "poppins-regular",
    borderRadius: 10,
    width: 80,
  },
  iconContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginLeft: "auto", // Добавлено для прижатия к правому краю
  },
});