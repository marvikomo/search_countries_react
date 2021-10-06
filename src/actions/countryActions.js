import {
  GET_COUNTRY,
  SET_LOADING,
  ADD_LIST,
  GET_COUNTRY_ERROR,
  SEARCH_COUNTRY,
  CLEAR_COUNTRY,
} from "./types";
import axios from "axios";
import {base_url} from "../config/base_url"

export const getCountries = () => async (dispatch) => {
  //getState is an additional parameter for the functin that can be added

  //set loading to true
  setLoading();
  try {
    const data = await axios({
      method: "GET",
      url: `${base_url}/api/countries`,
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });

    dispatch({
      type: GET_COUNTRY,
      payload: data.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COUNTRY_ERROR,
      payload: error.response.data,
    });
  }
};

//Search logs
export const searchCountry = (text) => (dispatch) => {
  //getState is an additional parameter for the functin that can be added

  dispatch({
    type: SEARCH_COUNTRY,
    payload: text,
  });
};

//Clear Log
export const clearCountry = () => (dispatch) => {
  dispatch({
    type: CLEAR_COUNTRY,
  });
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const addList = (list) => {
  setLoading();
  return {
    type: ADD_LIST,
    payload: list,
  };
};
