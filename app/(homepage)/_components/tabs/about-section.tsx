"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='space-y-4'
    >
      <div className='text-green-400 text-xl font-bold mb-4 mt-5 pl-0.5'>
        About Me
      </div>

      <p className='text-gray-300 text-pretty'>
        I started my development journey in 2017 and switched to the JavaScript
        stack in 2022, bringing fresh energy to modern development. I specialize
        in building clean, responsive UIs with TypeScript and React, making sure
        they don’t just look good but feel right. I have worked remotely as a
        Full Stack Developer for a US-based startup, focusing on SaaS products
        and scalable solutions. Currently, I am working as a Software
        Development Lead on a contract basis for a local startup, driving
        projects and guiding the team.
      </p>

      <p className='text-gray-300 text-pretty mb-6'>
        I thrive on teamwork and staying sharp in the fast-moving dev world.
        While I&apos;m open to exploring different databases, I have a soft spot
        for RDBMS over NoSQL — there’s just something satisfying about
        well-organized data.
      </p>

      <div className='bg-gray-800 p-7 mt-8  rounded border border-gray-700'>
        <p className='text-gray-300'>
          <span className='text-blue-400'>const</span>{" "}
          <span className='text-yellow-300'>developer</span> = {"{"}
          <br />
          &nbsp;&nbsp;<span className='text-green-300'>name</span>:{" "}
          <span className='text-orange-300'>
            &quot;Rahat Newaz Sikder&quot;
          </span>
          ,
          <br />
          &nbsp;&nbsp;<span className='text-green-300'>title</span>:{" "}
          <span className='text-orange-300'>
            &quot;Full Stack Developer&quot;
          </span>
          ,
          <br />
          &nbsp;&nbsp;<span className='text-green-300'>location</span>:{" "}
          <span className='text-orange-300'>
            &quot;Dakshin Khan, Dhaka-1230&quot;
          </span>
          ,
          <br />
          &nbsp;&nbsp;<span className='text-green-300'>available</span>:{" "}
          <span className='text-purple-400'>true</span>
          <br />
          {"}"};
        </p>
      </div>

      <p className='text-gray-400 text-sm italic mt-6'>
        Type &apos;skills&apos; to see my technical expertise or
        &apos;projects&apos; to view my work.
      </p>
    </motion.div>
  );
}
