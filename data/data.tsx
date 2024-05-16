import { ProjectProps } from "@/types/types";
import Images from "@/utils/Images";
import { ImageSource } from "expo-image";

type fileProps = {
  name: string;
  icon: ImageSource;
}[];

export const files: fileProps = [
  {
    name: "welcome.md",
    icon: Images.markdown,
  },
  {
    name: "github.js",
    icon: Images.js,
  },
  {
    name: "projects.jsx",
    icon: Images.jsx,
  },
  {
    name: "skills.json",
    icon: Images.json,
  },
  {
    name: "contact.css",
    icon: Images.css,
  },
  {
    name: "about.tsx",
    icon: Images.tsx,
  },
  {
    name: "settings.ts",
    icon: Images.typescript,
  },
];

export const projects: ProjectProps = [
  {
    id: 1,
    name: "Vscode Portfolio",
    description: "A Vscode themed portfolio",
    image: Images.vscodeLogo,
    githubLink: "https://github.com/RohithReddy-45/vscode-portfolio",
    liveSite: "https://youtube.com/shorts/vnpea1uDrdM",
    tags: ["React native", "Expo", "Typescript", "Nativewind"],
  },
  {
    id: 2,
    name: "Spotify Clone",
    description:
      "An upgraded Spotify clone! Easily upload songs, make secure payments via Stripe.",
    image: Images.spotify,
    githubLink: "https://github.com/RohithReddy-45/spotify-clone",
    liveSite: "https://spotifyclone-next13.vercel.app/",
    tags: [
      "Next.js 13",
      "Typescript",
      "Tailwind CSS",
      "Zustand",
      "Supabase",
      "Stripe",
    ],
  },
  {
    id: 3,
    name: "Stepinstyle",
    description: "Stepinstyle is an e-commerce shoe store.",
    image: Images.stepinstyle,
    githubLink: "https://github.com/RohithReddy-45/stepinstyle",
    liveSite: "https://stepinstyle-7x1x.onrender.com/",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    id: 4,
    name: "Portfolio website",
    description: "My personal portfolio website.",
    image: Images.portfolio,
    githubLink: "https://github.com/RohithReddy-45/my-portfolio",
    liveSite: "https://rohith-reddy.vercel.app/",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 5,
    name: "Feastly",
    description: "Feastly is a responsive restaurant website landing page.",
    image: Images.feastly,
    githubLink: "https://github.com/RohithReddy-45/Feaslty",
    liveSite: "https://feastly-rohith.netlify.app/",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 6,
    name: "Recipe Hunt",
    description:
      "Recipehunt is a web app for finding recipes, providing ingredients and quantities for each item.",
    image: Images.recipehunt,
    githubLink: "https://github.com/RohithReddy-45/RecipeHunt",
    liveSite: "https://recipehunt-rohith.netlify.app/",
    tags: ["HTML", "Tailwind CSS", "Javascript"],
  },
];
