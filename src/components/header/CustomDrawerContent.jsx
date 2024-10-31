import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"; 
import { useDispatch } from "react-redux"; 
import { logout } from "../../features/auth/authSlice.js";  
import Usuario from "./Usuario.jsx";




// Componente personalizado para el contenido del Drawer (solo muestra "Logout")
function CustomDrawerContent({ navigation }) {
    const dispatch = useDispatch();
  
    const handleLogout = () => {
      dispatch(logout());
      navigation.navigate("Login");
    };
  
    return (
      <View style={styles.drawerContent}>
        <Usuario/>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default CustomDrawerContent;

  const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 80,
      paddingTop:60,
      paddingLeft:10,
    },
    logoutButton: {
        width:100,
      backgroundColor: "#FF5733",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    logoutText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "bold",
    },
  });