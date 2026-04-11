import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";
import { skills } from "../dataComponents/skills.data";

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
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="skillsDiv">
              <p className="skillsTitle">{skill.alt}</p>
              <img
                src={
                  skill.alt === "GitHub" && theme === "dark"
                    ? "/Portfolio/svg/icons/githubWhite.svg"
                    : skill.src
                }
                alt={skill.alt}
                key={skill.id}
                className="logoSkills"
                style={{ color: skill.color }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
