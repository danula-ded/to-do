// TaskTab.js
import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DraggableList from "./DraggableList";
import Empty from "./Empty";
import AddInput from "./AddInput";

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

  const deleteItem = async (key) => {
    // Находим задачу по ключу и обновляем поле completed на true
    const updatedData = data.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          completed: true,
        };
      }
      return item;
    });

    // Сохраняем обновленные данные в AsyncStorage
    try {
      // Сначала обновляем состояние данными
      setData(updatedData);

      // Затем сохраняем обновленные данные в AsyncStorage
      await AsyncStorage.setItem("taskData", JSON.stringify(updatedData));
    } catch (error) {
      console.error("Ошибка при сохранении данных: ", error);
    }

    // Обновляем состояние данными
    setData(updatedData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("taskData");
        if (storedData !== null) {
          setData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Ошибка при получении данных: ", error);
      }
    };

    fetchData();
  }, []); // Получаем данные только при монтировании компонента

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

  const tasks = data.filter((item) => !item.completed);

  return (
    <>
      <ScrollView>
        <View style={styles.listContainer}>
          {tasks.length > 0 ? (
            <DraggableList
              data={tasks}
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
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
