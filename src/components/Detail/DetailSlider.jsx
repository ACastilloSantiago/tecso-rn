import { useState, useRef } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";

import { colors } from "../../../assets/styles/styles";

export const DetailSlider = ({ pet }) => {
  const images = pet.fotos || [];

  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef(null);

  const handlePageChange = (event) => {
    setCurrentPage(event.nativeEvent.position);
  };

  const goToPage = (index) => {
    pagerRef.current.setPage(index);
    setCurrentPage(index);
  };

  return (
    <View style={styles.container}>
      <PagerView ref={pagerRef} style={{ height: 400 }} initialPage={0} onPageSelected={handlePageChange}>
        {images.map((image, index) => (
          <View key={index} style={styles.page}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </PagerView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => goToPage(index)} style={[styles.dot, currentPage === index ? styles.activeDot : null]}></TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    position: "relative",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 2,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 36,
  },
  dot: {
    width: 15,
    height: 5,
    backgroundColor: colors.backgroundLightmodePrimary,
    borderRadius: 16,
  },
  activeDot: {
    backgroundColor: colors.brandPrimary02,
  },
});

export default DetailSlider;