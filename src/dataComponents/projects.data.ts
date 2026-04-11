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
    img: [
      { name: "MovieSoftIndex", src: "/Portfolio/imgs/MovieSoftIndex.webp" },
    ],
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
      {
        logo: "/Portfolio/svg/icons/supabase.svg",
        name: "SupaBase",
        color: "#3ECF8E",
      },
    ],
    code: "https://github.com/JeanCarlos04/MovieSoft-",
  },
  {
    id: crypto.randomUUID(),
    img: [{ name: "PokeDexIndex", src: "/Portfolio/imgs/PokeDexIndex.webp" }],
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
      {
        name: "MiniGameMemoryMatch",
        src: "/Portfolio/imgs/MiniGameMemoryMatch.webp",
      },
    ],
    title: "Mini Games",
    description:
      "Web interactiva que ofrece juegos clásicos como Tic-Tac-Toe, Ahorcado, Memory Card y Piedra, Papel o Tijeras, diseñada para brindar diversión y desafiar tus habilidades.",
    descriptionEN:
      "Interactive web platform offering classic games like Tic-Tac-Toe, Hangman, Memory Card, and Rock, Paper, Scissors, designed to provide fun and challenge your skills.",
    tecnologies: [
      {
        logo: "/Portfolio/svg/icons/react.svg",
        name: "React",
        color: "#61DAFB",
      },
      {
        logo: "/Portfolio/svg/icons/javascript.svg",
        name: "JavaScript",
        color: "#F7DF1E",
      },
      { logo: "/Portfolio/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      {
        logo: "/Portfolio/svg/icons/tailwind.svg",
        name: "Tailwind",
        color: "#38BDF8",
      },
      { logo: "/Portfolio/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
    ],
    code: "https://github.com/JeanCarlos04/MiniGames/tree/main/mini-games",
  },
  {
    id: crypto.randomUUID(),
    img: [
      {
        name: "JMusic Logo",
        src: "/Portfolio/imgs/Principal Logos/JMusicLogo.webp",
      },
      { name: "JMusic 1", src: "/Portfolio/imgs/JMusic Images/jmusic1.png" },
      { name: "JMusic 2", src: "/Portfolio/imgs/JMusic Images/jmusic2.png" },
      { name: "JMusic 3", src: "/Portfolio/imgs/JMusic Images/jmusic3.png" },
      { name: "JMusic 4", src: "/Portfolio/imgs/JMusic Images/jmusic4.png" },
      { name: "JMusic 5", src: "/Portfolio/imgs/JMusic Images/jmusic5.png" },
      { name: "JMusic 6", src: "/Portfolio/imgs/JMusic Images/jmusic6.png" },
      { name: "JMusic 7", src: "/Portfolio/imgs/JMusic Images/jmusic7.png" },
    ],
    title: "JMusics",
    description:
      "JMusic es una plataforma moderna donde puedes buscar tus canciones favoritas, crear y gestionar playlists personalizadas con una interfaz intuitiva y fluida.",
    descriptionEN:
      "JMusic is a modern platform where you can search for your favorite songs and create or manage personalized playlists, all within an intuitive and smooth interface.",
    tecnologies: [
      {
        logo: "/Portfolio/svg/icons/react.svg",
        name: "React",
        color: "#61DAFB",
      },
      {
        logo: "/Portfolio/svg/icons/typescript.svg",
        name: "TypeScript",
        color: "#3178C6",
      },
      { logo: "/Portfolio/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      {
        logo: "/Portfolio/svg/icons/tailwind.svg",
        name: "Tailwind",
        color: "#38BDF8",
      },
      { logo: "/Portfolio/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
    ],
    code: "https://github.com/JeanCarlos04/JMusic",
  },
  {
    id: crypto.randomUUID(),
    img: [
      {
        name: "FlowUp Logo",
        src: "/Portfolio/imgs/Principal Logos/FlowUpLogo.webp",
      },
      { name: "FlowUp", src: "/Portfolio/imgs/FlowUp.webp" },
      { name: "FlowUp 1", src: "/Portfolio/imgs/FlowUp Images/flowup1.png" },
      { name: "FlowUp 2", src: "/Portfolio/imgs/FlowUp Images/flowup2.png" },
      { name: "FlowUp 3", src: "/Portfolio/imgs/FlowUp Images/flowup3.png" },
      { name: "FlowUp 4", src: "/Portfolio/imgs/FlowUp Images/flowup4.png" },
      { name: "FlowUp 6", src: "/Portfolio/imgs/FlowUp Images/flowup6.png" },
      { name: "FlowUp 7", src: "/Portfolio/imgs/FlowUp Images/flowup7.png" },
      { name: "FlowUp 8", src: "/Portfolio/imgs/FlowUp Images/flowup8.png" },
      { name: "FlowUp 9", src: "/Portfolio/imgs/FlowUp Images/flowup9.png" },
    ],
    title: "FlowUp",
    description:
      "FlowUp es una red social moderna donde puedes subir posts, explorar perfiles, seguir a otros usuarios, dar likes y comentar. Con FlowUp, mantente conectado y comparte lo que te apasiona de manera fácil e interactiva.",
    descriptionEN:
      "FlowUp is a modern social network where you can post content, explore profiles, follow other users, like, and comment. With FlowUp, stay connected and share what you’re passionate about easily and interactively.",
    tecnologies: [
      {
        logo: "/Portfolio/svg/icons/react.svg",
        name: "React",
        color: "#61DAFB",
      },
      {
        logo: "/Portfolio/svg/icons/typescript.svg",
        name: "TypeScript",
        color: "#3178C6",
      },
      { logo: "/Portfolio/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      { logo: "/Portfolio/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
      {
        logo: "/Portfolio/svg/icons/MongoDB.svg",
        name: "MongoDB",
        color: "#47A248",
      },
      {
        logo: "/Portfolio/svg/icons/Node.js.svg",
        name: "NodeJS",
        color: "#47A248",
      },
    ],
    code: "https://github.com/JeanCarlos04/FlowUpRepository",
  },
  {
    id: crypto.randomUUID(),
    img: [
      {
        name: "ShopIcon Logo",
        src: "/Portfolio/imgs/Principal Logos/ShopIconLogo.webp",
      },
      { name: "Shopicon", src: "/Portfolio/imgs/Shopicon.png" },
      {
        name: "ShopIcon 1",
        src: "/Portfolio/imgs/ShopIcon Images/shopicon1.png",
      },
      {
        name: "ShopIcon 2",
        src: "/Portfolio/imgs/ShopIcon Images/shopicon2.png",
      },
      {
        name: "ShopIcon 3",
        src: "/Portfolio/imgs/ShopIcon Images/shopicon3.png",
      },
      {
        name: "ShopIcon 4",
        src: "/Portfolio/imgs/ShopIcon Images/shopicon4.png",
      },
      {
        name: "ShopIcon 5",
        src: "/Portfolio/imgs/ShopIcon Images/shopicon5.png",
      },
      {
        name: "ShopIcon 6",
        src: "/Portfolio/imgs/ShopIcon Images/shopicon6.png",
      },
      {
        name: "ShopIcon 7",
        src: "/Portfolio/imgs/ShopIcon Images/shopicon7.png",
      },
      {
        name: "ShopIcon 8",
        src: "/Portfolio/imgs/ShopIcon Images/shopicon8.png",
      },
    ],
    title: "Shopicon",
    description:
      "Aplicación web eCommerce full-stack desarrollada con React y TypeScript. Incluye exploración de productos, carrito de compras e integración con APIs REST. Enfocada en diseño responsivo, arquitectura limpia y buen rendimiento.",
    descriptionEN:
      "Full-stack eCommerce web application built with React and TypeScript. Includes product browsing, shopping cart functionality, and REST API integration. Focused on responsive design, clean architecture, and performance.",
    tecnologies: [
      {
        logo: "/Portfolio/svg/icons/react.svg",
        name: "React",
        color: "#61DAFB",
      },
      {
        logo: "/Portfolio/svg/icons/typescript.svg",
        name: "TypeScript",
        color: "#3178C6",
      },
      { logo: "/Portfolio/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      { logo: "/Portfolio/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
      {
        logo: "/Portfolio/svg/icons/tailwind.svg",
        name: "Tailwind",
        color: "38BDF8",
      },
      {
        logo: "/Portfolio/svg/icons/postgreSQL.svg",
        name: "PostgreSQL",
        color: "#4764a2",
      },
      {
        logo: "/Portfolio/svg/icons/Node.js.svg",
        name: "NodeJS",
        color: "#47A248",
      },
    ],
    code: "https://github.com/JeanCarlos04/Ecommerce",
  },
  {
    id: crypto.randomUUID(),
    img: [
      {
        name: "LetsDo Logo",
        src: "/Portfolio/imgs/Principal Logos/LetsDoLogo.webp",
      },
      { name: "LetsDo", src: "/Portfolio/imgs/LetsDo.png" },
      { name: "LetsDo 1", src: "/Portfolio/imgs/LetsDo Images/letsdo1.png" },
      { name: "LetsDo 2", src: "/Portfolio/imgs/LetsDo Images/letsdo2.png" },
      { name: "LetsDo 3", src: "/Portfolio/imgs/LetsDo Images/letsdo3.png" },
      { name: "LetsDo 4", src: "/Portfolio/imgs/LetsDo Images/letsdo4.png" },
      { name: "LetsDo 5", src: "/Portfolio/imgs/LetsDo Images/letsdo5.png" },
      { name: "LetsDo 6", src: "/Portfolio/imgs/LetsDo Images/letsdo6.png" },
      { name: "LetsDo 7", src: "/Portfolio/imgs/LetsDo Images/letsdo7.png" },
      { name: "LetsDo 8", src: "/Portfolio/imgs/LetsDo Images/letsdo8.png" },
      { name: "LetsDo 9", src: "/Portfolio/imgs/LetsDo Images/letsdo9.png" },
      { name: "LetsDo 10", src: "/Portfolio/imgs/LetsDo Images/letsdo10.png" },
      { name: "LetsDo 11", src: "/Portfolio/imgs/LetsDo Images/letsdo11.png" },
      { name: "LetsDo 12", src: "/Portfolio/imgs/LetsDo Images/letsdo12.png" },
    ],
    title: "LetsDo",
    description:
      "Task management web application designed to help users organize and track their daily activities. Features task creation, editing, and deletion with a clean and intuitive interface. Built with React and TypeScript, focusing on state management and user experience.",
    descriptionEN:
      "Aplicación web de gestión de tareas diseñada para ayudar a los usuarios a organizar y dar seguimiento a sus actividades diarias. Incluye creación, edición y eliminación de tareas con una interfaz limpia e intuitiva. Desarrollada con React y TypeScript, enfocada en el manejo de estado y la experiencia de usuario.",
    tecnologies: [
      {
        logo: "/Portfolio/svg/icons/react.svg",
        name: "React",
        color: "#61DAFB",
      },
      {
        logo: "/Portfolio/svg/icons/typescript.svg",
        name: "TypeScript",
        color: "#3178C6",
      },
      { logo: "/Portfolio/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      { logo: "/Portfolio/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
      {
        logo: "/Portfolio/svg/icons/tailwind.svg",
        name: "Tailwind",
        color: "38BDF8",
      },
      {
        logo: "/Portfolio/svg/icons/MongoDB.svg",
        name: "MongoDB",
        color: "#47A248",
      },
      {
        logo: "/Portfolio/svg/icons/Node.js.svg",
        name: "NodeJS",
        color: "#47A248",
      },
    ],
    code: "https://github.com/JeanCarlos04/LetsDo-Project",
  },
];
