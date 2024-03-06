import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import DraggableList from "./components/DraggableList";
import AddInput from "./components/AddInput";
import Header from "./components/Header";
import Empty from "./components/Empty";

export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTodo) => [
      {
        label: value,
        date: new Date().toISOString().slice(0, 10),
        key: Math.random().toString(),
      },
      ...prevTodo,
    ]);
  };

  const deleteItem = (key) => {
    setData((prevData) => prevData.filter((item) => item.key !== key));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView>
          <View style={styles.main}>
            <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
            <Header />
            <View style={styles.listContainer}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
  },
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  listContainer: {
    flex: 1,
  },
});
