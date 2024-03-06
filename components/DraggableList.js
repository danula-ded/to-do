import React from "react";
import { View, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import TodoList from "./TodoList";

export default function DraggableList({ data, deleteItem }) {
  const renderItem = ({ item, index, drag, isActive }) => (
    <TodoList item={item} deleteItem={deleteItem} drag={drag} isActive={isActive} />
  );

  const handleDragEnd = ({ data: updatedData }) => {
    // Обработка окончания перетаскивания (если нужно)
  };

  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onDragEnd={handleDragEnd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
