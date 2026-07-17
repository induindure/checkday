import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔐</Text>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>
        Securely access your CheckDay account.
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
    marginTop: 20,
    color: colors.primary,
  },
  subtitle: {
    marginTop: 10,
    color: colors.textSecondary,
  },
});