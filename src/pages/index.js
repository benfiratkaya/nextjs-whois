import useTranslation from "next-translate/useTranslation";
import Layout from "../layouts/Default";
import WhoisSearch from "../components/WhoisSearch";
import WhoisResult from "../components/WhoisResult";

const Index = () => {
  const { t } = useTranslation("common");
  return (
    <Layout title={t("title")}>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h1 className="text-center mb-5">{t("h1")}</h1>
            <WhoisSearch />
            <WhoisResult />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
