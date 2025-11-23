import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purpose Building Systems - Modern Building Solutions",
  description: "Transform your vision into reality with Purpose Building Systems. Expert construction, innovative design, and quality craftsmanship for commercial and residential projects.",
  keywords: ["construction", "building", "architecture", "commercial construction", "residential construction"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
