import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Porfolio | DP",
  description:
    "Welcome to my digital sanctuary, where creativity meets functionality. Explore a curated collection of my finest works, meticulously crafted to inspire and captivate. From sleek designs to immersive experiences, each project is a testament to my passion for innovation and attention to detail. Embark on a journey through my portfolio and discover the intersection of artistry and technology, where imagination knows no bounds. Let's collaborate and bring your vision to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
