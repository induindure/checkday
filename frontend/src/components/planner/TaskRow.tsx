import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import CheckboxCell from "./CheckboxCell";
import { colors } from "../../theme/colors";

interface TaskRowProps {
  task: string;
  time: string;
  repeatDays: string[];
  priority: "Low" | "Medium" | "High";
  onPress: () => void;
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function TaskRow({
  task,
  time,
  repeatDays,
  priority,
  onPress,
}: TaskRowProps) {
  return (
    <TouchableOpacity
  style={styles.row}
  activeOpacity={0.8}
  onPress={onPress}
>
      <Text style={styles.task}>{task}</Text>

      <Text style={styles.time}>{time}</Text>

      {DAYS.map((day) => (
        <CheckboxCell
          key={day}
          defaultChecked={
  (repeatDays ?? []).includes(day) ||
  (repeatDays ?? []).includes("Daily")
}
        />
      ))}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#ECECEC",
  },

  task: {
    width: 170,
    fontSize: 15,
    color: colors.text,
    fontWeight: "500",
  },

  time: {
    width: 90,
    textAlign: "center",
    color: "#6B7280",
    fontSize: 14,
  },
});