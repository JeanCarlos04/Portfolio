import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

type AnchorProps = {
  contentType: "img" | "icon";
  text: string;
  href?: string;
  imgSrc?: string;
  imgAlt?: string;
  imgClass?: string;
  imgLightMode: string;
  imgDarkMode: string;
  blank?: string;
};

function Anchor({
  text,
  href,
  imgDarkMode,
  imgAlt,
  imgClass,
  blank,
  imgLightMode,
}: AnchorProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <a target={blank} href={href} className="anchorContact">
      <img
        alt={imgAlt}
        className={imgClass}
        src={theme === "light" ? imgDarkMode : imgLightMode}
      />

      {text}
    </a>
  );
}

export default Anchor;
