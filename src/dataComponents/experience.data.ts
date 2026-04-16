type Experience = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
  textEN: string;
  fechaInicio: string,
  fechaFinal?: string;
};

export const experience: Experience[] = [
  // {
  //   id: crypto.randomUUID(),
  //   text: "Experiencia en el desarrollo de aplicaciones web responsivas, enfocada en el manejo de datos, interfaz agradable y optimizada.",
  //   textEN:
  //     "Experience in developing responsive web applications with a pleasant design and data management.",
  // },
  //  {
  //   id: crypto.randomUUID(),
  //   text: `Desarrollado múltiples proyectos como desarrollador fullstack, trabajando con tecnologías modernas tanto en frontend como en backend.
  //     En el frontend, tengo experiencia creando interfaces dinámicas, escalables y optimizadas.
  //     En el backend implementando arquitecturas seguras, eficientes y orientadas a buenas prácticas.`,
  //   textEN:
  //     "I have completed multiple projects using front-end technologies such as React, Tailwind, JavaScript, Typescript, HTML, CSS, Vite.",
  // },
  {
  fechaInicio: "2024",
  id: crypto.randomUUID(),
  text: "MovieSoft: Plataforma web donde puedes explorar las carteleras y ver sus tráilers favoritos. Incluye registro de usuarios y uso de SupaBase para la gestión de datos.",
  textEN:
    "MovieSoft: A web platform where you can explore movie listings and watch your favorite trailers. Includes user registration and SupaBase integration for data management.",
},
{
  fechaInicio: "2024",
  id: crypto.randomUUID(),
  text: "PokéDex: Aplicación web para explorar y aprender sobre todos los Pokémon, sus habilidades, evoluciones y tipos.",
  textEN:
    "PokéDex: A web application to explore and learn about all Pokémon, their abilities, evolutions, and types.",
},
{
  fechaInicio: "2024",
  id: crypto.randomUUID(),
  text: "Mini Games: Web interactiva con juegos clásicos como Tic–Tac–Toe, Ahorcado, Memory Card y Piedra, Papel o Tijeras, diseñada para brindar diversión y desafiar habilidades.",
  textEN:
    "Mini Games: An interactive web app offering classic games like Tic–Tac–Toe, Hangman, Memory Card, and Rock–Paper–Scissors, designed to entertain and challenge skills.",
},
{
  fechaInicio: "2025",
  id: crypto.randomUUID(),
  text: "JMusics: Plataforma moderna donde puedes buscar tus canciones favoritas, crear y gestionar playlists personalizadas con una interfaz intuitiva y fluida.",
  textEN:
    "JMusics: A modern platform where you can search for your favorite songs, create and manage personalized playlists with an intuitive and smooth interface.",
},
{
  fechaInicio: "2025",
  id: crypto.randomUUID(),
  text: "FlowUp: Red social moderna donde puedes subir posts, explorar perfiles, seguir a otros usuarios, dar likes y comentar. Con FlowUp, mantente conectado y comparte lo que te apasiona de manera fácil e interactiva.",
  textEN:
    "FlowUp: A modern social network where you can upload posts, explore profiles, follow other users, like and comment. With FlowUp, stay connected and share what you are passionate about easily and interactively.",
},
   {
    fechaInicio: "03-06-2025",
    fechaFinal: "30-10-2025",
    id: crypto.randomUUID(),
    text: "Pasante desarrollador frontend en Soluciones Empresariales Dualsoft SRL, participando en el desarrollo, optimización de interfaces web, así como en la creación de documentación APIs.",
    textEN:
      "I completed a frontend developer internship at Soluciones Empresariales Dualsoft SRL, contributing to the development and optimization of web interfaces, as well as the creation of API documentation.",
  },
  {
    fechaInicio: "12-01-2023",
    fechaFinal: "15-07-2025",
    id: crypto.randomUUID(),
    text: "Graduado como estudiante de desarrollo de software en el Instituto Tecnologico de las Americas (ITLA).",
    textEN:
      "Graduated as a software development student at the Instituto Tecnológico de las Américas (ITLA).",
  },
  {
    fechaInicio: "2025",
    id: crypto.randomUUID(),
    text: "LetsDo: Aplicación web de gestión de tareas diseñada para ayudar a los usuarios a organizar y seguir sus actividades diarias. Permite crear, editar y eliminar tareas con una interfaz limpia e intuitiva. Construida con React y TypeScript, enfocada en la gestión de estado y experiencia de usuario.",
    textEN:
      "LetsDo: Task management web application designed to help users organize and track daily activities. Features task creation, editing, and deletion with a clean and intuitive interface. Built with React and TypeScript, focusing on state management and user experience.",
  },
  {
    fechaInicio: "2026",
    id: crypto.randomUUID(),
    text: "Shopicon: Aplicación web eCommerce full-stack desarrollada con React y TypeScript. Incluye exploración de productos, carrito de compras e integración con APIs REST. Enfocada en diseño responsivo, arquitectura limpia y buen rendimiento.",
    textEN:
      "Shopicon: Full-stack eCommerce web application built with React and TypeScript. Features product browsing, shopping cart, and REST API integration. Focused on responsive design, clean architecture, and strong performance.",
  },
  {
    fechaInicio: "30-03-2026",
    fechaFinal: "Actualmente",
    id: crypto.randomUUID(),
    text: "Actualmente trabajando en el area de Soporte Tecnico en Opitel.",
    textEN:
      "I completed a frontend developer internship at Soluciones Empresariales Dualsoft SRL, contributing to the development and optimization of web interfaces, as well as the creation of API documentation.",
  },
];
