import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

interface TaskCardProps {
  title: string;
  time: string;
  completed?: boolean;
}

export default function TaskCard({
  title,
  time,
  completed = false,
}: TaskCardProps) {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.status,
          completed && styles.completedStatus,
        ]}
      />

      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            completed && styles.completedText,
          ]}
        >
          {title}
        </Text>

        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  status: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.warning,
    marginRight: 16,
  },

  completedStatus: {
    backgroundColor: colors.success,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },

  completedText: {
    textDecorationLine: "line-through",
    color: colors.textSecondary,
  },

  time: {
    marginTop: 4,
    color: colors.textSecondary,
    fontSize: 14,
  },
});