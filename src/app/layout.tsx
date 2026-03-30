import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Dr. Priyanka Rathee | Assistant Professor — NIT Hamirpur",
  description:
    "Academic portfolio of Dr. Priyanka Rathee, Assistant Professor, Department of Computer Science & Engineering, NIT Hamirpur. Research in IoT, AIoT, WSN, Generative AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
