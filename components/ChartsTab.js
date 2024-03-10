import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function ChartsTab({ data, currentDate }) {
 return (
   <View style={styles.container}>
     <Text style={styles.text}>Charts will be displayed here</Text>
     {/* Используйте библиотеки для отображения графиков */}
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
