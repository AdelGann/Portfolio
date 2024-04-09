import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Perfil - Adel Gannem",
  description: "Hi! i'm Adel Gannem a fullstack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
