import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from "../components/header/Header";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import CardPetShelter from "../components/cards/cardPetShelter";
import { getDataHome } from "../features/home/homeData";
import { Ionicons } from "@expo/vector-icons"; // Necesario para los iconos

const HomeShelter = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const dataHome = useSelector((state) => state.home);

  const loadPetsFromAPI = useCallback(() => {
    if (token) {
      try {
        dispatch(getDataHome(token));
      } catch (error) {
        console.error("Error al cargar las mascotas desde el backend:", error);
      }
    }
  }, [dispatch, token]);

  useEffect(() => {
    loadPetsFromAPI();
  }, [token, loadPetsFromAPI]);

  const navigateToForm = () => {
    navigation.navigate("FormPet");
  };

  const goToEdit = (id, action) => {
    // Aquí usaríamos el estado global para guardar `action`, ya que `localStorage` no es compatible con React Native
    dispatch({ type: "SET_ACTION", payload: action }); // Acción de ejemplo
    navigation.navigate("FormPet", { id });
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.main}>
        {/* <Filters /> */}
        <View style={styles.section}>
          {dataHome.pets.length === 0 ? (
            <View style={styles.emptyMessageContainer}>
              <Text>No hay animales registrados actualmente</Text>
            </View>
          ) : (
            <View>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Animales</Text>
              </View>
              <View style={styles.cardContainer}>
                {dataHome.pets.map((image, index) => (
                  <CardPetShelter
                    image={image}
                    key={index}
                    index={index}
                    goToEdit={() => goToEdit(image.id, "edit")}
                  />
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={navigateToForm}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  main: {
    width: "100%",
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 22,
    color: "#5F5B5B",
    fontFamily: "Poppins-Regular",
  },
  emptyMessageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  addButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#F08318",
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeShelter;
