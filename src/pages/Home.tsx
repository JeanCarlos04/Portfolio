import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";
import { Projects } from "../Components/Projects";
import { Experience } from "../Components/Experience";
import { Skills } from "../Components/Skills";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../Context/ThemeContext";
import i18n from "../config/i18next.config";
import WhatsappBtn from "../Components/WhatsappBtn";
import Anchor from "../Components/Anchor";

export function Home() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <Nav />
      <section className="sectionPresentation">
        <img
          src="/Portfolio/imgs/FotoPersonal.webp"
          alt="Image photo about me"
          className="imgProfile"
        />
        <div className="divPresentation">
          <h1 className="h1Name">Jean C. Castillo Fernández</h1>
          {i18n.language === "es" ? (
            <p className="paragraphPresentation">
              Ingeniero de software con
              <span className="paragraphSpan"> 3 años de experiencia </span>
              desarrollando aplicaciones web. Apasionado por la tecnología y los
              nuevos avances en el área.
            </p>
          ) : (
            <p className="paragraphPresentation">
              Software engineer with
              <span className="paragraphSpan"> 3 years of experience </span>
              developing web applications. Passionate about technology and the
              new advances in the field.
            </p>
          )}

          <div className="btnsDiv">
            <Anchor
              contentType="img"
              href="#footerSection"
              text={t("home.botonContactame")}
              imgClass="gmailIcon"
              imgAlt="Gmail Logo"
              imgLightMode="/Portfolio/svg/icons/gmail-white.svg"
              imgDarkMode="/Portfolio/svg/icons/gmail-Black.svg"
            />

            <Anchor
              blank="_blank"
              contentType="img"
              href="https://www.linkedin.com/in/jean-carlos-castillo-fernandez-76a95633b/"
              text="LinkendIn"
              imgClass="anchorIcon"
              imgAlt="Linkedin Logo"
              imgLightMode="/Portfolio/svg/icons/linkedinWhite.svg"
              imgDarkMode="/Portfolio/svg/icons/linkedinBlack.svg"
            />

            <Anchor
              blank="_blank"
              contentType="img"
              href="https://github.com/JeanCarlos04"
              text="Github"
              imgClass="anchorIcon"
              imgAlt="Github Logo"
              imgLightMode="/Portfolio/svg/icons/githubWhite.svg"
              imgDarkMode="/Portfolio/svg/icons/github.svg"
            />
          </div>
        </div>
      </section>

      <Experience />
      <Projects />
      <Skills />

      <section id="sectionAboutMe" className="sectionContainer">
        <h1 className="h1SectionTitle">
          {t("home.tituloSobreMi")}{" "}
          <img
            className="sectionTitleIcon"
            alt="User Icon"
            src={
              theme === "light"
                ? "/Portfolio/svg/icons/user.svg"
                : "/Portfolio/svg/icons/user-yellow.svg"
            }
          />
        </h1>
        <div className="divAboutMe">
          {i18n.language === "es" ? (
            <p className="p-aboutMe">
              Jean Carlos Castillo Fernández,
              <span className="spanAboutMe">
                {" "}
                estudiante de Ingeniería de Software
              </span>{" "}
              en el Instituto Técnologico de las Americas ITLA. Especializado
              en el{" "}
              <span className="spanAboutMe">
                desarrollo de aplicaciones web, con 3 años de experiencia
              </span>{" "}
              en el área.
              <br />
              <br />
              Apasionado por las nuevas tecnologías, con una mentalidad creativa y orientada a la innovación. Mi objetivo es continuar fortaleciendo mis conocimientos y habilidades, desarrollando soluciones web modernas, seguras y eficientes, mientras aporto valor en cada proyecto en el que participo.
            </p>
          ) : (
            <p className="p-aboutMe">
              Jean Carlos Castillo Fernández,
              <span className="spanAboutMe">
                {" "}
                Software Engineering student
              </span>{" "}
              at the Instituto Tecnológico de las Américas (ITLA). I specialize in{" "}
              <span className="spanAboutMe">
                web application development, with 3 years of experience
              </span>{" "}
              in the field.
              <br />
              <br />
              I am passionate about new technologies, with a creative mindset and a strong focus on innovation. My goal is to continue strengthening my knowledge and skills, developing modern, secure, and efficient web solutions, while contributing value to every project I take part in.
            </p>
          )}

          <img
            className="AboutMeFoto"
            alt="An image about me"
            src="/Portfolio/imgs/AboutMeFoto.webp"
          />
        </div>
      </section>

      <WhatsappBtn />
      <Footer />
    </main>
  );
}
