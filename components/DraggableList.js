import React from "react";
import { View, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import TodoElement from "./TodoElement";

export default function DraggableList(props) {
  const renderItem = (item, index, drag, isActive) => (
    <TodoElement item={item} deleteItem={props.deleteItem} drag={drag} isActive={isActive} />
  );

  const handleDragEnd = ({ data: updatedData }) => {
    // Обработка окончания перетаскивания (если нужно)
  };

  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={props.data}
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
