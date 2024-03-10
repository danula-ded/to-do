import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default TabsControl = ({ activeTab, switchTab }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.tab, activeTab === "tasks" && styles.activeTab]}
        onPress={() => switchTab("tasks")}
      >
        <Text style={styles.tabText}>Tasks</Text>
      </Pressable>
      <Pressable
        style={[styles.tab, activeTab === "taskStats" && styles.activeTab]}
        onPress={() => switchTab("taskStats")}
      >
        <Text style={styles.tabText}>Stats</Text>
      </Pressable>
      <Pressable
        style={[styles.tab, activeTab === "charts" && styles.activeTab]}
        onPress={() => switchTab("charts")}
      >
        <Text style={styles.tabText}>Charts</Text>
      </Pressable>
      <Pressable
        style={[styles.tab, activeTab === "settings" && styles.activeTab]}
        onPress={() => switchTab("settings")}
      >
        <Text style={styles.tabText}>Settings</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    flexDirection: "row",
    backgroundColor: "midnightblue",
    justifyContent: "space-around",
    alignItems: "center",
    padding:8
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "white",
  },
  tabText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabText: {
    color: "white",
  },
});
