import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./src/app/store.js";

import CustomDrawerContent from "./src/components/header/CustomDrawerContent.jsx";

import { PetDetailForPetOwner } from "./src/pages/PetDetailForPetOwner.jsx";
import { PetDetailForShelter } from "./src/pages/PetDetailForShelter.jsx";
import  AllPets  from "./src/pages/AllPets.jsx";
import  AllShelter  from "./src/pages/AllShelter.jsx";


import { PetDetailForShelter, EmailRegistered, ForgetPassword, HomeMascotero, HomeShelter, Login, PetDetailForPetOwner, PetRegistration, RegisterShelter, StartedScreen, SuccesScreen, UserSelect, ValidationAccount } from "./src/pages";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Configuración del Stack principal para todas las rutas navegables
function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Start" component={StartedScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UserSelect" component={UserSelect} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterPetOwner" component={PetRegistration} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterShelter" component={RegisterShelter} options={{ headerShown: false }} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
      <Stack.Screen name="HomePetOwner" component={HomeMascotero} options={{ headerShown: false }} />
      <Stack.Screen name="HomeShelter" component={HomeShelter} options={{ headerShown: false }} />
      <Stack.Screen name="PetDetailsShelter" component={PetDetailForShelter} options={{ headerShown: false }} />
      <Stack.Screen name="PetDetailsPetOwner" component={PetDetailForPetOwner} options={{ headerShown: false }} />

      <Stack.Screen name="AllPets" component={AllPets} options={{ headerShown: false }} />
      <Stack.Screen name="AllShelter" component={AllShelter} options={{ headerShown: false }} />

      <Stack.Screen name="EmailRegistered" component={EmailRegistered} options={{ headerShown: false }} />
      <Stack.Screen name="SuccesScreen" component={SuccesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ValidationAccount" component={ValidationAccount} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

// Configuración del Drawer que solo muestra Logout
function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}> 
      <Drawer.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
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
