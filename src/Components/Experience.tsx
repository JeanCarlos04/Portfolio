import { useContext } from "react";
import { texts } from "../i18n/texts";
import { LanguageContext } from "../Context/LanguageContext";
import { experience } from "../dataComponents/experience.data";
import { ThemeContext } from "../Context/ThemeContext";
export function Experience() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const T = texts[language];

  return (
    <section id="sectionExperience" className="sectionContainer">
      <h1 className="h1SectionTitle">
        {T.home.tituloExperiencia}{" "}
        <img
          alt="Suitcase Icon"
          className="sectionTitleIcon"
          src={
            theme === "light"
              ? "/svg/icons/briefcase.svg"
              : "/svg/icons/briefcase-yellow.svg"
          }
        />
      </h1>
      <ul className="ulExperience">
        {experience.map((descriptions) => {
          return (
            <li className="liExperience" key={descriptions.id}>
              {language === "es" ? (
                <p className="p-Experiencie">{descriptions.text}</p>
              ) : (
                <p className="p-Experiencie">{descriptions.textEN}</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
