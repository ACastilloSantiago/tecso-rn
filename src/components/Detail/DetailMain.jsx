import { View, Text, StyleSheet } from "react-native";
import { Tag, MapPin, Pill, ShelterDetail, Button } from "..";
import { colors } from "../../../assets/styles/styles";

export const DetailMain = ({ nombre, estado, descripcion, ciudad, contacto, edad, raza, sexo, tamano }) => {
  const tags = Object.entries({ edad, raza, sexo, tamano }).map(([key, value]) => ({
    type: key,
    value: value,
  }));

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.divider} />
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{nombre}</Text>
            <View style={styles.location}>
              <MapPin />
              <Text style={styles.city}>{ciudad}</Text>
            </View>
          </View>
          <Pill status={estado} />
        </View>
        <View style={styles.tagsContainer}>{tags && tags.map(({ type, value }) => <Tag key={type} type={type} value={value} />)}</View>
        {contacto && <ShelterDetail {...contacto} />}
        <Text style={styles.description}>{descripcion}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button size="max" onPress={() => console.log("adoptado")}>
          Solicitar adopción
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    backgroundColor: colors.backgroundLightmodePrimary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    marginTop: -20,
    flex:1,
    // position: "absolute",
    // marginTop: 380,
    // top: 0,
    // bottom: 0,
  },
  divider: {
    width: 50,
    height: 2,
    backgroundColor: colors.brandNeutro01,
    opacity: 0.7,
    alignSelf: "center",
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerLeft: {
    flexDirection: "column",
    gap: 4,
  },
  name: {
    fontSize: 20,
    color: colors.brandNeutro01,
    fontWeight: "600",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  city: {
    color: colors.brandNeutro01,
    fontWeight: "400",
    fontSize: 14,
  },
  tagsContainer: {
    marginTop: 24,
    marginBottom: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
  },
  description: {
    marginTop: 24,
    color: colors.brandNeutro01,
    fontWeight: "400",
    fontSize: 14,
    marginBottom: 80,
    textAlign: "justify",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  adoptButton: {
    borderRadius: 8,
    paddingVertical: 12,
    width: "100%",
    maxWidth: 608,
    backgroundColor: colors.brandPrimary01,
    alignSelf: "center",
  },
  buttonText: {
    color: colors.backgroundLightmodePrimary,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
