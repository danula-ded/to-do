import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AddInput(props) {
  const [inputVisible, setInputVisible] = useState(false);
  const [value, setValue] = useState("");
  const textInputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      // Установите фокус на поле TextInput при его появлении
      textInputRef.current.focus();
    }
  }, [inputVisible]);

  const handleAdd = () => {
    if (value.trim() !== "") {
      props.submitHandler(value);
      setValue("");
      setInputVisible(false);
    }
  };

  const onChangeText = (text) => {
    setValue(text);
  };

  const toggleInput = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <View style={styles.container}>
      {
        // Показываем иконку только если поле ввода скрыто
        !inputVisible ? (
          <Pressable style={styles.iconContainer} onPress={toggleInput}>
            <Feather name="plus" size={24} color="midnightblue" />
          </Pressable>
        ) : (
          // Показываем поле ввода, если оно видимо
          <View style={styles.inputContainer}>
            <TextInput
              ref={textInputRef}
              style={styles.input}
              placeholder="Добавить задачу..."
              onChangeText={onChangeText}
            />
            <Pressable style={styles.submitButton} onPress={handleAdd}>
              <Feather name="plus" size={24} color="midnightblue" />
            </Pressable>
          </View>
        )
      }
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
    width: 275,
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
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    width: 50,
    borderRadius: 50,
  },
});
