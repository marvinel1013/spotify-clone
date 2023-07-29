import MobileMenu from "@/components/MobileMenu";
import Playerbar from "@/components/Playerbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Marvinel | Spotify Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="h-full w-full flex bg-black text-white">
          <Sidebar />
          <MobileMenu />
          {children}
          <Playerbar />
        </main>
      </body>
    </html>
  );
}
