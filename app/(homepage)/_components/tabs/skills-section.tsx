"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const frontendSkills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "HTML/CSS", level: 80 },
    { name: "Tailwind CSS", level: 90 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 90 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 90 },
    { name: "Redis", level: 70 },
    { name: "Prisma", level: 80 },
  ];

  const otherSkills = [
    "Redux",
    "Zustand",
    "Tanstack Query",
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
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='space-y-6'
    >
      <div className='text-green-400 text-xl font-bold mb-5 mt-4'>
        Technical Skills
      </div>

      <div className='space-y-5'>
        <h3 className='text-yellow-300 text-lg'>Frontend Development</h3>
        <div className='space-y-5'>
          {frontendSkills.map((skill) => (
            <div key={skill.name} className='space-y-2.5'>
              <div className='flex justify-between'>
                <span className='text-gray-300'>{skill.name}</span>
                <span className='text-gray-400'>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className='h-2' />
            </div>
          ))}
        </div>
      </div>

      <div className='space-y-5'>
        <h3 className='text-yellow-300 text-lg'>Backend Development</h3>
        <div className='space-y-5'>
          {backendSkills.map((skill) => (
            <div key={skill.name} className='space-y-2.5'>
              <div className='flex justify-between'>
                <span className='text-gray-300'>{skill.name}</span>
                <span className='text-gray-400'>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className='h-2' />
            </div>
          ))}
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='text-yellow-300 text-lg'>Other Skills</h3>
        <div className='flex flex-wrap gap-2'>
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
