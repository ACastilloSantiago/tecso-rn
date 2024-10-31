import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { filterPets, searchPets } from "../../features/home/homeData";

function Filters() {
  const dispatch = useDispatch();

  const petsFilter = (name) => dispatch(filterPets(name));

  const petsSearch = (text) => dispatch(searchPets(text));

  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre, estado, protectora y sexo"
          onChangeText={petsSearch}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Categorías */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Categorías</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => petsFilter("Gato")}>
            <Text style={styles.categoryText}>🐱 Gato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton} onPress={() => petsFilter("Perro")}>
            <Text style={styles.categoryText}>🐶 Perro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton} onPress={() => petsFilter("Hamster")}>
            <Text style={styles.categoryText}>🐹 Hamster</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton} onPress={() => petsFilter("Conejo")}>
            <Text style={styles.categoryText}>🐰 Conejo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Filters;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  categoriesContainer: {
    marginBottom: 30,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  categoryButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
  },
});
