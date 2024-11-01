import { View, Text, Modal, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Instagram } from "../elements/Instagram";
import { Mail } from "../elements/Mail";
import { Phone } from "../elements/Phone";
import { XCircle } from "../elements/XCircle";

import { colors } from "../../../assets/styles/styles";
import shelter from "../../../assets/images/protectors/Protectora-Animalistas.png";

const ShelterModal = ({ show, setShow }) => {
  return (
    <Modal visible={show} transparent animationType="slide" onRequestClose={() => setShow(false)}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setShow(false)}>
            <XCircle />
          </TouchableOpacity>
          <Image source={shelter} style={styles.shelterImage} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Animalistas</Text>
            <Text style={styles.subtitle}>Se parte del cambio que queres ver en el mundo</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <View style={styles.iconContainer}>
                <Phone />
              </View>
              <Text style={styles.infoText}>+54 3415 6789 0</Text>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.iconContainer}>
                <Mail />
              </View>
              <Text style={styles.infoText}>animalistas@gmail.com</Text>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.iconContainer}>
                <Instagram />
              </View>
              <Text style={styles.infoText}>@animalistasderosario</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: colors.backgroundLightmodePrimary,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  icon: {
    width: 18.67,
    height: 18.67,
    resizeMode: "contain",
  },
  shelterImage: {
    height: 115,
    resizeMode: "contain",
    marginBottom: 10,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    color: colors.brandNeutro01,
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    color: colors.brandNeutro02,
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
  infoContainer: {
    width: "100%",
    marginTop: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: colors.brandSecondary01,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  infoText: {
    color: colors.brandNeutro01,
    fontSize: 14,
    fontWeight: "700",
  },
});

export default ShelterModal;
