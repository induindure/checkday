import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { colors } from "../../theme/colors";

export default function WeekHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.arrow}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        July 13 - July 19
      </Text>

      <TouchableOpacity>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  arrow: {
    fontSize: 28,
    color: colors.primary,
    fontWeight: "700",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },
});