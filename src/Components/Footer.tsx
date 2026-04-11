import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";
import Anchor from "./Anchor";

export function Footer() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const footerMadedWith = (alt: string, imageURL: string) => {
    return <img alt={alt} className="madedWithIcons" src={imageURL} />;
  };

  return (
    <footer id="footerSection" className="footerContainer">
      <div className="divContactContainer">
        <nav className="footerNavContact">
          <h2 className="contactH1">
            {t("footer.tituloSocials")}{" "}
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
          <address className="divInfoContact">
            <p className="footerTelephone">
              {/*<FaEnvelope />*/} jeancarloscastillofernandez@gmail.com
            </p>
            <p className="footerTelephone">
              {/*<FaPhone /> */} +1 829 749 0064
            </p>
          </address>
        </nav>
        <div className="divMadedWith">
          <h3 className="madedWithTitle">{t("footer.MadedWith")}</h3>
          <div className="divMadedWithIcons">
            {footerMadedWith(
              "Typescript Icon",
              "/Portfolio/svg/icons/typescript.svg",
            )}
            {footerMadedWith(
              "JavaScript Icon",
              "/Portfolio/svg/icons/javascript.svg",
            )}
            {footerMadedWith("React Icon", "/Portfolio/svg/icons/react.svg")}
            {footerMadedWith("Css Icon", "/Portfolio/svg/icons/css.svg")}
            {footerMadedWith("HTML icon", "/Portfolio/svg/icons/html.svg")}
            {footerMadedWith("Vite Icon", "/Portfolio/svg/icons/vite.svg")}
          </div>
        </div>
      </div>
      <small className="copyright-p">{t("footer.rights")}</small>
    </footer>
  );
}
