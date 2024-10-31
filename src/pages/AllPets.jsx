import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../components/header/Header"; 
import Filters from "../components/filters/Filters"; 
import CardAllPet from "../components/cards/CardAllPet"; 
import { getDataHome } from "../features/home/homeData";
import { useSelector, useDispatch } from "react-redux";

const AllPets = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.home.pets);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const loadPetsFromAPI = async () => {
      try {
        if (token) {
          dispatch(getDataHome(token));
        }
      } catch (error) {
        console.error("Error al cargar las mascotas desde el backend:", error);
      }
    };
    loadPetsFromAPI();
  }, [token]);

  return (
    <View style={styles.container}>
      <Header />
      <Filters />
      <View style={styles.content}>
        {pets.length === 0 ? (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>No hay animales registrados actualmente</Text>
          </View>
        ) : (
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Animales</Text>
            </View>
            <ScrollView contentContainerStyle={styles.cardsContainer}>
              {pets.map((image, index) => (
                <CardAllPet key={index} index={index} image={image} />
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 60,
  },
  content: {
    flex: 1,
    paddingVertical: 10,
  },
  titleContainer: {
    marginHorizontal: 16,
    marginBottom: 25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 30,
  },
  noDataContainer: {
    height: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  noDataText: {
    fontSize: 16,
    color: "#666",
  },
});

export default AllPets;
