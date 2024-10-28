import circlesUp from "../../assets/images/select_user/circles-up.png";
import circlesDown from "../../assets/images/select_user/circles-down.png";
import logoMascW from "../../assets/images/select_user/int-logo-mascotero.png";
import logoProtecG from "../../assets/images/select_user/int-logo-protectores.png";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

function UserSelect({ navigation }) {
  const handleClick = (props) => {
    if (props === "pet") {
      navigation.navigate("register_pet_owner");
    } else if (props === "protector") {
      navigation.navigate("register_shelter");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleClick("pet")} style={styles.touchableLeft}>
          <Image source={circlesUp} style={styles.circlesUp} />
          <View style={styles.alignCenter}>
            <View style={styles.logoMascotero}>
              <View style={styles.circlePet}>
                <Image source={logoMascW} style={styles.logoInsideCircle} />
              </View>
              <Text style={styles.textMascotero}>Mascotero</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleClick("protector")} style={styles.touchableRight}>
          <View style={{ ...styles.alignCenter }}>
            <View style={{ ...styles.logoProtectora, marginBottom: 21 }}>
              <View style={styles.circle}>
                <Image source={logoProtecG} style={styles.logoInsideCircle} />
              </View>
              <Text style={styles.textProtectora}>Protectora</Text>
            </View>
          </View>
          <Image source={circlesDown} style={styles.circlesDown} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  touchableLeft: {
    width: "100%",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    position: "relative",
    top: 120,
    left: 20,
  },
  touchableRight: {
    width: "100%",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    position: "relative",
    right: 50,
    bottom: 120,
  },
  alignCenter: {
    flexDirection: "column",
    alignItems: "center",
  },
  logoMascotero: {
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "3px 5px 10px rgba(0,0,0,0.24)",
  },
  textMascotero: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  logoProtectora: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "3px 5px 10px rgba(0,0,0,0.24)",
  },
  textProtectora: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  circle: {
    width: 200,
    height: 200,
    backgroundColor: "#F08318",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  circlePet: {
    width: 200,
    height: 200,
    backgroundColor: "#F3E9EC",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  logoInsideCircle: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  circlesUp: {
    width: 280,
    height: 280,
    position: "absolute",
    left: 30,
    top: -120,
  },
  circlesDown: {
    width: 230,
    height: 230,
    position: "absolute",
    right: -30,
    bottom: -120,
  },
});

export default UserSelect;
