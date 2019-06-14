import { GET_CHART_DATA, GET_BATTLEFIELD_DATA } from "../actions/types";

const initialState = {
  gdpdata: [],
  battlefielddata: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CHART_DATA:
      return {
        gdpdata: action.payload
      };

    case GET_BATTLEFIELD_DATA:
      return {
        battlefielddata: action.payload
      };

    default:
      return state;
  }
}
