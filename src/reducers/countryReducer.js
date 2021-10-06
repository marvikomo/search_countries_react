import {
  GET_COUNTRY,
  SET_LOADING,
  GET_COUNTRY_ERROR,
  SEARCH_COUNTRY,
  CLEAR_COUNTRY,
  ADD_LIST,
} from "../actions/types";
const initialState = {
  countries: [],
  list: [],
  current: null,
  loading: false,
  error: null,
  filtered: [],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };

    case ADD_LIST:
      return {
        ...state,
        list: [action.payload, ...state.list],
        loading: false,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        filtered: state.countries.filter((country) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return country.name.match(regex);
        }),
      };
    case CLEAR_COUNTRY:
      return {
        ...state,
        filtered: [],
      };
    case GET_COUNTRY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default countryReducer;
