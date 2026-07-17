import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

interface HabitCardProps {
  title: string;
  streak: number;
}

export default function HabitCard({
  title,
  streak,
}: HabitCardProps) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          🔥 {streak} day streak
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: colors.textSecondary,
  },
});