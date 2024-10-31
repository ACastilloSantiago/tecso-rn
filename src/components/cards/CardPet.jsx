import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../features/wishlist/whishlistSlice";
import iconSex from "../../../assets/images/icons/Sexo.png";

const CardPet = ({ image }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist);
  const isInWishlist = wishList?.includes(image.id);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(image.id));
    } else {
      dispatch(addToWishlist(image.id));
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <TouchableOpacity onPress={handleWishlistClick} style={styles.wishlistIcon}>
          <Text style={[styles.heartIcon, { color: isInWishlist ? "red" : "gray" }]}>{isInWishlist ? "❤️" : "🤍"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("PetDetailsPetOwner", { id: image.id })}>
          <Image source={{ uri: image.fotos[0] }} style={styles.petImage} />
        </TouchableOpacity>
        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.petName}>{image.nombre}</Text>
            <Image source={iconSex} style={styles.iconSex} />
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.cardText}>{image.ciudad}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingBottom: 20,
  },
  card: {
    width: 170,
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 5,
    marginLeft: 10,
  },
  wishlistIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  heartIcon: {
    fontSize: 24,
  },
  petImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  cardBody: {
    padding: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  petName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconSex: {
    width: 30,
    height: 30,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationIcon: {
    fontSize: 16,
    color: "#99DBD6",
  },
  cardText: {
    marginLeft: 5,
    color: "#555",
  },
});

export default CardPet;
