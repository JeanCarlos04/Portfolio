import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { texts } from "../i18n/texts";
import { LanguageContext } from "../Context/LanguageContext";

export function Nav() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const T = texts[language].nav;

  return (
    <nav className="navContainer">
      <div className="anchorDiv">
        <a href="#sectionExperience" className="anchorNav">
          {T.anchorExperiencia}
        </a>
        <a href="#sectionProjects" className="anchorNav">
          {T.anchorProyectos}
        </a>
        <a href="#sectionAboutMe" className="anchorNav">
          {T.anchorSobreMi}
        </a>
        <a href="#footerSection" className="anchorNav">
          {T.anchorContactame}
        </a>
        <img
          className="sectionTitleIcon"
          alt="Laptop icon"
          src={
            theme === "light"
              ? "/svg/icons/laptop-code-solid.svg"
              : "/svg/icons/laptopWhite.svg"
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
                ? "/svg/icons/moon-solid.svg"
                : "/svg/icons/sun-solid.svg"
            }
          />
        </button>
        <button
          aria-label="Change language"
          onClick={toggleLanguage}
          className="btnLanguageMode"
        >
          <img
            className="imgLanguage"
            alt={language === "es" ? "Spain flag" : "United States flag"}
            src={language === "es" ? "/svg/SpainFlag.webp" : "/svg/USA.webp"}
          />
        </button>
      </div>
    </nav>
  );
}
