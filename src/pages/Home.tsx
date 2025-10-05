// import { FaLinkedin, FaGithub, FaUserCheck, FaEnvelope } from "react-icons/fa";
import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";
import { Projects } from "../Components/Projects";
import { Experience } from "../Components/Experience";
import { Skills } from "../Components/Skills";
import { useContext } from "react";
import { texts } from "../i18n/texts";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";

export function Home() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const T = texts[language];

  console.log("renderizado!");

  return (
    <main>
      <Nav />
      <section className="sectionPresentation">
        <img
          src="/svg/FotoPersonal.webp"
          alt="Image photo about me"
          className="imgProfile"
        />
        <div className="divPresentation">
          <h1 className="h1Name">Jean C. Castillo Fernández</h1>
          {language === "es" ? (
            <p className="paragraphPresentation">
              Ingeniero de software con{" "}
              <span className="paragraphSpan"> 1 año de experiencia</span>{" "}
              desarrollando aplicaciones web. Apasionado por la tecnología y los
              nuevos avances en el área.
            </p>
          ) : (
            <p className="paragraphPresentation">
              Software engineer with{" "}
              <span className="paragraphSpan">1 year of experience</span>{" "}
              developing web applications. Passionate about technology and the
              new advances in the field.
            </p>
          )}

          <div className="btnsDiv">
            <a href="#footerSection" className="AnchorContact">
              <img
                className="gmailIcon"
                alt="Gmail Logo"
                src={
                  theme === "light"
                    ? "/svg/icons/gmail-Black.svg"
                    : "/svg/icons/gmail-white.svg"
                }
              />
              {T.home.botonContactame}
            </a>
            <a
              href="https://www.linkedin.com/in/jean-carlos-castillo-fernández-76a95633b/"
              target="_blank"
              className="AnchorContact"
            >
              <img
                className="anchorIcon"
                alt="Linkedin Logo"
                src={
                  theme === "light"
                    ? "/svg/icons/linkedinBlack.svg"
                    : "/svg/icons/linkedinWhite.svg"
                }
              />
              LinkendIn{" "}
            </a>
            <a
              target="_blank"
              href="https://github.com/JeanCarlos04"
              className="AnchorContact"
            >
              <img
                className="anchorIcon"
                alt="Github Logo"
                src={
                  theme === "light"
                    ? "/svg/icons/github.svg"
                    : "/svg/icons/githubWhite.svg"
                }
              />
              Github
            </a>
          </div>
        </div>
      </section>

      <Experience />
      <Projects />
      <Skills />

      <section id="sectionAboutMe" className="sectionContainer">
        <h1 className="h1SectionTitle">
          {T.home.tituloSobreMi}{" "}
          <img
            className="sectionTitleIcon"
            alt="User Icon"
            src={
              theme === "light"
                ? "/svg/icons/user.svg"
                : "/svg/icons/user-yellow.svg"
            }
          />
        </h1>
        <div className="divAboutMe">
          {language === "es" ? (
            <p className="p-aboutMe">
              Me llamo Jean Carlos Castillo Fernández,
              <span className="spanAboutMe">
                {" "}
                estudiante de ingeriería de software
              </span>{" "}
              en el Instituto Técnologico de las Americas ITLA . Me especializo
              en el{" "}
              <span className="spanAboutMe">
                desarrollo de aplicaciones web, con 1 año de experiencia
              </span>{" "}
              en dicha área.
              <br />
              <br />
              Soy una persona amante y curiosa por las nuevas tecnologías, con
              una mente creativa y llena de ganas de seguir desarrollando webs
              creativas e innovadoras, así como también continuar
              desarrollandome en el área y aplicar todas mis habilidades y
              conocimientos.
            </p>
          ) : (
            <p className="p-aboutMe">
              My name is Jean Carlos Castillo Fernández,{" "}
              <span className="spanAboutMe">software engineering student</span>{" "}
              at the Instituto Tecnológico de las Americas ITLA. I specialize in{" "}
              <span className="spanAboutMe">
                web application development, with 1 year of experience
              </span>{" "}
              in this field.
              <br />
              <br />I am a person who loves and is curious about new
              technologies, with a creative mind and a strong desire to continue
              developing creative and innovative websites, as well as further
              developing myself in the field and applying all my skills and
              knowledge.
            </p>
          )}

          <img
            className="AboutMeFoto"
            alt="An image about me"
            src="/svg/AboutMeFoto.webp"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
