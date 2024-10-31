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
import CustomDrawerContent from "./src/components/header/CustomDrawerContent.jsx"; 


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


// Configuración del Stack principal para todas las rutas navegables
function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="UserSelect" component={UserSelect} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterPetOwner" component={PetRegistration} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterShelter" component={RegisterShelter} options={{ headerShown: false }} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
      <Stack.Screen name="HomePetOwner" component={HomeMascotero} options={{ headerShown: false }} />
      <Stack.Screen name="HomeShelter" component={HomeShelter} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Configuración del Drawer que solo muestra Logout
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Usa el contenido personalizado
    >
      <Drawer.Screen
        name="Main"
        component={MainStack}
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
/* const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomePetOwnerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home_pet_owner"
        component={HomeMascotero}
        options={{ headerShown: false }}
      />
     
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
      <NavigationContainer style={styles.container}>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}
 */