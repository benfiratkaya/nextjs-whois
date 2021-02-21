import useTranslation from "next-translate/useTranslation";
import LanguageSwitcher from "../LanguageSwitcher/index";

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="footer mt-auto py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md text-center text-md-left mb-3 mb-md-0">
            {t("copyright", { year: 2021 })}
          </div>
          <div className="col-12 col-md-auto text-center text-md-left">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
