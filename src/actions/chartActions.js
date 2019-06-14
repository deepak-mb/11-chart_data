import { GET_CHART_DATA, GET_BATTLEFIELD_DATA } from "./types";
import axios from "axios";

// Original data api: https://api.worldbank.org/countries/IND/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json

export const getChartData = () => async dispatch => {
  await axios
    .get(
      `https://gist.githubusercontent.com/deepak-mb/3969eb4a62efec51f6ccd653e73d187b/raw/170e228ecefcd34899dcb2bd4e24f32afdcd688d/India-GDP-Data.json`
    )
    .then(res => {
      //   console.log(res.data);
      dispatch({
        type: GET_CHART_DATA,
        payload: res.data
      });
    });
};

export const getBattlefieldData = () => async dispatch => {
  await axios.get(`https://api.bf4stats.com/api/onlinePlayers`).then(res => {
    // console.log(res.data);
    dispatch({
      type: GET_BATTLEFIELD_DATA,
      payload: res.data
    });
  });
};
