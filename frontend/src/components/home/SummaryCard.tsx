import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

interface SummaryCardProps {
  title: string;
  value: number;
}

export default function SummaryCard({
  title,
  value,
}: SummaryCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  value: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.primary,
  },

  title: {
    marginTop: 8,
    fontSize: 14,
    color: colors.textSecondary,
  },
});