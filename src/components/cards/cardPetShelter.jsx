import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import iconSex from "../../../assets/images/icons/Sexo.png";

const CardPetShelter = ({ image, index = 0, goToEdit = () => {} }) => {
  const navigation = useNavigation();

  return (
    <View key={index} style={styles.cardContainer}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => goToEdit(image.id, "m")} style={styles.editIcon}>
          <Text style={styles.pencilIcon}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("PetDetailsShelter", { petId: image.id })}>
          <Image source={{ uri: image.fotos[0] }} style={styles.petImage} />
        </TouchableOpacity>
        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.petName}>{image.nombre}</Text>
            <Image source={iconSex} style={styles.iconSex} />
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.cardText}>{image.ciudad}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingBottom: 20,
  },
  card: {
    width: 192, 
    height: 250,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
    marginLeft: 10,
  },
  editIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor:"#fff",
    borderRadius:5,
    padding:2,
  },
  pencilIcon: {
    fontSize: 20,
    color: "red",
  },
  petImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  petName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconSex: {
    width: 30,
    height: 30,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationIcon: {
    fontSize: 16,
    color: "#99DBD6",
  },
  cardText: {
    marginLeft: 5,
    color: "#555",
  },
});

export default CardPetShelter;
