import React, { useState } from "react";
import {StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";

export default function AddInput({ submitHandler }) {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Task..."
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity
        style={styles.SubmitButton}
        onPress={() => {
          setValue(submitHandler(value));
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
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
  SubmitButton: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    marginBottom: 20,
    borderRadius: 50,
  },
});
