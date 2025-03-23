import { motion } from "framer-motion";
import profileImg from "@/assets/image/profile.jpg";
import Image from "next/image";
import React from "react";

export default function HomeSection() {
  return (
    <div className='flex flex-col gap-4 h-full py-2'>
      <motion.div
        // Initial & animate states for fade-in
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className='mt-2 grid lg:place-items-center lg:grid-cols-2 lg:gap-4'
      >
        <pre className='text-green-500 whitespace-pre-wrap '>
          {`
*******    *****    *   *    *****   *******
*      *   *   *    *   *    *   *      *   
*      *   *   *    *   *    *   *      *   
*******    *****    *****    *****      *
*      *   *   *    *   *    *   *      *   
*      *   *   *    *   *    *   *      *   
*      *   *   *    *   *    *   *      *   

`}
        </pre>
        <Image
          src={profileImg.src} // <--- Replace with your image path
          alt='My Headshot'
          width={300}
          height={300}
          className='rounded-full object-cover size-40 p-4 border-2   border-green-400'
        />
      </motion.div>

      <div>
        {/* Optional: A quick introduction below */}
        <p className='text-white mt-4 lg:px-5 px-2.5 text-[15px]'>
          Hi, Myself Rahat, a Full Stack Developer... Welcome to my
          Terminal-themed Portfolio!
        </p>

        <p className='text-gray-400 text-sm italic lg:px-4 px-2 mt-2'>
          Type &apos;cd about&apos; to know more about me or &apos;help&apos; to
          see available commands
        </p>
      </div>
    </div>
  );
}
