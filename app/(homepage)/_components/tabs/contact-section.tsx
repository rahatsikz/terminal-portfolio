"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { Facebook, Github, LinkedIn, Mail } from "@/assets/svg/social-icons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setFeedback(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setFeedback({ type: "success", message: "Message sent successfully!" });
      formRef.current.reset();
    } catch {
      setFeedback({ type: "error", message: "Oops! Something went wrong." });
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='space-y-6'
    >
      <div className='text-green-400 text-xl font-bold mt-3.5 mb-3'>
        Contact Me
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <h3 className='text-yellow-300 text-lg'>Get In Touch</h3>
            <p className='text-gray-300'>
              I&apos;m currently available for freelance work and full-time
              positions. if you&apos;re looking to hire a developer for some
              creative work, feel free to reach out!
            </p>
          </div>

          <div className='space-y-3'>
            <div className='flex items-center gap-3'>
              <Mail className='fill-green-400 h-5 w-5' />
              <a
                href='mailto:contact@example.com'
                className='text-gray-300 hover:text-green-400 transition-colors tracking-wide'
              >
                mailtorahat@proton.me
              </a>
            </div>

            <div className='flex gap-4 mt-5'>
              <Link href='https://github.com/rahatsikz' target='_blank'>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full bg-gray-300 border-gray-600 hover:shadow-2xl'
                >
                  <Github className='h-5 w-5 fill-slate-800' />
                  <span className='sr-only'>GitHub</span>
                </Button>
              </Link>
              <Link
                href='https://www.linkedin.com/in/rahatsikz'
                target='_blank'
              >
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full bg-gray-300 border-gray-600 hover:shadow-2xl'
                >
                  <LinkedIn className='h-5 w-5 fill-slate-800' />
                  <span className='sr-only'>LinkedIn</span>
                </Button>
              </Link>
              <Link href='https://www.facebook.com/rahatsikz' target='_blank'>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full bg-gray-300 border-gray-600 hover:shadow-2xl'
                >
                  <Facebook className='h-5 w-5 fill-blue-700' />
                  <span className='sr-only'>Facebook</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-yellow-300 text-lg'>Send a Message</h3>
          <form ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
            <Input
              name='user_name'
              type='text'
              placeholder='Name'
              required
              className='bg-gray-700 border-gray-600 rounded-sm focus-visible:ring-green-500'
            />
            <Input
              name='user_email'
              type='email'
              placeholder='Email'
              required
              className='bg-gray-700 border-gray-600 rounded-sm focus-visible:ring-green-500'
            />
            <Textarea
              name='message'
              placeholder='Message'
              required
              className='bg-gray-700 border-gray-600 rounded-sm focus-visible:ring-green-500 min-h-16 resize-none'
            />

            {feedback && (
              <p
                className={`text-sm ${
                  feedback.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {feedback.message}
              </p>
            )}

            <Button
              type='submit'
              disabled={loading}
              className={`w-full gap-2 rounded-sm ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              <Send className='h-4 w-4' />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </Button>
          </form>
        </div>
      </div>

      <div className='bg-gray-800 p-4 rounded border border-gray-700'>
        <pre className='text-gray-300 whitespace-pre-wrap leading-7'>
          {`$ who is developer
Name: Rahat Newaz Sikder
Location: Dakshin Khan, Dhaka, Bangladesh
Status: Available for hire
Response time: < 24 hours`}
        </pre>
      </div>
    </motion.div>
  );
}
