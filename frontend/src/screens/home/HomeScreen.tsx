import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🏠</Text>
      <Text style={styles.title}>Home Dashboard</Text>
      <Text style={styles.subtitle}>Your productivity starts here.</Text>
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