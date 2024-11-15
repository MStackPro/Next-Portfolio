import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-Ubuntu_Mono"
});


export const metadata = {
  title: "Manasseh Walshak Yakubu",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={ubuntu.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer/>
        <ScrollUp/>
      </body>
    </html>
  );
}
