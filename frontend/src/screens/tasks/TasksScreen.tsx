import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✅</Text>
      <Text style={styles.title}>Tasks</Text>
      <Text style={styles.subtitle}>Manage your daily to-do list.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECFDF5",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.success,
    marginTop: 20,
  },
  subtitle: {
    marginTop: 10,
    color: colors.textSecondary,
  },
});