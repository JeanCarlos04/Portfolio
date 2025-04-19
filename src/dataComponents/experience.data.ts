type Experience = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
  textEN: string;
};

export const experience: Experience[] = [
  {
    id: crypto.randomUUID(),
    text: "Experiencia en el desarrollo de aplicaciones web responsivas, con un diseño agradable y con manejo de datos.",
    textEN:
      "Experience in developing responsive web applications with a pleasant design and data management.",
  },
  {
    id: crypto.randomUUID(),
    text: "Estudiante de ingeniería de software en el Instituto Tecnologico de las Americas por 2 años",
    textEN:
      "Software engineering student at the Instituto Tecnologico de las Americas for 2 years.",
  },
  {
    id: crypto.randomUUID(),
    text: "He realizado multiples proyectos con tecnologías front-end como React, Tailwind, JavaScript, Typescript, HTML, CSS, Vite",
    textEN:
      "I have completed multiple projects using front-end technologies such as React, Tailwind, JavaScript, Typescript, HTML, CSS, Vite.",
  },
];
