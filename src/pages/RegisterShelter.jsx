import { Image, View } from "react-native";
import { RegisterShelterForm } from "../components/RegisterShelterForm";
import { colors } from "../../assets/styles/styles";

export const RegisterShelter = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.backgroundLightmodePrimary,
        padding: 16,
      }}
    >
      <View style={{ alignItems: "center", paddingTop: 20, paddingBottom: 69 }}>
        <Image source={require("../../assets/images/logo.png")} />
      </View>
      <RegisterShelterForm navigation={navigation} />
    </View>
  );
};
