import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import "flag-icon-css/css/flag-icon.min.css";

const LanguageSwitch = () => {
  const { t, lang } = useTranslation();
  const { asPath, locales } = useRouter();
  return (
    <div>
      <a
        className="dropdown-toggle"
        href="#"
        id="languageSwitchDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span
          className={`flag-icon flag-icon-${lang === "en" ? "us" : lang} mr-1`}
        ></span>
        {t(`languages:${lang}`)}
      </a>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="languageSwitch"
      >
        {locales.map((locale) => (
          <Link href={asPath} locale={locale} key={locale}>
            <a
              className={
                locale === lang ? "dropdown-item active" : "dropdown-item"
              }
            >
              {t(`languages:${locale}`)}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitch;
