import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📆</Text>
      <Text style={styles.title}>Calendar</Text>
      <Text style={styles.subtitle}>View and schedule your events.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2563EB",
    marginTop: 20,
  },
  subtitle: {
    marginTop: 10,
    color: colors.textSecondary,
  },
});