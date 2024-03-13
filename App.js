import React, { useState, useEffect } from "react";
import { View, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./components/Header";
import StatsTab from "./components/StatsTab"; // Изменил импорт
import SettingsTab from "./components/SettingsTab";
import TabsControl from "./components/TabsControl";
import TaskTab from "./components/TaskTab";

export default function App() {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [activeTab, setActiveTab] = useState("tasks");

  useEffect(() => {
    setCurrentDate(new Date().toISOString().slice(0, 10));
  }, [data]);

  useEffect(() => {
    // При загрузке приложения загружаем данные из AsyncStorage
    loadTasks();
  }, []);

  useEffect(() => {
    // При изменении задач сохраняем их в AsyncStorage
    saveTasks();
  }, [data]);

  const loadTasks = async () => {
    try {
      const tasksFromStorage = await AsyncStorage.getItem("tasks");
      if (tasksFromStorage) {
        setData(JSON.parse(tasksFromStorage));
      }
    } catch (error) {
      console.error("Error loading tasks from AsyncStorage:", error);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving tasks to AsyncStorage:", error);
    }
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
      <Header currentDate={currentDate} />
      <View style={styles.main}>
        {activeTab === "tasks" ? (
          <TaskTab data={data} setData={setData} />
        ) : activeTab === "stats" ? ( // Изменил на "stats"
          <StatsTab data={data} currentDate={currentDate} />
        ) : activeTab === "settings" ? (
          <SettingsTab />
        ) : null}
        <TabsControl activeTab={activeTab} switchTab={switchTab} />
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
});
