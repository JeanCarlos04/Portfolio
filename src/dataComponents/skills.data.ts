type Skills = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  color: string;
  src: string;
  srcOtherColor?: string;
  alt: string;
};

export const frontendSkills: Skills[] = [
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/react.svg",
    color: "#61DAFB",
    alt: "React",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/javascript.svg",
    color: "#F7DF1E",
    alt: "JavaScript",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/html.svg",
    color: "#E34F26",
    alt: "HTML5",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/css.svg",
    color: "#1572B6",
    alt: "CSS3",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/tailwind.svg",
    color: "#38BDF8",
    alt: "Tailwind CSS",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/typescript.svg",
    color: "#3178C6",
    alt: "TypeScript",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/MongoDB.svg",
    color: "#47A248",
    alt: "MongoDB",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/Node.js.svg",
    color: "#47A248",
    alt: "NodeJS",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/postgreSQL.svg",
    color: "#336791",
    alt: "PostgreSQL",
  },
];

export const tools: Skills[] = [
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/vs-code.svg",
    color: "#007ACC",
    alt: "Visual Studio",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/git.svg",
    color: "#F05032",
    alt: "Git",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/npm.svg",
    color: "#CB3837",
    alt: "NPM",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/vite.svg",
    color: "#646CFF",
    alt: "Vite",
  },
  {
    id: crypto.randomUUID(),
    src: "/Portfolio/svg/icons/github.svg",
    srcOtherColor: "/Portfolio/svg/icons/githubWhite.svg",
    color: "#ffffff",
    alt: "GitHub",
  },
];
