import { useState, useRef } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";

import { colors } from "../../assets/styles/styles";

import first from "../../assets/images/forget.png";
import second from "../../assets/images/forget2.png";
import { Button } from "../components";
import { useNavigation } from "@react-navigation/native";

export const StartedScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef(null);

  const navigate = useNavigation();

  const handlePageChange = (event) => {
    setCurrentPage(event.nativeEvent.position);
  };

  const goToPage = (index) => {
    pagerRef.current.setPage(index);
    setCurrentPage(index);
  };

  return (
    <View style={styles.container}>
      <PagerView ref={pagerRef} style={styles.pagerView} initialPage={0} onPageSelected={handlePageChange}>
        <View key={0} style={styles.page}>
          <Image source={first} style={styles.image} />
          <Text style={styles.title}>Se parte del equipo</Text>
          <Text style={styles.description}>Ayudalos a volver a casa difundiendo información y colaborando con las protectoras para encontrarles un hogar.</Text>
        </View>
        <View key={1} style={styles.page}>
          <Image source={second} style={styles.image} />
          <Text style={styles.title}>Encontrá tu mejor amigo</Text>
          <Text style={styles.description}>Si estas pensando en sumar un integrante más a tu familia ¿Por qué no adoptando?</Text>
        </View>
      </PagerView>
      <View style={styles.pagination}>
        <TouchableOpacity onPress={() => goToPage(0)} style={[styles.dot, currentPage === 0 ? styles.activeDot : null]}></TouchableOpacity>
        <TouchableOpacity onPress={() => goToPage(1)} style={[styles.dot, currentPage === 1 ? styles.activeDot : null]}></TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <Button onPress={() => navigate.navigate("Login")}>Comenzar</Button>
        <TouchableOpacity onPress={() => navigate.navigate("Login")} style={{ padding: 8 }}>
          <Text style={{ color: colors.brandSecondary01 }}>Omitir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLightmodePrimary,
  },
  pagerView: {
    flexGrow: 1,
    // backgroundColor: 'red',
  },
  page: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  title: {
    color: colors.brandNeutro01,
    // fontWeight: 700,
    fontSize: 22,
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    color: colors.brandNeutro02,
    fontSize: 14,
    textAlign: "center",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 0,

    // right: 0,
    // left: 0,
    // bottom: 0,
  },
  dot: {
    width: 15,
    height: 5,
    backgroundColor: colors.brandNeutro02,
    borderRadius: 16,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: colors.brandSecondary03,
  },
  buttons: {
    marginVertical: 16,
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
});
