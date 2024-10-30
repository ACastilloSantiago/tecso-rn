import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/styles";

export const Tag = ({ type = "", value = "" }) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.valueText}>{typeof value === "number" ? value : value.charAt(0).toUpperCase() + value.slice(1)}</Text>
      <Text style={styles.typeText}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(245, 245, 245, 1)",
    width: 70,
    overflow: "hidden",
    gap: 8,
  },
  valueText: {
    color: colors.brandNeutro01, // Reemplaza con la variable de color de tu tema (var(--brand-neutro-01))
    fontWeight: "500",
    fontSize: 12,
  },
  typeText: {
    color: colors.brandNeutro02, // Reemplaza con la variable de color de tu tema (var(--brand-neutro-02))
    fontWeight: "400",
    fontSize: 10,
  },
});
