import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  View,
} from "react-native";

import WeekHeader from "../../components/planner/WeekHeader";
import PlannerGrid from "../../components/planner/PlannerGrid";
import AddTaskModal from "../../components/planner/AddTaskModal";

export interface Task {
  id: string;
  name: string;
  time: string;
  repeatDays: string[];
  priority: "Low" | "Medium" | "High";
  notes: string;

  completed: {
    Mon: boolean;
    Tue: boolean;
    Wed: boolean;
    Thu: boolean;
    Fri: boolean;
    Sat: boolean;
    Sun: boolean;
  };
}

export default function TasksScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [taskMenuVisible, setTaskMenuVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
  {
    id: "1",
    name: "Database Assignment",
    time: "09:00 AM",
    repeatDays: ["Mon", "Wed", "Fri"],
    priority: "High",
    notes: "",
    completed: {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    },
  },
  {
    id: "2",
    name: "React Native Project",
    time: "11:00 AM",
    repeatDays: ["Tue", "Thu"],
    priority: "High",
    notes: "",
    completed: {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    },
  },
  {
    id: "3",
    name: "Gym",
    time: "06:00 PM",
    repeatDays: ["Mon", "Wed", "Fri", "Sat"],
    priority: "Medium",
    notes: "",
    completed: {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    },
  },
  {
    id: "4",
    name: "Read Book",
    time: "08:00 PM",
    repeatDays: ["Daily"],
    priority: "Low",
    notes: "",
    completed: {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    },
  },
  {
    id: "5",
    name: "Drink Water",
    time: "All Day",
    repeatDays: ["Daily"],
    priority: "High",
    notes: "",
    completed: {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    },
  },
  {
    id: "6",
    name: "Study AI",
    time: "04:00 PM",
    repeatDays: ["Tue", "Thu", "Sun"],
    priority: "High",
    notes: "",
    completed: {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    },
  },
  {
    id: "7",
    name: "Team Meeting",
    time: "02:00 PM",
    repeatDays: ["Fri"],
    priority: "Medium",
    notes: "",
    completed: {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    },
  },
  {
    id: "8",
    name: "Revision",
    time: "09:00 PM",
    repeatDays: ["Sat", "Sun"],
    priority: "Medium",
    notes: "",
    completed: {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    },
  },
]);

  const addTask = (task: Omit<Task, "id" | "completed">) => {
  setTasks((prev) => [
    ...prev,
    {
      ...task,
      id: Date.now().toString(),

      completed: {
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
        Sun: false,
      },
    },
  ]);
};

  const handleTaskPress = (task: Task) => {
  setSelectedTask(task);
  setTaskMenuVisible(true);
};

  return (
    <SafeAreaView style={styles.container}>
      <WeekHeader />

      <PlannerGrid
  tasks={tasks}
  onTaskPress={handleTaskPress}
/>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

      <AddTaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddTask={addTask}
      />

      <Modal
  visible={taskMenuVisible}
  transparent
  animationType="fade"
  onRequestClose={() => setTaskMenuVisible(false)}
>
  <View
    style={{
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.35)",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        width: "85%",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        {selectedTask?.name}
      </Text>

      <TouchableOpacity
        style={{ paddingVertical: 15 }}
      >
        <Text style={{ fontSize: 18 }}>
          ✏️ Edit Task
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ paddingVertical: 15 }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "red",
          }}
        >
          🗑 Delete Task
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setTaskMenuVisible(false)}
        style={{
          paddingVertical: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#6366F1",
            fontWeight: "700",
            fontSize: 17,
          }}
        >
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },

  fab: {
    position: "absolute",
    right: 25,
    bottom: 35,
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#6366F1",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },

  plus: {
    color: "#fff",
    fontSize: 36,
    marginTop: -2,
    fontWeight: "300",
  },
});