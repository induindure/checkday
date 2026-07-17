import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

interface GreetingCardProps {
  name: string;
}

export default function GreetingCard({
  name,
}: GreetingCardProps) {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const hour = today.getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17) {
    greeting = "Good Evening";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        {greeting},
      </Text>

      <Text style={styles.name}>
        {name} 👋
      </Text>

      <Text style={styles.date}>
        {formattedDate}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },

  greeting: {
    fontSize: 18,
    color: colors.textSecondary,
  },

  name: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.text,
    marginTop: 4,
  },

  date: {
    marginTop: 8,
    fontSize: 15,
    color: colors.textSecondary,
  },
});