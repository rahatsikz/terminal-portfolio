import { motion } from "framer-motion";
import profileImg from "@/assets/image/profile.jpg";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function HomeSection() {
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <div className='flex flex-col gap-0 h-full'>
      <motion.div
        // Initial & animate states for fade-in
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className='mt-2 flex items-center lg:justify-between lg:px-5 gap-4'
      >
        <pre className='text-green-500 whitespace-pre-wrap font-mono'>
          {isTablet
            ? `
*******    *****    *   *    *****   *******
*      *   *   *    *   *    *   *      *   
*      *   *   *    *   *    *   *      *   
*******    *****    *****    *****      *
*      *   *   *    *   *    *   *      *   
*      *   *   *    *   *    *   *      *   
*      *   *   *    *   *    *   *      *   

`
            : `****    **   **   *****  
** **   ***  **  **      
** **   **** **  **      
****    ** ****  *****   
** **   **  ***      **  
** **   **   **      **  
** **   **   **  ***** `}
        </pre>
        <Image
          src={profileImg.src}
          alt='My Headshot'
          width={300}
          height={300}
          className='rounded-full object-cover md:size-40 size-28 p-4 border-2 border-green-400'
        />
      </motion.div>

      <div className=' text-gray-300'>
        <div className='text-gray-300 mt-4 space-y-2 text-[15px]'>
          <p>👋 Hello there!</p>
          <p>
            I&apos;m Rahat, a Full Stack Developer specializing in building
            modern, responsive and scalable web apps using React, Next.js,
            Express.js and PostgreSQL.
          </p>
        </div>
        <ul className='space-y-1.5 mt-5'>
          <li>
            💡 Passionate about solving real problems, simplifying complex
            systems, and building clean, accessible UIs with performance in
            mind.
          </li>
          <li>
            🧠 Diagnosed with Bipolar Affective Disorder — but I code through
            the chaos. Resilience isn&apos;t optional; it&apos;s embedded in my
            commits.
          </li>
          <li>
            💼 Currently looking for remote frontend roles, collaboration
            opportunities, or small freelance gigs.
          </li>
        </ul>
        <ul className='space-y-1.5 mt-5'>
          <li>🔍 Type &apos;cd about&apos; to learn more about my journey.</li>
          <li>💻 Type &apos;cd projects&apos; to view my latest work.</li>
          <li> 📨 Type &apos;cd contact&apos; if you want to get in touch.</li>
          <li>❓ Type &apos;help&apos; to list all commands.</li>
        </ul>
        <p className='mt-4 text-green-400 italic'>
          # Code is my craft. Story is my superpower.
        </p>

        {/* <p className='text-gray-400 text-sm italic lg:px-4 px-2 mt-2'>
          Type &apos;cd about&apos; to know more about me or &apos;help&apos; to
          see available commands
        </p> */}
      </div>
    </div>
  );
}
