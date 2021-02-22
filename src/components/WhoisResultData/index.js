import useTranslation from "next-translate/useTranslation";
import moment from "moment";

const WhoisResultData = ({ result }) => {
  const { t } = useTranslation("whois-result");

  return (
    <div>
      {result.map((data) =>
        data.error ? (
          <div className="card mb-4" key={data.domainName}>
            <div className="card-header bg-warning text-dark">
              {t("title", { domain: data.domainName })}
            </div>
            <div className="card-body">
              <div className="alert bg-danger text-white mb-0">
                {data.message}
              </div>
            </div>
          </div>
        ) : (
          <div className="card mb-4" key={data.domainName}>
            <div
              className={
                "card-header text-white " +
                (data.isAvailable ? "bg-success" : "bg-danger")
              }
            >
              {t("title", { domain: data.domainName })}
            </div>
            <div className="card-body">
              {data.isAvailable ? (
                <div className="alert bg-success text-white mb-0">
                  {t("available")}
                </div>
              ) : (
                <div>
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th scope="row" className="border-0">
                            {t("status")}
                          </th>
                          <td className="border-0">
                            <span className="badge badge-danger">
                              {t("unavailable")}
                            </span>
                          </td>
                        </tr>
                        {data.creationDate && (
                          <tr>
                            <th scope="row">{t("register-date")}</th>
                            <td>
                              {moment(data.creationDate).format("MM/DD/YYYY")}
                            </td>
                          </tr>
                        )}
                        {data.updatedDate && (
                          <tr>
                            <th scope="row">{t("update-date")}</th>
                            <td>
                              {moment(data.updatedDate).format("MM/DD/YYYY")}
                            </td>
                          </tr>
                        )}
                        {data.expirationDate && (
                          <tr>
                            <th scope="row">{t("expiry-date")}</th>
                            <td>
                              {moment(data.expirationDate).format("MM/DD/YYYY")}
                            </td>
                          </tr>
                        )}
                        {data.expirationDate && (
                          <tr>
                            <th scope="row">{t("remaining-time")}</th>
                            <td>
                              {moment(data.expirationDate).diff(
                                moment(),
                                "days"
                              )}
                            </td>
                          </tr>
                        )}
                        {data.registrar && (
                          <tr>
                            <th scope="row">{t("registrar")}</th>
                            <td>{data.registrar}</td>
                          </tr>
                        )}
                        {data.nameServers && (
                          <tr>
                            <th scope="row">{t("nameservers")}</th>
                            <td>
                              {data.nameServers.map((nameServer) => (
                                <span className="d-block" key={nameServer}>
                                  {nameServer}
                                </span>
                              ))}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  {data.raw && (
                    <pre className="whois-raw-result">{data.raw}</pre>
                  )}
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default WhoisResultData;
