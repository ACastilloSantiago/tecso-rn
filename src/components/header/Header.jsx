// Header.jsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Avatar } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../../features/auth/authSlice";
import avatar from "../../../assets/images/avatar.png";

function Header() {
  const navigation = useNavigation(); //  navigation del contexto actual
  const drawerNavigation = navigation.getParent(); // navigation del Drawer Navigator

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const logOut = () => {
    dispatch(logoutAction());
    navigation.navigate("/"); 
  };

  const goHome = () => {
    const parentScreen = user.tipoRegistro.id === 1 ? "HomeShelter" : "HomePetOwner";
    const childScreen = user.tipoRegistro.id === 1 ? "home_Shelter" : "home_pet_owner";
    navigation.navigate(parentScreen, { screen: childScreen });
  };

  const handleMenuPress = () => {
    if (drawerNavigation && drawerNavigation.toggleDrawer) {
      drawerNavigation.toggleDrawer();
    } else {
      console.warn("No se pudo abrir el menú lateral. Es posible que el Drawer Navigator no esté disponible.");
      Alert.alert("Error", "No se pudo abrir el menú lateral.");
    }
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleMenuPress}>
        <Icon name="menu" type="material" size={35} />
      </TouchableOpacity>

      <TouchableOpacity onPress={goHome}>
        <Avatar source={avatar} size="medium" />
      </TouchableOpacity>

      <TouchableOpacity onPress={logOut}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60, 
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  logoutText: {
    fontSize: 16,
    color: "#007bff",
  },
});

export default Header;
