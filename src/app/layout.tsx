"use client";
import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Footer from "@/components/Footer";
import ToggleButton from "@/components/ToggleButton";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Provider store={store}>
          <div className="flex flex-1 min-h-screen">
            <Sidebar />
            <main className="flex-1 lg:ml-[280px] overflow-auto w-full">
              <div className="min-h-screen">{children}</div>
              <Footer />
            </main>
            <ToggleButton />
          </div>
        </Provider>
      </body>
    </html>
  );
}
