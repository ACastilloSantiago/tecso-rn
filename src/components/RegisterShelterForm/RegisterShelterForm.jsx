import { View, StyleSheet, FlatList } from "react-native";
import { Formik } from "formik";
import {Input} from "../elements/Input";
import {Select} from "../elements/Select";
import {Button} from "../Button";
import { initialValues, validationSchema, inputs1, inputs2 } from "../../data/RegisterShelter";
import { useFetchAddress } from "../../hooks/useFetchAddress";
import { registerNewShelter } from "../../api/setupAxios";

export const RegisterShelterForm = ({ navigation }) => {
  const { provinces, cities, setSelectedProvinces } = useFetchAddress();

  const provinceOptions = !!provinces
    ? provinces.map(({ id, nombre }) => ({
        value: JSON.stringify({ id, nombre }),
        label: nombre,
      }))
    : [];

  const cityOptions = !!cities.length
    ? cities.map(({ id, nombre, idProvincia }) => ({
        value: JSON.stringify({ id, nombre, idProvincia }),
        label: nombre,
      }))
    : [];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          await registerNewShelter(values);
          resetForm();
          navigation.navigate("ValidationAccount");
        } catch (error) {
          navigation.navigate("EmailRegistered");
          console.log(error);
        }
      }}
    >
      {({ setFieldValue, handleSubmit }) => (
        <FlatList
          data={[{}]} // Añade un objeto para permitir el uso de FlatList
          renderItem={() => (
            <View>
              {inputs1.map((props) => (
                <Input key={props.name} {...props} />
              ))}
              <Select
                name="idProvincia"
                placeholder="Provincia*"
                options={provinceOptions}
                noOption={"No hay provincias disponibles"}
                customOnChange={(selectedOption) => {
                  if (selectedOption) {
                    const selectedProvince = JSON.parse(selectedOption);
                    setSelectedProvinces(selectedProvince.id);
                    setFieldValue("idProvincia", selectedOption);
                    setFieldValue("idCiudad", null);
                  } else {
                    setSelectedProvinces("");
                    setFieldValue("idProvincia", null);
                  }
                }}
              />
              <Select
                name="idCiudad"
                placeholder="Ciudad*"
                options={cityOptions}
                noOption={"Seleccione una ciudad"}
                customOnChange={(selectedOption) => {
                  if (selectedOption) {
                    setFieldValue("idCiudad", selectedOption);
                  } else {
                    setFieldValue("idCiudad", null);
                  }
                }}
              />
              <Input name="calle" placeholder="Calle*" />
              <View style={styles.row}>
                <View style={{ flex: 1 }}>
                  <Input name="numero" placeholder="Número*" type="number" />
                </View>
                <View style={{ flex: 1 }}>
                  <Input name="piso" placeholder="Piso" />
                </View>
              </View>
              {inputs2.map((props) => (
                <Input key={props.name} {...props} />
              ))}
              <Button onPress={handleSubmit} size="max">
                Registrarme
              </Button>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
});
