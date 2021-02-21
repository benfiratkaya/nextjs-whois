import useTranslation from "next-translate/useTranslation";
import moment from "moment";

const WhoisResultData = ({ result }) => {
  const { t } = useTranslation("whois-result");

  return (
    <div>
      {result.map((data) => (
        <div className="card mb-3" key={data.domain}>
          <div className="card-header">
            {t("title", { domain: data.domain })}
          </div>
          <div className="card-body">
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
                <tr>
                  <th scope="row">{t("register-date")}</th>
                  <td>{moment(data.creationDate).format("MM/DD/YYYY")}</td>
                </tr>
                <tr>
                  <th scope="row">{t("update-date")}</th>
                  <td>{moment(data.updatedDate).format("MM/DD/YYYY")}</td>
                </tr>
                <tr>
                  <th scope="row">{t("expiry-date")}</th>
                  <td>
                    {moment(data.registrarRegistrationExpirationDate).format(
                      "MM/DD/YYYY"
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">{t("remaining-time")}</th>
                  <td>
                    {moment(data.registrarRegistrationExpirationDate).diff(
                      moment(),
                      "days"
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">{t("registrar")}</th>
                  <td>
                    <a href={data.registrarUrl} target="_blank" rel="nofollow">
                      {data.registrar}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <pre className="whois-raw-result">{data.rawData}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhoisResultData;
