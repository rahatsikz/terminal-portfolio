import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rahat Newaz Sikder's Portfolio | Full Stack Developer",
  description:
    "Explore the portfolio of Rahat, a skilled full-stack developer showcasing innovative frontend and backend projects using React, Next.js, Node.js, PostgreSQL, and more.",
  openGraph: {
    title: "Rahat's Portfolio | Full Stack Developer",
    description:
      "Explore the portfolio of Rahat, featuring full-stack web development projects with cutting-edge technologies like React, Next.js, Node.js, and PostgreSQL.",
    url: "https://rahatsikder.com", // Replace with your website's URL
    siteName: "Rahat's Portfolio",
    images: [
      {
        url: "/profile.jpg", // Replace with a path to a relevant image for social media
        width: 1200,
        height: 630,
        alt: "Rahat's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your-twitter-handle", // Replace with your Twitter handle
    creator: "@your-twitter-handle", // Replace with your Twitter handle
    title: "Rahat's Portfolio - Web Developer | Full-Stack Projects",
    description:
      "Explore Rahat's web development portfolio featuring full-stack projects with React, Next.js, Node.js, and PostgreSQL.",
    // image: "https://your-website-url.com/og-image.jpg", // Replace with the URL to your image
  },
  keywords:
    "Rahat, Rahat Newaz Sikder, Portfolio, Web Developer, Full Stack Developer, React, Next.js, Node.js, PostgreSQL, Frontend, Backend, JavaScript, TypeScript, Web Development",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.className} ${geistMono.className}  flex min-h-screen flex-col items-center justify-center p-4 bg-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
