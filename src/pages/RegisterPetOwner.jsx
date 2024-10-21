import Isologo from "../../assets/images/icons/Isologo.jpg";
import { View, StyleSheet, Image } from "react-native";
import FormPetOwner from "../components/PetOwner/FormPetOwner";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container_image: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 10,
    width: "100%",
  },
});

const PetRegistration = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_image}>
        <Image source={Isologo} />
      </View>
      <View style={{ flex: 4 }}>
        <FormPetOwner />
      </View>
    </View>
  );
};

export default PetRegistration;
