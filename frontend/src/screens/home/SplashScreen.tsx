import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { colors } from "../../theme/colors";

type Props = NativeStackScreenProps<any>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📅</Text>
      <Text style={styles.title}>CheckDay</Text>
      <Text style={styles.subtitle}>
        Organize your day, achieve your goals.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  icon: {
    fontSize: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#E0E7FF",
    textAlign: "center",
  },
});