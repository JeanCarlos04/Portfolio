import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";
import i18n from "../config/i18next.config";

export function Nav() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const navSections = (hrefName: string, traductionProperty: string) => {
    return (
      <a href={hrefName} className="anchorNav">
        {t(traductionProperty)}
      </a>
    );
  };

  return (
    <nav className="navContainer">
      <div className="anchorDiv">
        {navSections("#sectionExperience", "nav.anchorExperiencia")}
        {navSections("#sectionProjects", "nav.anchorProyectos")}
        {navSections("#sectionAboutMe", "nav.anchorSobreMi")}
        {navSections("#footerSection", "nav.anchorContactame")}

        <img
          className="sectionTitleIcon"
          alt="Laptop icon"
          src={
            theme === "light"
              ? "/Portfolio/svg/icons/laptop-code-solid.svg"
              : "/Portfolio/svg/icons/laptopWhite.svg"
          }
        />
      </div>
      <div className="btnDiv">
        <button
          aria-label="Change light mode"
          onClick={toggleTheme}
          className="btnLightMode"
        >
          {" "}
          <img
            className="sectionTitleIcon"
            alt="Moon icon"
            src={
              theme === "light"
                ? "/Portfolio/svg/icons/moon-solid.svg"
                : "/Portfolio/svg/icons/sun-solid.svg"
            }
          />
        </button>
        <button
          aria-label="Change language"
          onClick={() =>
            i18n.language === "es"
              ? i18n.changeLanguage("en")
              : i18n.changeLanguage("es")
          }
          className="btnLanguageMode"
        >
          <img
            className="imgLanguage"
            alt={i18n.language === "es" ? "Spain flag" : "United States flag"}
            src={
              i18n.language === "es"
                ? "/Portfolio/svg/SpainFlag.webp"
                : "/Portfolio/svg/USA.webp"
            }
          />
        </button>
      </div>
    </nav>
  );
}
