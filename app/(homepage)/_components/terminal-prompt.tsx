"use client";

import type React from "react";

import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { cn } from "@/lib/utils";

interface TerminalPromptProps extends React.HTMLAttributes<HTMLDivElement> {
  onCommand: (command: string) => void;
}

const TerminalPrompt = forwardRef<
  { focusInput: () => void },
  TerminalPromptProps
>(({ onCommand, ...props }, ref) => {
  const [command, setCommand] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);

  // Expose the focusInput method to parent components
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  // Handle command submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCommand(command);
    setCommand("");
  };

  // Focus input when clicking anywhere on the prompt
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Auto-focus the input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={promptRef}
      className={cn("flex items-center", props.className)}
      onClick={focusInput}
    >
      <span className='text-green-400'>rahat@portfolio:~$</span>
      <form onSubmit={handleSubmit} className='flex-1 ml-2 relative'>
        <input
          ref={inputRef}
          type='text'
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className='w-full bg-transparent outline-none caret-transparent opacity-0'
          aria-label='Terminal command input'
        />
        <div
          className={cn(
            "absolute left-0 -top-[1px] pointer-events-none text-background"
            // command.length ? "top-0" : "top-0.5"
          )}
          aria-hidden='true'
        >
          {command}
          <span
            className={cn(
              "inline-block w-0.5 h-3.5 top-1.5 absolute bg-green-400",
              cursorVisible ? "opacity-100" : "opacity-0"
            )}
          ></span>
        </div>
      </form>
    </div>
  );
});

TerminalPrompt.displayName = "TerminalPrompt";

export default TerminalPrompt;
