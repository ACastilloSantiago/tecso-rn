import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getShelters } from "../api/setupAxios";
import protectora from "../assets/images/protectors/Protectora-Animalistas.png";
import Header from "../components/header/Header"; 
import Filters from "../components/filters/Filters"; 

const AllShelter = () => {
  const navigation = useNavigation();
  const token = useSelector((state) => state.auth.token);

  const [logosImages, setLogosImages] = useState([]);

  useEffect(() => {
    const loadSheltersFromAPI = async () => {
      try {
        if (token) {
          const shelterData = await getShelters(token);
          console.log("Shelters from API:", shelterData);
          setLogosImages(shelterData);
        }
      } catch (error) {
        console.error("Error al cargar las protectoras desde el backend:", error);
      }
    };

    loadSheltersFromAPI();
  }, [token]);

  const allPets = () => {
    navigation.navigate("AllPets"); // Cambia la ruta según tu configuración de navegación
  };

  return (
    <View style={styles.container}>
      <Header />
      <Filters />
      <View style={styles.section}>
        <Text style={styles.title}>Protectoras</Text>
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {logosImages.length === 0 ? (
            <Text>No hay protectoras registradas actualmente</Text>
          ) : (
            logosImages.map((image, index) => (
              <View key={index} style={styles.card}>
                <Image source={protectora} style={styles.protectorImage} />
                <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>{image.nombreProtectora}</Text>
                  <Text style={styles.cardText}>{image.descripcion}</Text>
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  section: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: 100,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
  },
  protectorImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardText: {
    fontSize: 8,
    textAlign: "center",
    marginTop: 5,
  },
});

export default AllShelter;
