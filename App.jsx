import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login.jsx";
import { store } from "./src/app/store.js";
import React from "react";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

const Routes = [
  {
    name: "/",
    component: Login,
    options: { title: "Bienvenido" },
  },
  {
    name: "register_pet_owner",
    component: Login,
    options: { title: "Registrar mascotero" },
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
