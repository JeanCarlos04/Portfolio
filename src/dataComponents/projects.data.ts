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
      { name: "MovieSoftIndex", src: "/svg/MovieSoftIndex.webp" },
      // { name: "MovieSoftLogo", src: "/svg/MovieSofLogo.webp" },
    ],
    title: "MovieSoft",
    description:
      "Plataforma web donde puedes explorar las carteleras y ver sus tráilers favoritos. Registrate!.",
    descriptionEN:
      "Web platform where you can explore movie listings and watch your favorite trailers. Sign up!",
    tecnologies: [
      {
        logo: "/svg/icons/javascript.svg",
        name: "JavaScript",
        color: "#F7DF1E",
      },
      { logo: "/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      { logo: "/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
      { logo: "/svg/icons/supabase.svg", name: "SupaBase", color: "#3ECF8E" },
    ],
    code: "https://github.com/JeanCarlos04/MovieSoft-",
  },
  {
    id: crypto.randomUUID(),
    img: [
      { name: "PokeDexIndex", src: "/svg/PokeDexIndex.webp" },
      // { name: "PokeDexCard1", src: "/svg/PokeDexPokemonCard.webp" },
      // { name: "PokeDexCard2", src: "/svg/PokeDexPokemonCard2.webp" },
    ],
    title: "PokéDex",
    description:
      "Explora y aprende sobre todos los Pokémon, sus habilidades, evoluciones, tipos y mucho más.",
    descriptionEN:
      "A web platform where you can explore movie listings and watch your favorite trailers. Join now!",
    tecnologies: [
      {
        logo: "/svg/icons/javascript.svg",
        name: "JavaScript",
        color: "#F7DF1E",
      },
      { logo: "/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      { logo: "/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
    ],
    code: "https://github.com/JeanCarlos04/Pokedex-API",
  },
  {
    id: crypto.randomUUID(),
    img: [
      { name: "MiniGameMemoryMatch", src: "/svg/MiniGameMemoryMatch.webp" },
      // { name: "MiniGameScrumble", src: "/svg/MiniGameScrumble.webp" },
    ],
    title: "Mini Games",
    description:
      "Web interactiva que ofrece juegos clásicos como Tic-Tac-Toe, Ahorcado, Memory Card y Piedra, Papel o Tijeras, diseñada para brindar diversión y desafiar tus habilidades.",
    descriptionEN:
      "Interactive web platform offering classic games like Tic-Tac-Toe, Hangman, Memory Card, and Rock, Paper, Scissors, designed to provide fun and challenge your skills.",
    tecnologies: [
      { logo: "/svg/icons/react.svg", name: "React", color: "#61DAFB" },
      {
        logo: "/svg/icons/javascript.svg",
        name: "JavaScript",
        color: "#F7DF1E",
      },
      { logo: "/svg/icons/html.svg", name: "HTML", color: "#E34F26" },
      { logo: "/svg/icons/tailwind.svg", name: "Tailwind", color: "#38BDF8" },
      { logo: "/svg/icons/css.svg", name: "CSS", color: "#1572B6" },
    ],
    code: "https://github.com/JeanCarlos04/MiniGames/tree/main/mini-games",
  },
];
