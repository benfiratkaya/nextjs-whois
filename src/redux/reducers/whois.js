import * as t from "../types/whois";

const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null,
};
const whoisReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.FETCH_WHOIS_PENDING:
      return {
        ...state,
        fetching: true,
        fetched: false,
        data: [],
        error: [],
      };
    case t.FETCH_WHOIS_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        data: [],
        error: action.payload,
      };
    case t.FETCH_WHOIS_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload,
        error: [],
      };
    default:
      return state;
  }
};

export default whoisReducer;
