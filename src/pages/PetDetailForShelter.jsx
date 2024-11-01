import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFetchPetByIdForShelter } from "../hooks/";
import  DetailMain  from "../components/Detail/DetailMain";
import { DetailSlider } from "../components/Detail/DetailSlider";
import { HeaderButton } from "../components/elements/HeaderButton";

import arrow from "../../assets/images/arrow-left.jpg";
import edit from "../../assets/images/edit.jpg";

export const PetDetailForShelter = ({ route }) => {
  // * Uso de paramas
  const { id } = route.params;

  const { pet } = useFetchPetByIdForShelter(id);
  // *

  // const { pet } = useFetchPetByIdForShelter(5);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderButton>
          <Image source={arrow} width={24} height={24} />
        </HeaderButton>
        <HeaderButton /*  to='form_pet' */>
          <Image source={edit} width={24} height={24} />
        </HeaderButton>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <DetailSlider pet={pet} />
        <DetailMain {...pet} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    top: 0,
    bottom: 0,
  },
  header: {
    position: "absolute",
    top: 44,
    start: 0,
    end: 0,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  scrollContainer: {},
});
