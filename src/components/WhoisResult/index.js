import { connect } from "react-redux";

import WhoisResultLoading from "../WhoisResultLoading";
import WhoisResultData from "../WhoisResultData";

const WhoisResult = ({ whois }) => {
  return (
    <div className="mt-4" id="whois-result">
      {whois.fetching ? (
        <WhoisResultLoading />
      ) : whois.data ? (
        <WhoisResultData result={whois.data} />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    whois: state.whois,
  };
};

export default connect(mapStateToProps)(WhoisResult);
