import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import ShelterModal from "./ShelterModal";
import { Phone } from "../elements";

import { colors } from "../../../assets/styles/styles";
import ShelterImage from "../../../assets/images/protectors/Protectora-Animalistas.png";

const ShelterDetail = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.shelterInfo}>
        <Image source={ShelterImage} style={styles.shelterLogo} />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Protectora</Text>
          <Text style={styles.title}>Animalistas</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
        <Phone />
      </TouchableOpacity>
      <ShelterModal show={show} setShow={setShow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shelterInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    height: 50,
  },
  shelterLogo: {
    height: 45,
    width: 45,
    resizeMode: "contain",
  },
  textContainer: {
    flexDirection: "column",
  },
  label: {
    color: colors.brandNeutro02,
    fontSize: 10,
    fontWeight: "400",
  },
  title: {
    color: colors.brandNeutro01,
    fontSize: 14,
    fontWeight: "500",
  },
  button: {
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17.5,
    width: 35,
    height: 35,
    backgroundColor: colors.brandSecondary01,
  },
});

export default ShelterDetail;
