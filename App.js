import { StyleSheet, View } from "react-native";
import { Button } from "./src/components/Button";
export default function App() {
  return (
    <View style={styles.container}>
      <Button size="large" onPress={() => console.log("Hola Mundo!")}>
        Comenzar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
