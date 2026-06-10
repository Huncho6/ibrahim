export interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  date: string;
  tags: string[];
  preview: string;
}

export const projects: Project[] = [
  {
    id: "djpr-collective",
    title: "DJPR Collective",
    description:
      "Built a modern marketing and communications site for DJPR Collective—highlighting brand partnerships, services, and cultural strategy with a responsive, polished experience.",
    href: "https://www.djprcollective.com/",
    date: "Aug 2025",
    tags: ["Next.js", "React", "Tailwind CSS", "Responsive UI"],
    preview:
      "https://res.cloudinary.com/dh60kpxg5/image/upload/v1781105906/b95bbbec-ffd0-41d8-aeca-5f16dc37a20f.png",
  },
  {
    id: "movies",
    title: "Movie Browser Application",
    description:
      "A dynamic movie browsing app where users search titles, view details, and watch trailers with fast, API-driven discovery.",
    href: "https://movies-client-blond.vercel.app/",
    date: "Sep 2024",
    tags: ["React", "Vite", "API Integration"],
    preview:
      "https://res.cloudinary.com/dh60kpxg5/image/upload/v1726590694/movie_pck1ms.png",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "A React-based retail platform with dynamic product listings, responsive navigation, and a clean shopping flow across devices.",
    href: "https://ec-react-one.vercel.app/",
    date: "Aug 2024",
    tags: ["React", "Vite", "E-commerce", "Responsive UI"],
    preview:
      "https://res.cloudinary.com/dh60kpxg5/image/upload/v1726848934/kickaaa_dehiat.png",
  },
  {
    id: "tictactoe",
    title: "Tic-Tac-Toe",
    description:
      "An interactive Tic-Tac-Toe game with instant feedback, accessible controls, and a minimal, friction-free interface.",
    href: "https://tic-tac-toe-lime-phi.vercel.app/",
    date: "Jun 2024",
    tags: ["React", "Game Logic", "UI/UX"],
    preview:
      "https://res.cloudinary.com/dh60kpxg5/image/upload/v1726848934/tictac_ub60t6.png",
  },
];
