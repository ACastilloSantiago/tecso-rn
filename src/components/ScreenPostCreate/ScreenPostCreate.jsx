import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/styles";

const ScreenPostCreate = ({ image, title, children, classImg = "" }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, classImg && styles[classImg]]}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundLightmodePrimary,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 16,
  },
  imageContainer: {
    marginTop: 16,
    justifyContent: "center",
  },
  image: {
    // width: 200/,
    height: 300,
    resizeMode: "contain",
  },
  content: {
    alignItems: "center",
    marginTop: 16,
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.brandNeutro01,
  },
  mb4: {
    marginBottom: 16,
  },
});

export default ScreenPostCreate;
