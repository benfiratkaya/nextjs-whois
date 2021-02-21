import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWhois } from "../../redux/actions/whois";

import useTranslation from "next-translate/useTranslation";

const WhoisBulkSearch = ({ fetchWhois }) => {
  const { t } = useTranslation("whois-search");
  const [bulkSearchDomains, setBulkSearchDomains] = useState("");

  const getWhoisData = async (e) => {
    e.preventDefault();
    fetchWhois(bulkSearchDomains);
  };

  return (
    <form onSubmit={getWhoisData}>
      <textarea
        name="domains"
        rows="4"
        value={bulkSearchDomains}
        onChange={(e) => setBulkSearchDomains(e.target.value)}
        className="form-control mb-3"
        placeholder={t("input-placeholder-bulk")}
      ></textarea>

      <button type="submit" className="btn btn-lg float-right btn-primary">
        {t("search")}
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWhois: bindActionCreators(fetchWhois, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(WhoisBulkSearch);
