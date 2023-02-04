import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState()
  const [taskItem, setTaskItem] = useState([])

  function handleClick() {
    Keyboard.dismiss()
    setTaskItem([...taskItem, task]),
    setTask(null)
  }

  function completeTask(index) {
    console.log("Hello", index)
    let taskCopy = [...taskItem];
    taskCopy.splice(index, 1)
    setTaskItem(taskCopy)
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today 's Task</Text>
        <View style={styles.items}>
        {
          taskItem.map((item, index) => {
          return (
            <Task key={index} text={item} onPress={() => completeTask(index)}/>)
         })
        }  
                  
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} placeholder={"Create new task"} value={task} onChangeText={text => setTask(text)}/>
      <TouchableOpacity onPress={() => handleClick()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 50
  },
  items: {},
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    width: 320,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    padding: 15
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 35,
    color: "#e5e5e5"
  }
});
