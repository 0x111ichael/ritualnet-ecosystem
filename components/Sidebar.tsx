"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useOnboarding } from "../context/OnboardingContext";

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

export default function Sidebar() {
  const pathname = usePathname();
  const { tasks, progress } = useOnboarding();
  // future mobile toggle placeholder (not used yet)

  const completedCount = tasks.filter((t) => t.completed).length;

  const sections: NavSection[] = [
    {
      label: "Home",
      items: [
        { href: "/dashboard", label: "Dashboard", icon: "🏠" },
        { href: "/profile", label: "Profile", icon: "👤" },
      ],
    },
    {
      label: "Tools",
      items: [
        { href: "/oracle", label: "Oracle", icon: "🔮" },
        { href: "/companion", label: "Companion", icon: "💬" },
        { href: "/reputation", label: "Reputation", icon: "⭐" },
        { href: "/generator", label: "Generator", icon: "🎨" },
      ],
    },
    {
      label: "Community",
      items: [
        { href: "/market", label: "Marketplace", icon: "🏪" },
        { href: "/governance", label: "Governance", icon: "⚖️" },
        { href: "/leaderboard", label: "Leaderboard", icon: "🏆" },
      ],
    },
    {
      label: "Resources",
      items: [
        { href: "/docs", label: "Documentation", icon: "📚" },
        { href: "/guides", label: "Guides", icon: "📖" },
        { href: "/support", label: "Support", icon: "💡" },
      ],
    },
  ];

  return (
    <aside className="hidden md:block w-64 shrink-0">
      <div className="sticky top-6">
        <div className="p-4 rounded-lg shadow-sm bg-white">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-medium">Ritual</div>
            <div className="text-xs subtext">{progress}%</div>
          </div>

          <div className="w-full bg-[rgba(0,0,0,0.05)] h-2 rounded overflow-hidden mb-3">
            <div className="h-2 bg-[#5B4DF4]" style={{ width: `${progress}%`, transition: "width 300ms ease" }} />
          </div>

          <nav className="space-y-6">
            {sections.map((section) => (
              <div key={section.label}>
                <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                  {section.label}
                </h2>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-2 py-2 rounded ${active ? "bg-[rgba(91,77,244,0.06)] font-semibold" : "text-sm subtext"}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                          </div>
                          {item.href === "/dashboard" ? (
                            <span className="text-xs subtext">{completedCount}/{tasks.length}</span>
                          ) : null}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
