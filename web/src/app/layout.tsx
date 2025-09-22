import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Agent Platform — Provisioned, Hosted, and Integrated",
  description:
    "Request an AI agent for your business. We auto-build, host, and monitor it. Integrate via API keys and connectors. Billing: subscription + usage.",
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
        <header className="border-b border-black/10 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold">AIAgentCompany</Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/#how-it-works" className="hover:underline">How it works</Link>
              <Link href="/request" className="hover:underline">Request an Agent</Link>
            </nav>
          </div>
        </header>
        <div>{children}</div>
        <footer className="mt-16 border-t border-black/10 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-6 text-sm flex items-center justify-between">
            <p>© {new Date().getFullYear()} AIAgentCompany. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Docs</a>
              <a href="#" className="hover:underline">Status</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
