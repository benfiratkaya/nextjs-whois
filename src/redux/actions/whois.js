import appConfig from "../../../config/app";
import * as t from "../types/whois";

export const fetchWhois = (domains) => (dispatch) => {
  return dispatch({
    type: t.FETCH_WHOIS,
    payload: fetch(`${appConfig.URL}/api/whois`, {
      body: JSON.stringify({
        domains,
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((response) => response.json()),
  });
};
