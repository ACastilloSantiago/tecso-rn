import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login.jsx";

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
    <NavigationContainer>
      <Stack.Navigator>
        {Routes.map((route, key) => (
          <Stack.Screen name={route.name} component={route.component} options={route.options} key={key} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
