import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List",
  description: "An anime tracker for watched and want to watch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
          <Link href="">Watched</Link>
          <Link href="">Watch List</Link>
          </nav>
        </header>
        {children}
        <footer>&copy; Jeremie Agee 2024</footer>
        </body>
    </html>
  );
}
