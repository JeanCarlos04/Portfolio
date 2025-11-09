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
    text: "Graduado como estudiante de desarrollo de software en el Instituto Tecnologico de las Americas (ITLA).",
    textEN:
      "Graduated as a software development student at the Instituto Tecnológico de las Américas (ITLA).",
  },
  {
    id: crypto.randomUUID(),
    text: "He realizado multiples proyectos con tecnologías front-end como React, Tailwind, JavaScript, Typescript, HTML, CSS, Vite",
    textEN:
      "I have completed multiple projects using front-end technologies such as React, Tailwind, JavaScript, Typescript, HTML, CSS, Vite.",
  },
  {
    id: crypto.randomUUID(),
    text: "Realicé una pasantía como desarrollador frontend en Soluciones Empresariales Dualsoft SRL, participando en el desarrollo, optimización de interfaces web, así como en la creación de documentación APIs.",
    textEN:
      "I completed a frontend developer internship at Soluciones Empresariales Dualsoft SRL, contributing to the development and optimization of web interfaces, as well as the creation of API documentation.",
  },
];
