import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OpenMCP - Open Source MCP Servers Marketplace",
  description: "Discover and share Model Context Protocol servers. An open-source marketplace for MCP servers inspired by golf.dev",
  keywords: "MCP, Model Context Protocol, servers, marketplace, open source",
  authors: [{ name: "asklokesh" }],
  openGraph: {
    title: "OpenMCP - MCP Servers Marketplace",
    description: "Discover and share Model Context Protocol servers",
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
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-sm text-gray-600">
              <p>OpenMCP is an open-source project. Support development on <a href="https://github.com/sponsors/asklokesh" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">GitHub Sponsors</a></p>
              <p className="mt-2">Built with love for the MCP community</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
