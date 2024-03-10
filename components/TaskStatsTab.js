import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TaskStatsTab({ data, currentDate }) {
 const completedTasks = data.filter((item) => item.completed === true);

 return (
   <View style={styles.container}>
     <Text style={styles.text}>Completed tasks: {completedTasks.length}</Text>
     {/* Другие подсчеты и информация */}
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
 },
 text: {
   color: "white",
   fontSize: 18,
 },
 // Добавьте стили по необходимости
});