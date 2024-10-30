import { TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../assets/styles/styles";

export const HeaderButton = ({ children, to = "back" }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (to === "heart") {
      Alert.alert("heart");
    } else if (to === "back") {
      navigation.goBack();
    } else {
      navigation.navigate(to);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 35,
    height: 35,
    overflow: "hidden",
    backgroundColor: colors.backgroundLightmodePrimary,
  },
});
