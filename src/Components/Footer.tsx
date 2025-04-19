import { useContext } from "react";
import { texts } from "../i18n/texts";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";

export function Footer() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const T = texts[language];

  return (
    <footer id="footerSection" className="footerContainer">
      <div className="divContactContainer">
        <h1 className="contactH1">
          {T.footer.tituloSocials}{" "}
          <img
            className="sectionTitleIcon"
            alt="At Icon"
            src={
              theme === "light"
                ? "/svg/icons/at-solid.svg"
                : "/svg/icons/at-yellow.svg"
            }
          />
        </h1>
        <div className="divContact">
          <a
            href="https://www.linkedin.com/in/jean-carlos-castillo-fernández-76a95633b/"
            target="_blank"
            className="AnchorContactFooter"
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
            LinkendIn
          </a>
          <a
            target="_blank"
            href="https://github.com/JeanCarlos04"
            className="AnchorContactFooter"
          >
            <img
              className="anchorIcon"
              alt="Linkedin Logo"
              src={
                theme === "light"
                  ? "/svg/icons/github.svg"
                  : "/svg/icons/githubWhite.svg"
              }
            />
            Github
          </a>
        </div>
        <div className="divInfoContact">
          <p>jeancarloscastillofernandez@gmail.com</p>
          <p>+1 829 749 0064</p>
        </div>
      </div>
      <p className="copyright-p">{T.footer.rights}</p>
    </footer>
  );
}
