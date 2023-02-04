import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Task({ text, onPress }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.circular} onPress={onPress}></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between"
  },
  itemText: {
    Width: "90%",
    fontSize: 15 ,
    flexDirection: "row",
  },
  circular: {
    width: 25,
    height: 25,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 5,
  },
});
