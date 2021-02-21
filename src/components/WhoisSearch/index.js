import useTranslation from "next-translate/useTranslation";
import WhoisSingleSearch from "../WhoisSingleSearch";
import WhoisBulkSearch from "../WhoisBulkSearch";

const WhoisSearch = () => {
  const { t } = useTranslation("whois-search");
  return (
    <div className="card">
      <ul className="nav nav-tabs nav-fill" id="whoisTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="singleSearch-tab"
            data-toggle="tab"
            href="#singleSearch"
            role="tab"
            aria-controls="singleSearch"
            aria-selected="true"
          >
            {t("tab-single")}
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="bulkSearch-tab"
            data-toggle="tab"
            href="#bulkSearch"
            role="tab"
            aria-controls="bulkSearch"
            aria-selected="false"
          >
            {t("tab-bulk")}
          </a>
        </li>
      </ul>
      <div className="card-body">
        <div className="tab-content" id="whoisTabContent">
          <div
            className="tab-pane fade show active"
            id="singleSearch"
            role="tabpanel"
            aria-labelledby="singleSearch-tab"
          >
            <WhoisSingleSearch />
          </div>
          <div
            className="tab-pane fade"
            id="bulkSearch"
            role="tabpanel"
            aria-labelledby="bulkSearch-tab"
          >
            <WhoisBulkSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoisSearch;
