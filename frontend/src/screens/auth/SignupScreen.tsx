import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📝</Text>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Join CheckDay and start organizing your life.
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
  },
  icon: {
    fontSize: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.primary,
    marginTop: 20,
  },
  subtitle: {
    marginTop: 10,
    color: colors.textSecondary,
  },
});