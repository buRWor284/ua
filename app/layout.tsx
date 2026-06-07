import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Usman Ajmal",
    template: "%s | Usman Ajmal",
  },
  description: "Software engineer writing about code, technology, and ideas.",
  openGraph: {
    title: "Usman Ajmal",
    description: "Software engineer writing about code, technology, and ideas.",
    url: "https://usmanajmal.com",
    siteName: "Usman Ajmal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
