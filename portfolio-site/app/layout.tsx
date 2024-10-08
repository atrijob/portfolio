import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Profile from "@/components/profile";
import ProjectPreview from "@/components/project_preview";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Atrijo's site",
  description: "Atrijo's portfolio site!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
          <div className="text-stone-500 flex flex-col gap-5">
            <Header />
            {children}
            <Footer />
          </div>
        </Layout>
      </body>
    </html>
  );
}
