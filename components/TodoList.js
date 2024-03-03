import React from "react";
import {StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoList({ item, deleteItem }) {
  return (
    <View style={styles.ComponentContainer}>
      <TouchableOpacity style={styles.ListContainer}>
        <View style={styles.CirlceContainer}>
          <Entypo name="circle" size={20} color="midnightblue" />
        </View>
        <View>
          <Text style={styles.TextItem}>{item.value}</Text>
          <Text style={styles.TextDate}> Task</Text>
        </View>
        <TouchableOpacity
          style={styles.IconContainer}
          onPress={() => deleteItem(item.key)}
        >
          <MaterialIcons name="delete" size={24} color="midnightblue" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
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
  },
  ComponentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: "auto",
    width: "auto",
  },
  TextItem: {
    color: "black",
    width: 260,
    height: "auto",
    fontSize: 20,
    marginTop: 10,
    marginRight: 20,
    fontFamily: "poppins-regular",
  },
  TextDate: {
    color: "goldenrod",
    fontSize: 15,
    marginRight: 20,

    fontFamily: "poppins-regular",
    borderRadius: 10,
    width: 40,
  },
  IconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 15,

    height: 40,

    borderRadius: 10,
  },
  CirlceContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
  },
});
