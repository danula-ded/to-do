import React, { useState, useEffect } from "react";
import { View, StatusBar, StyleSheet, SafeAreaView } from "react-native";

import Header from "./components/Header";

import TaskStatsTab from "./components/TaskStatsTab";
import ChartsTab from "./components/ChartsTab";
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
        ) : activeTab === "taskStats" ? (
          <TaskStatsTab data={data} currentDate={currentDate} />
        ) : activeTab === "charts" ? (
          <ChartsTab data={data} currentDate={currentDate} />
        ) : (
          <SettingsTab />
        )}
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
  listContainer: {
    flex: 1,
  },
});
