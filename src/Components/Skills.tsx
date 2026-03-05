import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { frontendSkills, tools } from "../dataComponents/skills.data";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <section className="sectionSkills">
      <h1 className="h1SectionTitle">
        {t("home.tituloHabilidades")}{" "}
        <img
          className="sectionTitleIcon"
          alt="Star Icon"
          src={
            theme === "light"
              ? "/Portfolio/svg/icons/star-solid.svg"
              : "/Portfolio/svg/icons/star-yellow.svg"
          }
        />
      </h1>
      <div className="divArticleContainer">
        <div className="titleSkillsContainer">
          <h1 className="titleSkills">{t("skills.habilidadesFrontend")}</h1>
          <article className="articleSkillContainer">
            {frontendSkills.map((skill) => {
              return (
                <img
                  src={skill.src}
                  alt={skill.alt}
                  key={skill.id}
                  className="logoSkills"
                  style={{ color: skill.color }}
                />
              );
            })}
          </article>
        </div>
        <div className="titleSkillsContainer">
          <h1 className="titleSkills">{t("skills.herramientas")}</h1>
          <article className="articleSkillContainer">
            {tools.map((skill) => {
              return (
                <div key={skill.id}>
                  {theme === "light" ? (
                    <img
                      src={skill.src}
                      alt={skill.alt}
                      key={skill.id}
                      className="logoSkills"
                    />
                  ) : (
                    <img
                      src={
                        skill.alt === "GitHub" ? skill.srcOtherColor : skill.src
                      }
                      alt={skill.alt}
                      key={skill.id}
                      className="logoSkills"
                    />
                  )}
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
}
