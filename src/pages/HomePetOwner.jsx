import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { getDataHome } from "../features/home/homeData";
import CardPet from "../components/cards/CardPet"; 
import CardProtective from "../components/cards/CardProtective"; 
import Header from "../components/header/Header";
import Filters from "../components/filters/Filters";


const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const dataHome = useSelector((state) => state.home);
  const token = useSelector((state) => state.auth.token);

  const loadPetsFromAPI = useCallback(() => {
    try {
      if (token) dispatch(getDataHome(token));
    } catch (error) {
      console.error("Error al cargar las mascotas desde el backend:", error);
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) loadPetsFromAPI();
  }, [token, loadPetsFromAPI]);

  const views = (value) => {
    if (value === "pets") {
      navigation.navigate("AllPets"); 
    } else if (value === "shelters") {
      navigation.navigate("AllShelters"); 
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView style={styles.main}>
        <Filters />
        {/* Sección de Animales */}
        <View style={styles.section}>
            <View>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Animales</Text>
                <TouchableOpacity onPress={() => views("pets")}>
                  <Text style={styles.linkText}>Ver todos</Text>
                </TouchableOpacity>
              </View>
              <View>
                  {dataHome.pets.length === 0 ? (
                  <View style={styles.emptyMessageContainer}>
                    <Text>No hay animales registrados actualmente</Text>
                  </View>
                ) : (
                dataHome.pets.map((image, index) => (
                  <CardPet image={image} key={index} />
                ))
              )}
              </View>
            </View>
        </View>
        {/* Sección de Protectoras */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Protectoras</Text>
            <TouchableOpacity onPress={() => views("shelters")}>
              <Text style={styles.linkText}>Ver todas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            {dataHome.shelters.length === 0 ? (
              <Text>No hay protectoras registradas actualmente</Text>
            ) : (
              dataHome.shelters.map((image, index) => (
                <CardProtective key={index} image={image} index={index} />
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  main: {
    width: "100%",
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  linkText: {
    color: "#017179",
    textDecorationLine: "underline",
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
    gap: 10,
  },
});

export default Home;
