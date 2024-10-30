import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./src/app/store.js";
import Login from "./src/pages/Login.jsx";
import PetRegistration from "./src/pages/RegisterPetOwner.jsx";
import UserSelect from "./src/pages/UserSelect.jsx";
import HomeMascotero from "./src/pages/HomePetOwner.jsx";
import HomeShelter from "./src/pages/HomeShelter.jsx";
import { RegisterShelter } from "./src/pages/RegisterShelter.jsx";
import ForgetPassword from "./src/pages/ForgetPassword.jsx";
import Header from "./src/components/header/Header.jsx"; 

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomePetOwnerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home_pet_owner"
        component={HomeMascotero}
        options={{ headerShown: false }}
      />
      {/* Agrega más pantallas si es necesario */}
    </Stack.Navigator>
  );
}

function HomeShelterStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home_Shelter"
        component={HomeShelter}
        options={{ headerShown: false }}
      />
      {/* Agrega más pantallas si es necesario */}
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen
        name="/"
        component={Login}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="user_select"
        component={UserSelect}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="register_petOwner"
        component={PetRegistration}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="register_shelter"
        component={RegisterShelter}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="forget_password"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="HomePetOwner"
        component={HomePetOwnerStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="HomeShelter"
        component={HomeShelterStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}
