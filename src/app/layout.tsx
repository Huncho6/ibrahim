import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibrahim",
  description:
    "Portfolio of Ibrahim Abodunrin — full-stack developer building intuitive, scalable digital products with clarity, reliability, and lasting impact.",
  openGraph: {
    title: "Ibrahim Abodunrin | Full-Stack Developer",
    description:
      "Portfolio of Ibrahim Abodunrin — full-stack developer building intuitive, scalable digital products with clarity, reliability, and lasting impact.",
    type: "website",
    images: ["/favicon.png"],
  },
  twitter: {
    card: "summary",
    title: "Ibrahim Abodunrin | Full-Stack Developer",
    description:
      "Portfolio of Ibrahim Abodunrin — full-stack developer building intuitive, scalable digital products with clarity, reliability, and lasting impact.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${firaCode.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
