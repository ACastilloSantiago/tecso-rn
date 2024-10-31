import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";
import CardPet from "../cards/CardPet"; // Ajusta la ruta según tu estructura


const SliderCardPet = () => {
  const dataHome = useSelector((state) => state.home);

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination={true} // Muestra los puntos de paginación
        autoplay={false} // Activa el autoplay
        autoplayTimeout={3} // Intervalo de autoplay en segundos
        loop={true} 
        slidesPerView={3}// Activa el loop para un carousel infinito
      >
        {/* Mapea el array de imágenes y renderiza cada elemento */}
        {dataHome.pets?.map((image, index) => (
          <View key={index} style={styles.page}>
            <CardPet image={image} index={index} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300, 
  },
  wrapper: {
    // Puedes agregar estilos adicionales si necesitas personalizar Swiper
  },
  page: {
    justifyContent: "center",
    alignItems: "center", // Ajusta el ancho de cada elemento
  },
});

export default SliderCardPet;
