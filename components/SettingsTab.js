import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsTab() {
 return (
   <View style={styles.container}>
     <Text style={styles.text}>Settings will be displayed here</Text>
     {/* Здесь вы можете добавить настройки */}
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
