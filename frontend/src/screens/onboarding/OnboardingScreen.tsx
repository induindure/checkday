import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🚀</Text>
      <Text style={styles.title}>Welcome to CheckDay</Text>
      <Text style={styles.subtitle}>
        Plan your tasks, build habits, and stay productive every day.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  icon: {
    fontSize: 70,
  },
  title: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    textAlign: "center",
    color: colors.textSecondary,
  },
});