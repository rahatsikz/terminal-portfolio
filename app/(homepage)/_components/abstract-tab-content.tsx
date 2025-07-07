import { ChevronRight } from "lucide-react";
import AboutSection from "./tabs/about-section";
import ContactSection from "./tabs/contact-section";
import HomeSection from "./tabs/home-section";
import ProjectsSection from "./tabs/projects-section";
import SkillsSection from "./tabs/skills-section";
import ExperienceSection from "./tabs/experience-section";

export const dummyData = {
  home: {
    command: "cd ~/home",
    component: <HomeSection />,
  },
  about: {
    command: "cd ~/about",
    component: <AboutSection />,
  },
  skills: {
    command: "cd ~/skills",
    component: <SkillsSection />,
  },
  projects: {
    command: "cd ~/projects",
    component: <ProjectsSection />,
  },
  experience: {
    command: "cd ~/experience",
    component: <ExperienceSection />,
  },
  contact: {
    command: "cd ~/contact",
    component: <ContactSection />,
  },
};

export const renderTabContent = (activeTab: keyof typeof dummyData) => {
  switch (activeTab) {
    default:
      return (
        <div className='p-0 md:p-4'>
          {dummyData[activeTab]?.command && (
            <div className='flex mb-2'>
              <ChevronRight className='text-green-400 mr-1 h-5 w-5' />
              <span className='text-green-400'>
                {dummyData[activeTab].command}
              </span>
            </div>
          )}
          {dummyData[activeTab]?.component}
        </div>
      );
  }
};
