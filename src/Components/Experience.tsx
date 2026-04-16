import { useContext } from "react";
import { experience } from "../dataComponents/experience.data";
import { ThemeContext } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";
import i18n from "../config/i18next.config";

export function Experience() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <section id="sectionExperience" className="sectionContainer">
      <h1 className="h1SectionTitle">
        {t("home.tituloExperiencia")}{" "}
        <img
          alt="Suitcase Icon"
          className="sectionTitleIcon"
          src={
            theme === "light"
              ? "/Portfolio/svg/icons/briefcase.svg"
              : "/Portfolio/svg/icons/briefcase-yellow.svg"
          }
        />
      </h1>
      <ul className="ulExperience">
        {experience.map((descriptions) => {
          return (
            
            <div className="liExperienceContainer">
              {descriptions != experience[0] && ( 
                <div className="experienceLineContainer">
                  <div className="experiencieLineDot"></div>
                  <div className="experienceLine"></div >
                  <div className="experiencieLineDot"></div>
                </div>
              )}
             
              <li className="liExperience" key={descriptions.id}>
                <div className="liDateContainer">
                <p className="liInitialDate">{descriptions.fechaInicio}</p>
                {descriptions.fechaFinal ? "/" : null}  
                <p className="liEndDate">{descriptions.fechaFinal}</p></div>
                {i18n.language === "es" ? (
                  <p className="p-Experience">{descriptions.text}</p>
                ) : (
                  <p className="p-Experience">{descriptions.textEN}</p>
                )}
              </li>
            </div>
            
          );
        })}
      </ul>
    </section>
  );
}
