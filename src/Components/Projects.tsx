import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { projects } from "../dataComponents/projects.data.ts";
import { useTranslation } from "react-i18next";
import i18n from "../config/i18next.config.ts";

export function Projects() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <section id="sectionProjects" className="sectionContainer">
      <h1 className="h1SectionTitle">
        {t("home.tituloProyectos")}{" "}
        <img
          className="sectionTitleIcon"
          alt="Code Icon"
          src={
            theme === "light"
              ? "/Portfolio/svg/icons/code-solid.svg"
              : "/Portfolio/svg/icons/code-yellow.svg"
          }
        />
      </h1>
      <div className="divprojects">
        {projects.map((project, index) => {
          return (
            <article
              key={project.id}
              className={`articleprojects ${index == 2 ? "span-2" : ""}`}
            >
              <div className="projectImgDiv">
                {project.img?.map((imgs) => {
                  return (
                    <img
                      key={imgs.name}
                      src={imgs.src}
                      alt={imgs.name}
                      className="projectImgs"
                    />
                  );
                })}
              </div>
              <div className="divProjectInfoContainer">
                <div className="divTitle-Btn">
                  <h2 className="projectTitle">{project.title}</h2>
                  <a
                    target="_blank"
                    href={project.code}
                    className="projectAnchorCode"
                  >
                    <img
                      className="anchorProjectIcon"
                      alt="Github Logo"
                      src={
                        theme === "light"
                          ? "/Portfolio/svg/icons/github.svg"
                          : "/Portfolio/svg/icons/githubWhite.svg"
                      }
                    />
                    Code
                  </a>
                </div>
                {i18n.language === "es" ? (
                  <p className="projectDescription">{project.description}</p>
                ) : (
                  <p className="projectDescription">{project.descriptionEN}</p>
                )}
                <div className="divTecnologieContainer">
                  {project.tecnologies.map((tecnologie) => {
                    return (
                      <div key={tecnologie.name} className="divTecnologieLogos">
                        <img
                          src={tecnologie.logo}
                          alt={tecnologie.name}
                          className="projectIcons"
                          style={{ color: tecnologie.color }}
                        />

                        <h2 className="tecnologieName">{tecnologie.name}</h2>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
