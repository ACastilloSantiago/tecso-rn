import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import DropDownPicker from "react-native-dropdown-picker";
import { ErrorMessage, useField } from "formik";

import { Arrow } from "./Arrow";
import { colors } from "../../../assets/styles/styles";

export const Select = ({ options, customOnChange = () => {}, placeholder, noOption = "Seleccione una opción", ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [open, setOpen] = useState(false);

  const handleChange = (item) => {
    if (!item) return;
    helpers.setValue(item.value);
    if (customOnChange) {
      customOnChange(item.value);
    }
  };

  return (
    <View style={styles.container}>
      <DropDownPicker value={field.value} onSelectItem={handleChange} closeOnBackPressed={true} textStyle={{ fontSize: 16 }} open={open} items={options} setOpen={setOpen} placeholder={placeholder || noOption} style={[styles.select, meta.touched && !!meta.error && styles.errorSelect]} placeholderStyle={[styles.placeholder, meta.touched && !!meta.error && { color: colors.systemError }]} selectedItemLabelStyle={styles.selectedItemLabel} labelStyle={styles.label} dropDownContainerStyle={styles.dropdownList} ArrowDownIconComponent={() => <Arrow variant="up" error={meta.touched && !!meta.error} />} ArrowUpIconComponent={() => <Arrow variant="down" error={meta.touched && !!meta.error} />} />
      <ErrorMessage name={props.name} component={Text} style={styles.errorMessage} />
    </View>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  customOnChange: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  select: {
    backgroundColor: colors.backgroundLightmodeSecondary,
    borderColor: "transparent",
    borderRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    zIndex: 0,
  },
  errorSelect: {
    borderColor: colors.systemError,
  },
  placeholder: {
    fontSize: 16,
    color: colors.brandNeutro01,
  },
  label: {
    fontSize: 16,
    color: colors.brandPrimary01,
  },
  selectedItemLabel: {
    fontSize: 16,
    color: colors.brandPrimary01,
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: colors.brandNeutro02,
    backgroundColor: colors.backgroundLightmodePrimary,
    marginTop: 4,
    borderRadius: 8,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
  },
  errorMessage: {
    color: colors.systemError,
    paddingLeft: 16,
  },
});
