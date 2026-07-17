import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function HabitsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔥</Text>
      <Text style={styles.title}>Habits</Text>
      <Text style={styles.subtitle}>Build consistency every day.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7ED",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#EA580C",
    marginTop: 20,
  },
  subtitle: {
    marginTop: 10,
    color: colors.textSecondary,
  },
});