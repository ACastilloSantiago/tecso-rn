import { Text, StyleSheet, View } from "react-native";

export const Pill = ({ status, color = "purple" }) => {
  return (
    <View style={[styles.pill, color === "purple" && styles.pillPurple]}>
      <Text style={[styles.pillText, color === "purple" && styles.pillTextPurple]}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 10,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  pillPurple: {
    backgroundColor: "rgba(238, 225, 255, 1)",
    borderColor: "rgba(151, 71, 255, 1)",
    borderWidth: 1,
  },
  pillText: {
    fontSize: 12,
    fontWeight: "400",
    // fontFamily: "Montserrat",
  },
  pillTextPurple: {
    color: "rgba(151, 71, 255, 1)",
  },
});
