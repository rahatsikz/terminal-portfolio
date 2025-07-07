"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Github } from "@/assets/svg/social-icons";
import Image from "next/image";
import Link from "next/link";
import { projectsArr } from "@/data";

export default function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col gap-5'
    >
      <div className='text-yellow-300 leading-0 text-2xl font-semibold mb-3 mt-5 pl-1.5'>
        Projects
      </div>

      <div className='grid gap-6'>
        {projectsArr.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className='bg-gray-800 border-gray-700 overflow-hidden p-0 flex flex-col md:flex-row'>
              {/* Image Section */}
              <div className='md:w-1/3 border-y md:border-y-0 md:border-r border-input/5 flex justify-center items-center bg-gray-700 overflow-hidden'>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='w-full h-40 md:h-full object-cover rounded-none'
                  width={300}
                  height={200}
                />
              </div>

              {/* Content Section */}
              <div className='md:w-2/3 flex flex-col justify-between px-3.5 py-0 md:py-6'>
                <div>
                  <CardHeader className='p-0'>
                    <CardTitle className='text-gray-200 leading-6 text-pretty'>
                      {project.title}
                    </CardTitle>
                    <CardDescription className='text-gray-400 mt-1 text-pretty'>
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className='p-0 mt-4'>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant='outline'
                          className='bg-gray-700 text-gray-300 border-gray-600'
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className='flex gap-3 mt-5 p-0'>
                  {project.github && (
                    <Link
                      target={project.github ? "_blank" : "_self"}
                      href={project.github || "#"}
                    >
                      <Button variant='outline' size='sm' className='gap-2'>
                        <Github className='h-4 w-4' />
                        <span>Code</span>
                      </Button>
                    </Link>
                  )}
                  <Link target='_blank' href={project.demo}>
                    <Button variant='outline' size='sm' className='gap-2'>
                      <ExternalLink className='h-4 w-4' />
                      <span>Demo</span>
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className='bg-gray-800 p-4 rounded border border-gray-700'>
        <pre className='text-gray-300 whitespace-pre-wrap leading-8'>
          {`$ git log --oneline -n 3
a1b2c3d 🚀 Launched latest project: Avenaa
e4f5g6h 📊 Improved data visualization in Nomad Horizon App
i7j8k9l 🛡️ Added middleware for enhanced security in Red UI Site`}
        </pre>
      </div>

      <p className='text-gray-400 text-sm italic'>
        Type &apos;cd experience&apos; to get in touch about collaboration
        opportunities.
      </p>
    </motion.div>
  );
}
