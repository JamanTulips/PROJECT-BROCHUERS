import { Inter, Saira } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
// Custom bootstrap build from legacy
import "../styles/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "../components/BootstrapClient";
// import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import { rootMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});



export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${saira.variable}`}>
        <JsonLd />
        {/* <TopBar /> */}
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
