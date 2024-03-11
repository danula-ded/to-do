// TaskTab.js
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import DraggableList from "./DraggableList";
import Empty from "./Empty";
import AddInput from "./AddInput";
import StatsTab from "./StatsTab"; // Изменил импорт

export default function TaskTab({ data, setData }) {
  const submitHandler = (value) => {
    setData((prevTodo) => [
      {
        label: value,
        key: Date.now(),
        completed: false,
        date: new Date().toISOString().slice(0, 10),
      },
      ...prevTodo,
    ]);
  };

  const deleteItem = (key) => {
    setData((prevData) => prevData.filter((item) => item.key !== key));
  };

  // Функция для перемещения задачи на первое место
  const moveTaskToTop = (key) => {
    const taskIndex = data.findIndex((item) => item.key === key);

    if (taskIndex !== -1) {
      const updatedData = [
        data[taskIndex],
        ...data.slice(0, taskIndex),
        ...data.slice(taskIndex + 1),
      ];

      setData(updatedData);
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.listContainer}>
          {data.length > 0 ? (
            <DraggableList
              data={data}
              deleteItem={deleteItem}
              setData={setData}
              moveTaskToTop={moveTaskToTop}
            />
          ) : (
            <Empty />
          )}
        </View>
      </ScrollView>

      <AddInput submitHandler={submitHandler} />

      {/* Используйте StatsTab вместо ChartsTab и TaskStatsTab */}
      <StatsTab data={data} currentDate={new Date().toISOString().slice(0, 10)} />
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
