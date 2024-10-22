import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Funciones utilitarias para manejar AsyncStorage
const getWishlist = async () => {
  try {
    const wishlist = await AsyncStorage.getItem('wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
  } catch (error) {
    console.error('Error al obtener la wishlist:', error);
    return [];
  }
};

const saveWishlistToStorage = async (wishlist) => {
  try {
    await AsyncStorage.setItem('wishlist', JSON.stringify(wishlist));
  } catch (error) {
    console.error('Error al guardar la wishlist:', error);
  }
};

// Cargar el estado inicial de AsyncStorage de forma asíncrona
let initialState = [];
(async () => {
  initialState = await getWishlist();
})();

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload); // Añade si no está en la wishlist
        saveWishlistToStorage(state); // Guarda en AsyncStorage
      }
    },
    removeFromWishlist: (state, action) => {
      const newState = state.filter(item => item !== action.payload);
      saveWishlistToStorage(newState); // Guarda el nuevo estado en AsyncStorage
      return newState; // Elimina si está en la wishlist
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
