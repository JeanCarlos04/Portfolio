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
        <nav className="footerNavContact">
          <h2 className="contactH1">
            {T.footer.tituloSocials}{" "}
            <img
              className="sectionTitleIcon"
              alt="At Icon"
              src={
                theme === "light"
                  ? "/Portfolio/svg/icons/at-solid.svg"
                  : "/Portfolio/svg/icons/at-yellow.svg"
              }
            />
          </h2>
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
                    ? "/Portfolio/svg/icons/linkedinBlack.svg"
                    : "/Portfolio/svg/icons/linkedinWhite.svg"
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
                    ? "/Portfolio/svg/icons/github.svg"
                    : "/Portfolio/svg/icons/githubWhite.svg"
                }
              />
              Github
            </a>
          </div>
          <address className="divInfoContact">
            <p>jeancarloscastillofernandez@gmail.com</p>
            <p>+1 829 749 0064</p>
          </address>
        </nav>
        <div className="divMadedWith">
          <h3 className="madedWithTitle">{T.footer.MadedWith}</h3>
          <div className="divMadedWithIcons">
            <img
              alt="Typescript Icon"
              className="madedWithIcons"
              src="/Portfolio/svg/icons/typescript.svg"
            />
            <img
              alt="JavaScript Icon"
              className="madedWithIcons"
              src="/Portfolio/svg/icons/javascript.svg"
            />
            <img
              alt="React Icon"
              className="madedWithIcons"
              src="/Portfolio/svg/icons/react.svg"
            />
            <img
              alt="Css Icon"
              className="madedWithIcons"
              src="/Portfolio/svg/icons/css.svg"
            />
            <img
              alt="HTML icon"
              className="madedWithIcons"
              src="/Portfolio/svg/icons/html.svg"
            />
            <img
              alt="Vite Icon"
              className="madedWithIcons"
              src="/Portfolio/svg/icons/vite.svg"
            />
          </div>
        </div>
      </div>
      <small className="copyright-p">{T.footer.rights}</small>
    </footer>
  );
}
