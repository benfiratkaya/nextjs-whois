import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWhois } from "../../redux/actions/whois";

import useTranslation from "next-translate/useTranslation";

const WhoisSingleSearch = ({ fetchWhois }) => {
  const { t } = useTranslation("whois-search");
  const [singleSearchDomain, setSingleSearchDomain] = useState("");

  const getWhoisData = async (e) => {
    e.preventDefault();
    fetchWhois(singleSearchDomain);
  };

  return (
    <form onSubmit={getWhoisData}>
      <div className="input-group">
        <input
          type="text"
          name="domain"
          value={singleSearchDomain}
          onChange={(e) => setSingleSearchDomain(e.target.value)}
          className="form-control form-control-lg"
          placeholder={t("input-placeholder-single")}
        />

        <div className="input-group-append">
          <button type="submit" className="btn btn-lg btn-primary">
            {t("search")}
          </button>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWhois: bindActionCreators(fetchWhois, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(WhoisSingleSearch);
