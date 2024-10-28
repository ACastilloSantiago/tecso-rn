import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login.jsx";
import { store } from "./src/app/store.js";
import React from "react";
import { Provider } from "react-redux";
import PetRegistration from "./src/pages/RegisterPetOwner.jsx";
import UserSelect from "./src/pages/UserSelect.jsx";
import HomeMascotero from "./src/pages/HomePetOwner.jsx";
import HomeShelter from "./src/pages/HomeShelter.jsx";

const Stack = createNativeStackNavigator();

const Routes = [
  {
    name: "/",
    component: Login,
    options: { title: "Bienvenido" },
  },
  {
    name: "register_pet_owner",
    component: PetRegistration,
    options: { title: "Registrar mascotero" },
  },
  {
    name: "UserSelect",
    component: UserSelect,
    options: { title: "Seleccionar tipo de usuario" },
  },
  {
    name: "home_pet_owner",
    component: HomeMascotero,
    options: { title: "Home mascoter" },
  },
  {
    name: "home_Shelter",
    component: HomeShelter,
    options: { title: "Home mascotero" },
  },
];

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {Routes.map((route, key) => (
            <Stack.Screen name={route.name} component={route.component} options={route.options} key={key} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
