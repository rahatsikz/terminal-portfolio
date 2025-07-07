"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiJavascript,
  SiExpo,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const frontendIcons = [
    { Icon: SiReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiJavascript, name: "JavaScript" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiHtml5, name: "HTML5" },
    { Icon: SiCss3, name: "CSS3" },
    { Icon: SiRedux, name: "Redux" },
    { Icon: SiTailwindcss, name: "Tailwind" },
    { Icon: SiReactquery, name: "TanStack Query" },
    { Icon: SiShadcnui, name: "Shadcn UI" },
    { Icon: SiReact, name: "React Native" },
    { Icon: SiExpo, name: "Expo" },
  ];

  const backendIcons = [
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: SiExpress, name: "Express" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: SiRedis, name: "Redis" },
    { Icon: SiPrisma, name: "Prisma" },
  ];

  const otherSkills = [
    "Zustand",
    "RTK Query",
    "D3.js",
    "RESTful APIs",
    "Git",
    "Docker",
    "AWS",
    "CI/CD",
    "Figma",
    "Responsive Design",
    "Performance Optimization",
    "Kafka",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='space-y-8'
    >
      {/* ── Frontend Icons ── */}
      <div className='space-y-4 mt-4'>
        <h3 className='text-yellow-300 text-xl font-semibold'>
          Frontend Development
        </h3>
        {/* <div className='flex flex-wrap gap-3 md:gap-5'> */}
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4'>
          {frontendIcons.map(({ Icon, name }) => (
            <div
              key={name}
              className='flex flex-col items-center gap-1  h-[106px] justify-center p-2 bg-gray-800 rounded border border-gray-700'
            >
              <Icon size={32} className='text-emerald-500' />
              <span className='mt-2.5 text-gray-300 text-sm text-center leading-tight break-words w-full'>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Backend Icons ── */}
      <div className='space-y-4'>
        <h3 className='text-yellow-300 text-xl font-semibold'>
          Backend Development
        </h3>
        {/* <div className='flex flex-wrap gap-5'> */}
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4'>
          {backendIcons.map(({ Icon, name }) => (
            <div
              key={name}
              className='flex flex-col items-center gap-1 h-[106px] justify-center p-2 bg-gray-800 rounded border border-gray-700'
            >
              <Icon size={32} className='text-emerald-500' />
              <span className='mt-2 text-gray-300 text-sm text-center leading-tight break-words w-full'>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Other Skills Badges ── */}
      <div className='space-y-3'>
        <h3 className='text-yellow-300 text-xl font-semibold'>Other Skills</h3>
        <div className='flex flex-wrap gap-3'>
          {otherSkills.map((skill) => (
            <Badge
              key={skill}
              variant='outline'
              className='bg-gray-800 text-gray-300 border-gray-700'
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* ── NPM List (keep as-is) ── */}
      <div className='bg-gray-800 p-4 rounded border border-gray-700'>
        <pre className='text-gray-300 whitespace-pre-wrap'>
          {`$ npm list --depth=0
├── react@18.2.0
├── next@15.0.0
├── typescript@5.2.2
├── tailwindcss@3.3.3
├── node@18.17.1
└── express@4.18.2`}
        </pre>
      </div>

      <p className='text-gray-400 text-sm italic'>
        Type &apos;cd projects&apos; to see examples of my work or &apos;cd
        contact&apos; to get in touch.
      </p>
    </motion.div>
  );
}
