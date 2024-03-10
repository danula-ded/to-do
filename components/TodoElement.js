import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TodoElement(props) {
  const [starred, setStarred] = useState(false);

  const handleStarPress = () => {
    setStarred(!starred);
    props.moveTaskToTop(props.item.key);
  };

  return (
    <Pressable
      style={[
        styles.listContainer,
        { backgroundColor: props.isActive ? "lightgrey" : "whitesmoke" },
      ]}
      onLongPress={props.drag}
    >
      <View style={styles.componentContainer}>
        <Pressable
          style={styles.circleContainer}
          onPress={() => props.deleteItem(props.item.key)}
        >
          <Entypo name="circle" size={20} color="midnightblue" />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.textItem}>{props.item.label}</Text>
        </View>
        <Pressable
          style={styles.iconContainer}
          onPress={() => {
            props.moveTaskToTop(props.item.key);
            handleStarPress();
          }}
        >
          <MaterialCommunityIcons
            name={starred ? "star" : "star-outline"}
            size={24}
            color={starred ? "gold" : "midnightblue"}
          />
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
