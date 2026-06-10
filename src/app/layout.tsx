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

const faviconUrl =
  "https://res.cloudinary.com/dh60kpxg5/image/upload/v1781112467/ChatGPT_Image_Jun_10_2026_06_02_14_PM_t4yywr.png";

export const metadata: Metadata = {
  title: "Ibrahim",
  description:
    "Portfolio of Ibrahim Abodunrin — full-stack developer building intuitive, scalable digital products with clarity, reliability, and lasting impact.",
  icons: {
    icon: [{ url: faviconUrl, type: "image/png" }],
    shortcut: [{ url: faviconUrl, type: "image/png" }],
    apple: [{ url: faviconUrl, type: "image/png" }],
  },
  openGraph: {
    title: "Ibrahim",
    description:
      "Portfolio of Ibrahim Abodunrin — full-stack developer building intuitive, scalable digital products with clarity, reliability, and lasting impact.",
    type: "website",
    images: [faviconUrl],
  },
  twitter: {
    card: "summary",
    title: "Ibrahim Abodunrin | Full-Stack Developer",
    description:
      "Portfolio of Ibrahim Abodunrin — full-stack developer building intuitive, scalable digital products with clarity, reliability, and lasting impact.",
    images: [faviconUrl],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${firaCode.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href={faviconUrl} type="image/png" sizes="any" />
        <link rel="shortcut icon" href={faviconUrl} type="image/png" />
        <link rel="apple-touch-icon" href={faviconUrl} />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
