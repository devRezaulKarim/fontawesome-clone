import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const iconSlice = createSlice({
  name: "icons",
  initialState: {
    isLoading: false,
    error: "",
    icons: {},
    uiIcons: [],
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
    handleUiIcons: (state, action) => {
      return {
        ...state,
        uiIcons: action.payload,
      };
    },
  },
});

export const { handleLoading, handleError, getIcons, handleUiIcons } =
  iconSlice.actions;

export default iconSlice.reducer;

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(handleLoading(true));
    try {
      const response = await axios.get(
        "https://rezauls-json-server.vercel.app/fontawesome-icons"
      );

      dispatch(getIcons(response.data));
      dispatch(handleLoading(false));
    } catch (error) {
      dispatch(handleError(error.message));
      dispatch(handleLoading(true));
    }
  };
};
