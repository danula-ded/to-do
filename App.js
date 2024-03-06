import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import DraggableList from "./components/DraggableList";
import AddInput from "./components/AddInput";
import Header from "./components/Header";
import Empty from "./components/Empty";

export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          label: value,
          date: new Date().toISOString().slice(0, 10), // Текущая дата
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  const deleteItem = (key) => {
    setData((prevData) => prevData.filter((item) => item.key !== key));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <ScrollView>
        <View style={styles.main}>
          <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
          <Header />
          <View style={{ flex: 1 }}>
            {data.length > 0 ? (
              <DraggableList data={data} deleteItem={deleteItem} />
            ) : (
              <Empty />
            )}
          </View>
          <View>
            <AddInput submitHandler={submitHandler} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
  },
  main: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    flex: 1,
  },
});
