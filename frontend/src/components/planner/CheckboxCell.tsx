import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { colors } from "../../theme/colors";

interface CheckboxCellProps {
  defaultChecked?: boolean;
}

export default function CheckboxCell({
  defaultChecked = false,
}: CheckboxCellProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <TouchableOpacity
      style={styles.checkbox}
      onPress={() => setChecked(!checked)}
      activeOpacity={0.8}
    >
      {checked && <Text style={styles.tick}>✓</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
  },

  tick: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: "#22C55E",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 20,
    overflow: "hidden",
  },
});