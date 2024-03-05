import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const iconSlice = createSlice({
  name: "icons",
  initialState: {
    isLoading: false,
    error: "",
    icons: [],
  },

  reducers: {
    handleLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    handleError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    getIcons: (state, action) => {
      return {
        ...state,
        icons: action.payload,
      };
    },
  },
});

export const { handleLoading, handleError, getIcons } = iconSlice.actions;

export default iconSlice.reducer;

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(handleLoading(true));
    try {
      const response = await axios.get(
        "https://rezauls-json-server.vercel.app/fontawesome-icons"
      );
      const solidIcons = response.data.solid;
      const regularIcons = response.data.regular;
      const lightIcons = response.data.light;
      const thinIcons = response.data.thin;
      const duotoneIcons = response.data.duotone;
      const brandIcons = response.data.brands;
      const allIcons = [
        ...solidIcons,
        ...regularIcons,
        ...lightIcons,
        ...thinIcons,
        ...duotoneIcons,
        ...brandIcons,
      ];
      dispatch(getIcons(allIcons));
      dispatch(handleLoading(false));
    } catch (error) {
      dispatch(handleError(error.message));
      dispatch(handleLoading(true));
    }
  };
};
