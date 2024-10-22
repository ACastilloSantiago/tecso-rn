import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginAPI } from '../../api/setupAxios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Acción asíncrona para manejar el login 
export const login = createAsyncThunk('auth/login', async (values, { rejectWithValue }) => {
  try {
    const response = await loginAPI(values);
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Funciones utilitarias para AsyncStorage
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Error al almacenar el dato:', e);
  }
};

const getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.error('Error al obtener el dato:', e);
    return null;
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Error al eliminar el dato:', e);
  }
};

// Función asíncrona para inicializar el estado desde AsyncStorage
const initializeAuthState = async () => {
  const token = await getData('token');
  const user = await getData('user');
  return {
    token: token || null,
    isAuthenticated: !!token,
    user: user ? JSON.parse(user) : null,
    loading: false,
    error: null,
  };
};

// Estado inicial de la autenticación (con promesas)
const initialStatePromise = initializeAuthState();

// Estado inicial usando valores predeterminados hasta que AsyncStorage cargue
const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      removeData('token');  // Elimina el token de AsyncStorage
      removeData('user');   // Elimina el usuario de AsyncStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload && action.payload.token && action.payload.user) {
          state.token = action.payload.token;
          state.isAuthenticated = true;
          state.user = action.payload.user;
          storeData('token', action.payload.token);  // Almacena el token en AsyncStorage
          storeData('user', JSON.stringify(action.payload.user));  // Almacena el usuario en AsyncStorage
        } else {
          state.token = null;
          state.isAuthenticated = false;
          state.user = null;
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Usuario o Password incorrecto';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
