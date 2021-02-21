import useTranslation from "next-translate/useTranslation";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSwitcher = () => {
  const { t } = useTranslation("common");
  const { theme, setTheme } = useTheme();

  const themeIcon = theme === "light" ? "moon" : "sun";
  return (
    <div
      className="d-flex align-items-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="icon">
        <FontAwesomeIcon icon={["fas", themeIcon]} />
      </div>
      <span className="d-lg-none ml-2">{t("change-theme")}</span>
    </div>
  );
};

export default ThemeSwitcher;
