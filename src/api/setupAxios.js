import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // AsyncStorage en lugar de localStorage
import { EXPO_API_URL_GENERAL, EXPO_API_SERVICE_ID, EXPO_API_TEMPLATE_ID, EXPO_API_PUBLIC_KEY, EXPO_API_URL_CLOUDINARY, EXPO_API_UPLOAD_PRESET } from "@env";

const instance = axios.create({
  baseURL: EXPO_API_URL_GENERAL,
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

const instanceCloudinary = axios.create({
  baseURL: EXPO_API_URL_CLOUDINARY,
  timeout: 3000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

const returnConfigToken = async () => ({
  headers: {
    Authorization: `bearer ${await AsyncStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export const GetGeneral = async (path) => {
  try {
    let config = await returnConfigToken();
    const respuesta = await instance.get(path, config);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
};

export const PostGeneral = async (path, body) => {
  try {
    let config = await returnConfigToken();
    const respuesta = await instance.post(path, body, config);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
};

export const PutGeneral = async (path, body) => {
  try {
    let config = await returnConfigToken();
    const respuesta = await instance.put(path, body, config);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
};

// Configuracion axios login.
export const login = async (values) => {
  try {
    const response = await instance.post(`Authentication/token`, {
      user: values.email,
      password: values.password,
    });
    if (response.data && response.data.token) {
      const token = response.data.token;
      const user = response.data.usuario;
      await AsyncStorage.setItem("token", token);
      return { token, user };
    } else {
      throw new Error("No se recibio el token");
    }
  } catch (error) {
    throw error;
  }
};

export const registerNewShelter = async (values) => {
  delete values.password2;
  const { idProvincia, idCiudad, calle, numero, piso, departamento, password1: password, ...rest } = values;

  const dataToSend = {
    ...rest,
    password,
    direccion: {
      idCiudad: JSON.parse(idCiudad.value).id,
      calle: calle,
      numero: numero,
      piso: piso,
      departamento: departamento,
      provincia: JSON.parse(idProvincia.value),
      ciudad: JSON.parse(idCiudad.value),
    },
  };

  try {
    const response = await instance.post(`Protectoras/registro`, dataToSend);
    return response.data;
  } catch (error) {
    console.error("Error al registrar protectora:", error);
    throw error;
  }
};

// Configuaracion de get User axios.
export const getUser = async (id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await instance.get(`Mascoteros/${id}`, config);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error al buscar mascotero:", error);
    throw error;
  }
};

// Configuración de get Pets axios
export const getPets = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await instance.get(`Mascotas`, config);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error al buscar mascotas:", error);
    throw error;
  }
};

export const getShelters = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await instance.get(`Protectoras`, config);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error al buscar mascotas:", error);
    throw error;
  }
};

export const getProvinces = async () => {
  try {
    const response = await instance.get("Combos/Provincias");
    return response.data;
  } catch (error) {
    console.error("Error al pedir provincias:", error);
  }
};

export const getCities = async (province) => {
  try {
    const response = await instance.get(`Combos/Ciudades/${province}`);
    return response.data;
  } catch (error) {
    console.error("Error al pedir ciudades:", error);
  }
};

export const RegisterPet = async (path, body) => {
  try {
    const response = await instance.post(path, body);
    return response.data;
  } catch (error) {
    console.log("ERRORSITO", JSON.stringify(error));
    throw error.response.data.errors;
  }
};

export const SendEmail = async (form) => {
  try {
    let response = await emailjs.sendForm(EXPO_API_SERVICE_ID, EXPO_API_TEMPLATE_ID, form, EXPO_API_PUBLIC_KEY); // Cambiado a EXPO_ variables
    return response;
  } catch (error) {
    throw error;
  }
};

export const createImageCloudinary = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", EXPO_API_UPLOAD_PRESET); // Cambiado a EXPO_API_UPLOAD_PRESET
    let response = await instanceCloudinary.post("image/upload", formData);
    let secureUrl = response.data.secure_url;
    return secureUrl;
  } catch (error) {
    throw error;
  }
};

// GetById de mascota
export const getPetById = async (id) => {
  const token = await AsyncStorage.getItem("token"); // AsyncStorage en lugar de localStorage
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await instance.get(`Mascotas/${id}`, config);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error al buscar mascota:", error);
    throw error;
  }
};
