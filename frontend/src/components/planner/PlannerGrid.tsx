import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import TaskRow from "./TaskRow";
import { colors } from "../../theme/colors";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface Task {
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

interface PlannerGridProps {
  tasks: Task[];
  onTaskPress: (task: Task) => void;
}

export default function PlannerGrid({
  tasks,
  onTaskPress,
}: PlannerGridProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.taskHeader}>Tasks</Text>

          <Text style={styles.timeHeader}>Time</Text>

          {DAYS.map((day) => (
            <Text key={day} style={styles.day}>
              {day}
            </Text>
          ))}
        </View>

        {/* Task Rows */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {tasks.map((task, index) => (
        <TaskRow
  key={task.id}
  task={task.name}
  time={task.time}
  repeatDays={task.repeatDays}
  priority={task.priority}
  onPress={() => onTaskPress(task)}
/>
))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderColor: colors.border,
    backgroundColor: "#fff",
  },

  taskHeader: {
    width: 170,
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },

  timeHeader: {
    width: 90,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },

  day: {
    width: 40,
    textAlign: "center",
    fontWeight: "700",
    color: colors.primary,
  },
});