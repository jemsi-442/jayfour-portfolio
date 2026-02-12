import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Jemsi Pallangyo A.K.A JAYFOUR | Full Stack Software Engineer",
  description:
    "Portfolio of Jemsi — Full Stack Software Engineer specializing in React, Next.js, Java SpringBoot, PHP Laravel, and modern web & mobile development. Based in Dodoma, Tanzania.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "SpringBoot",
    "Java",
    "Node.js",
    "MongoDB",
    "Symfony",
    "Laravel",
    "Software Engineer",
    "Jemsi Pallangyo",
    "Tanzania",
    "Web Development",
  ],
  authors: [{ name: "Jemsi Pallangyo A.K.A JAYFOUR" }],
  openGraph: {
    title: "Jemsi Pallangyo A.K.A JAYFOUR | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, SpringBoot, Laravel, and modern web & mobile development.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const bodyClass = `${poppins.variable} ${inter.variable} antialiased bg-background text-foreground`;

  return (
    <html lang="en">
      <body className={bodyClass}>
        {children}
      </body>
    </html>
  );
}
