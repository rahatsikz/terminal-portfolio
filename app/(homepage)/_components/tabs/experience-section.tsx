"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Brise Hospitality Management Private Limited",
    location: "Maharashtra, India",
    title: "Full Stack Developer",
    date: "Dec 2024 - Current",
    responsibilities: [
      "Developed a vacation rental platform, building both web and mobile versions with React.js",
      "Collaborated with designers and backend teams to ship cross-platform features",
    ],
  },
  {
    company: "DevRiser LLC",
    location: "Delaware, USA",
    title: "Full Stack Developer",
    date: "Aug 2023 - Jan 2024",
    responsibilities: [
      "Built Company's in-house SaaS product Customer Relationship Management",
      "Utilized Next.js to enhance server-side rendering and optimize performance by 20-30%",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col gap-5'
    >
      <h2 className='text-yellow-300 text-2xl font-semibold mt-1.5'>
        Experience
      </h2>

      <div className='relative border-l border-gray-700 ml-3 pl-6 space-y-10'>
        {experiences.map((exp, idx) => (
          <div key={idx} className='relative group'>
            {/* Dot */}
            <span className='absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-green-500 border-2 border-gray-900' />

            {/* Content */}
            <div>
              <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-1'>
                <h3 className='text-green-400 text-lg font-semibold'>
                  {exp.title}
                </h3>
                <span className='text-sm text-gray-500 mt-1 md:mt-0'>
                  {exp.date}
                </span>
              </div>
              <p className='text-gray-300 font-medium'>
                {exp.company}, <span className='italic'>{exp.location}</span>
              </p>
              <ul className='mt-2 text-gray-400 list-disc list-inside space-y-1 text-sm'>
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p className='text-gray-400 text-sm italic mt-3'>
        Type &apos;cd contact&apos; to get in touch about collaboration
        opportunities.
      </p>
    </motion.div>
  );
}
