"use client";

import "./globals.css";
import Link from "next/link";
import { OnboardingProvider } from "../context/OnboardingContext";
import { ThemeProvider } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import ThemeSwitcher from "../components/ThemeSwitcher";
import ConnectWalletButton from "../components/ConnectWalletButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en" className="light">
      <head />
      <body className="bg-[#FAFAFA] dark:bg-[#111] text-[#111] dark:text-[#FAFAFA] min-h-screen transition-colors">
        <OnboardingProvider>
          <ThemeProvider>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <nav className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-4">
                  <Link href="/" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                    <span role="img" aria-label="Home">🏠</span>
                  </Link>
                  <Link href="/oracle" className="hover:text-neutral-600 dark:hover:text-neutral-300">Oracle</Link>
                  <Link href="/companion" className="hover:text-neutral-600 dark:hover:text-neutral-300">Companion</Link>
                  <Link href="/reputation" className="hover:text-neutral-600 dark:hover:text-neutral-300">Reputation</Link>
                  <Link href="/generator" className="hover:text-neutral-600 dark:hover:text-neutral-300">Generator</Link>
                </div>
                <div className="flex items-center space-x-4">
                  <ThemeSwitcher />
                  <ConnectWalletButton />
                </div>
              </nav>
              <div className="flex gap-6">
                <Sidebar />
                <main className="flex-1 min-w-0">{children}</main>
              </div>
            </div>
          </ThemeProvider>
        </OnboardingProvider>
      </body>
    </html>
  );
}
