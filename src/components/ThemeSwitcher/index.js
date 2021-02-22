import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSwitcher = () => {
  const { t } = useTranslation("common");

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className="d-flex align-items-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="icon">
        <FontAwesomeIcon icon={["fas", theme === "light" ? "moon" : "sun"]} />
      </div>
      <span className="d-lg-none ml-2">{t("change-theme")}</span>
    </div>
  );
};

export default ThemeSwitcher;
