"use client";
import type React from "react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Minus, Square, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import TerminalPrompt from "./terminal-prompt";
import { ScrollArea } from "@/components/ui/scroll-area";
import { dummyData, renderTabContent } from "./abstract-tab-content";
import { tabs } from "@/data";

export default function Terminal() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentOutput, setCurrentOutput] = useState<React.ReactNode | null>(
    null
  );
  const [error, setError] = useState<React.ReactNode | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalPromptRef = useRef<{ focusInput: () => void } | null>(null);

  const commandActions: Record<string, () => void> = {
    help: () =>
      setCurrentOutput(
        <div className='text-green-400 mt-2'>
          <p>Available commands:</p>
          <p>- about: Learn about me</p>
          <p>- skills: View my technical skills</p>
          <p>- projects: See my portfolio projects</p>
          <p>- contact: Get my contact information</p>
          <p>- clear: Clear the terminal</p>
          <p>- help: Show this help message</p>
        </div>
      ),
    home: () => handleTabChange("home"),
    about: () => handleTabChange("about"),
    skills: () => handleTabChange("skills"),
    projects: () => handleTabChange("projects"),
    contact: () => handleTabChange("contact"),
    clear: () => {
      setCommandHistory([]);
      setCurrentOutput(null);
      setError(null);
    },
    "": () => {
      setCurrentOutput(null);
      setCommandHistory([]);
    },
  };

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();

    if (command === "help" && commandActions[cmd]) {
      commandActions[cmd]();
      setCommandHistory((prev) => [...prev, command]);
      setError(null);
    } else if (commandActions[cmd]) {
      commandActions[cmd]();
      setError(null);
    } else {
      setError(
        <p className='text-red-400 mt-0.5'>
          Command not found: {command}. Type &apos;help&apos; for available
          commands.
        </p>
      );
    }

    terminalPromptRef.current?.focusInput();
  };

  const handleTabChange = (name: string) => {
    setActiveTab(name);
    setCurrentOutput(null);
    setCommandHistory([]);
    terminalPromptRef.current?.focusInput();
  };

  // Focus the prompt when the component mounts
  useEffect(() => {
    if (terminalPromptRef.current) {
      terminalPromptRef.current.focusInput();
    }
  }, []);

  if (isMinimized) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='fixed bottom-4 right-4'
      >
        <Button
          variant='outline'
          className='bg-gray-800 text-green-400 border-green-500'
          onClick={() => setIsMinimized(false)}
        >
          Terminal
        </Button>
      </motion.div>
    );
  }

  const TerminalHeader = () => (
    <div className='bg-gray-800 px-4 py-2 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <div className='h-3 w-3 rounded-full bg-red-500'></div>
        <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
        <div className='h-3 w-3 rounded-full bg-green-500'></div>
      </div>
      <div className='text-gray-300 font-mono text-xs lg:text-sm whitespace-nowrap'>
        rahat@portfolio ~{activeTab !== "home" ? `/${activeTab}` : ""}
      </div>
      <div className='flex items-center gap-2'>
        <Button
          variant='ghost'
          size='icon'
          className='h-6 w-6 text-gray-400 hover:text-amber-200 hover:bg-amber-500/10'
          onClick={() => setIsMinimized(true)}
        >
          <Minus className='h-4 w-4' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='h-6 w-6 text-gray-400 hover:text-green-400 hover:bg-green-500/10'
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          {isFullscreen ? (
            <Minimize2 className='h-4 w-4' />
          ) : (
            <Square className='h-4 w-4' />
          )}
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='h-6 w-6 text-gray-400  hover:bg-red-500/10 hover:text-red-400'
        >
          <X className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );

  const CustomTabs = () => (
    <div className='bg-gray-800 border-b border-gray-700 px-2'>
      <div className='flex flex-wrap'>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={cn(
              "px-3 py-2 text-sm rounded-t-lg rounded-b-none h-9",
              activeTab === tab
                ? "bg-gray-900 text-green-400"
                : "text-gray-400 hover:text-gray-200"
            )}
            onClick={() => handleTabChange(tab)}
          >
            ~/{tab}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-2xl flex flex-col",
        isFullscreen ? "fixed inset-0 z-50" : "w-full max-w-4xl"
      )}
    >
      {/* Terminal Header */}
      <TerminalHeader />
      {/* Custom Tabs */}
      <CustomTabs />
      {/* Command Prompt */}
      <div className='bg-gray-900 border-b border-gray-700 py-2.5  pl-7'>
        <ScrollArea
          className={cn(
            "space-y-2 py-1.5 h-[46px] ",
            commandHistory.length && "h-40"
          )}
        >
          <TerminalPrompt ref={terminalPromptRef} onCommand={handleCommand} />

          {commandHistory.map((cmd, index) => (
            <div key={index} className='space-y-1  overflow-auto '>
              <div className=' hidden'>
                <span className='text-green-400'>rahat@portfolio:~$</span>
                <span className='ml-2'>{cmd}</span>
              </div>
              {index === commandHistory.length - 1 && currentOutput}
            </div>
          ))}
        </ScrollArea>
        {error ? error : null}
      </div>

      <ScrollArea
        className={cn(
          "h-[425px] pt-1 pb-5 px-3.5",
          isFullscreen ? "h-[calc(100vh-10rem)]" : "h-[360px]"
        )}
      >
        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className={cn("bg-gray-900  text-gray-200 font-mono")}
        >
          {renderTabContent(activeTab as keyof typeof dummyData)}
        </div>
      </ScrollArea>
    </motion.div>
  );
}
