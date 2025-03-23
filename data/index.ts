import nomadImg from "@/assets/image/project-nomad.png";
import redImg from "@/assets/image/project-red.png";
import avenaImg from "@/assets/image/project-avena.png";
export const projectsArr = [
    {
      title: "Nomad Horizon - Online Service Reservation Platform",
      description:
        "Developed to attract Digital Nomads around the world and help them to book a service, track order and avail them on course.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Redux",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma",
        "Express",
      ],
      github: "https://github.com/rahatsikz/nomad-horizon",
      demo: "https://nomad-horizon.vercel.app",
      image: nomadImg.src,
    },
    {
      title: "Red UI - React UI Component Builder Library",
      description:
        "A UI component builder library that offers a wide range of components to use providing flexibility and ease of use.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth"],
      github: "https://github.com/rahatsikz/red-ui",
      demo: "https://red-ui.vercel.app",
      image: redImg.src,
    },
    {
      title: "Avena - Indian Alternative of Airbnb",
      description:
        "A property rental platform tailored for the Indian market for finding and booking property with role-based access control.",
      technologies: [
        "Next.js",
        "Zustand",
        "ShadCN",
        "TypeScript",
        "Tanstack Query",
      ],
      github: "",
      demo: "https://avena.co.in",
      image: avenaImg.src,
    },
  ];

export  const tabs = ["home", "about", "skills", "projects", "contact"];
