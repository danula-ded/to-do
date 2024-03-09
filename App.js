import React, { useState, useEffect } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import DraggableList from "./components/DraggableList";
import AddInput from "./components/AddInput";
import Header from "./components/Header";
import Empty from "./components/Empty";

export default function App() {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));

  const submitHandler = (value) => {
    setData((prevTodo) => [
      {
        label: value,
        key: Date.now(),
      },
      ...prevTodo,
    ]);
  };

  useEffect(() => {
    setCurrentDate(new Date().toISOString().slice(0, 10));
  }, [data]);

  const deleteItem = (key) => {
    setData((prevData) => prevData.filter((item) => item.key !== key));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
      <Header currentDate={currentDate}/>
      <View style={styles.main}>
        <ScrollView>
          <View style={styles.listContainer}>
            {data.length > 0 ? (
              <DraggableList
                data={data}
                deleteItem={deleteItem}
                setData={setData}
              />
            ) : (
              <Empty />
            )}
          </View>
        </ScrollView>

        <AddInput submitHandler={submitHandler} />
      </View>
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
