import { Ubuntu } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";
import Navbar from "@/components/Navbar";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu",
});



export const metadata = {
  title: "Manasseh Walshak Yakubu",
  description: "My portfolio website",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ubuntu.variable} font-primary`}>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer/>
        <ScrollUp/>
      </body>
    </html>
  );
}
