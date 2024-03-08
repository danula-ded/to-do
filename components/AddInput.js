import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AddInput({ submitHandler }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value.trim() !== "") {
      submitHandler(value);
      setValue("");
    }
  };

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Добавить задачу..."
          onChangeText={onChangeText}
        />
      </View>
      <Pressable style={styles.submitButton} onPress={handleAdd}>
        <Feather name="plus" size={24} color="midnightblue" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: 10,
  },
  input: {
    fontSize: 20,
    backgroundColor: "white",
    width: 300,
    marginRight: 20,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  submitButton: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    marginBottom: 20,
    borderRadius: 50,
  },
});
