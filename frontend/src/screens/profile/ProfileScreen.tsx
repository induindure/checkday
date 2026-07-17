import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>👤</Text>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Manage your account and preferences.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.secondary,
    marginTop: 20,
  },
  subtitle: {
    marginTop: 10,
    color: colors.textSecondary,
  },
});