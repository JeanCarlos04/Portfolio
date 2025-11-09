type Projects = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  img: { name: string; src: string }[];
  title: string;
  description: string;
  descriptionEN: string;
  tecnologies: {
    logo: string;
    name: string;
    color: string;
  }[];
  code: string;
};

export const projects: Projects[] = [
  {
    id: crypto.randomUUID(),
    img: [{ name: "MovieSoftIndex", src: "/Portfolio/svg/MovieSoftIndex.webp" }],
    title: "MovieSoft",
    description:
      "Plataforma web donde puedes explorar las carteleras y ver sus tráilers favoritos. Registrate!.",
    descriptionEN:
      "Web platform where you can explore movie listings and watch your favorite trailers. Sign up!",
    tecnologies: [
      {
        logo: "/Portfolio/svg/icons/javascript.svg",
        name: "JavaScript",
        color: "#F7DF1E",
      },
      { logo: "/Portfolio/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      { logo: "/Portfolio/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
      { logo: "/Portfolio/svg/icons/supabase.svg", name: "SupaBase", color: "#3ECF8E" },
    ],
    code: "https://github.com/JeanCarlos04/MovieSoft-",
  },
  {
    id: crypto.randomUUID(),
    img: [{ name: "PokeDexIndex", src: "/Portfolio/svg/PokeDexIndex.webp" }],
    title: "PokéDex",
    description:
      "Explora y aprende sobre todos los Pokémon, sus habilidades, evoluciones, tipos y mucho más.",
    descriptionEN:
      "A web platform where you can explore movie listings and watch your favorite trailers. Join now!",
    tecnologies: [
      {
        logo: "/Portfolio/svg/icons/javascript.svg",
        name: "JavaScript",
        color: "#F7DF1E",
      },
      { logo: "/Portfolio/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      { logo: "/Portfolio/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
    ],
    code: "https://github.com/JeanCarlos04/Pokedex-API",
  },
  {
    id: crypto.randomUUID(),
    img: [
      { name: "MiniGameMemoryMatch", src: "/Portfolio/svg/MiniGameMemoryMatch.webp" },
    ],
    title: "Mini Games",
    description:
      "Web interactiva que ofrece juegos clásicos como Tic-Tac-Toe, Ahorcado, Memory Card y Piedra, Papel o Tijeras, diseñada para brindar diversión y desafiar tus habilidades.",
    descriptionEN:
      "Interactive web platform offering classic games like Tic-Tac-Toe, Hangman, Memory Card, and Rock, Paper, Scissors, designed to provide fun and challenge your skills.",
    tecnologies: [
      { logo: "/Portfolio/svg/icons/react.svg", name: "React", color: "#61DAFB" },
      {
        logo: "/Portfolio/svg/icons/javascript.svg",
        name: "JavaScript",
        color: "#F7DF1E",
      },
      { logo: "/Portfolio/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      { logo: "/Portfolio/svg/icons/tailwind.svg", name: "Tailwind", color: "#38BDF8" },
      { logo: "/Portfolio/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
    ],
    code: "https://github.com/JeanCarlos04/MiniGames/tree/main/mini-games",
  },
  {
    id: crypto.randomUUID(),
    img: [{ name: "JMusic", src: "/Portfolio/svg/Jmusic.webp" }],
    title: "JMusics",
    description:
      "JMusic es una plataforma moderna donde puedes buscar tus canciones favoritas, crear y gestionar playlists personalizadas con una interfaz intuitiva y fluida.",
    descriptionEN:
      "JMusic is a modern platform where you can search for your favorite songs and create or manage personalized playlists, all within an intuitive and smooth interface.",
    tecnologies: [
      { logo: "/Portfolio/svg/icons/react.svg", name: "React", color: "#61DAFB" },
      {
        logo: "/Portfolio/svg/icons/typescript.svg",
        name: "TypeScript",
        color: "#3178C6",
      },
      { logo: "/Portfolio/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      { logo: "/Portfolio/svg/icons/tailwind.svg", name: "Tailwind", color: "#38BDF8" },
      { logo: "/Portfolio/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
    ],
    code: "https://github.com/JeanCarlos04/JMusic",
  },
  {
    id: crypto.randomUUID(),
    img: [{ name: "FlowUp", src: "/Portfolio/svg/FlowUp.webp" }],
    title: "FlowUp",
    description:
      "FlowUp es una red social moderna donde puedes subir posts, explorar perfiles, seguir a otros usuarios, dar likes y comentar. Con FlowUp, mantente conectado y comparte lo que te apasiona de manera fácil e interactiva.",
    descriptionEN:
      "FlowUp is a modern social network where you can post content, explore profiles, follow other users, like, and comment. With FlowUp, stay connected and share what you’re passionate about easily and interactively.",
    tecnologies: [
      { logo: "/Portfolio/svg/icons/react.svg", name: "React", color: "#61DAFB" },
      {
        logo: "/Portfolio/svg/icons/typescript.svg",
        name: "TypeScript",
        color: "#3178C6",
      },
      { logo: "/Portfolio/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      { logo: "/Portfolio/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
      { logo: "/Portfolio/svg/icons/MongoDB.svg", name: "MongoDB", color: "#47A248" },
      { logo: "/Portfolio/svg/icons/Node.js.svg", name: "NodeJS", color: "#47A248" },
    ],
    code: "https://github.com/JeanCarlos04/FlowUpRepository",
  },
];
