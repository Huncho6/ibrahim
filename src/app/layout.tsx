"use client";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import AtmosphericBackground from "@/components/AtmosphericBackground";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeScript from "@/components/ThemeScript";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fira",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${firaCode.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeScript />
        <Provider store={store}>
          <ThemeProvider>
            <a href="#main-content" className="skip-link">
              Skip to content
            </a>
            <div className="flex flex-1 min-h-screen">
              <Sidebar />
              <main id="main-content" className="flex-1 lg:pl-16 overflow-auto w-full relative">
                <AtmosphericBackground />
                <div className="relative z-10 min-h-screen">{children}</div>
                <div className="relative z-10">
                  <Footer />
                </div>
              </main>
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
